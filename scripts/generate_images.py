"""Generate Meerklets design images via OpenAI gpt-image-1.

Parses prompts from reference/image-generation-plan.md, expands the
[STYLE PREFIX] tokens using the plan's own style anchor, and calls the
OpenAI Images API. Outputs land in reference/images/generated/<filename>
matching the filenames defined in the plan.

Usage:
    python scripts/generate_images.py --dry-run          # 4 anchor images
    python scripts/generate_images.py --only a.png,b.png
    python scripts/generate_images.py --list             # list all prompts
"""

from __future__ import annotations

import argparse
import base64
import os
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PLAN_PATH = PROJECT_ROOT / "reference" / "image-generation-plan.md"
OUTPUT_DIR = PROJECT_ROOT / "reference" / "images" / "generated"
CHARACTER_REF_DIR = PROJECT_ROOT / "reference" / "images" / "characters"
ANCHOR_DIR = PROJECT_ROOT / "reference" / "images" / "anchors"

IMAGES_ROOT = PROJECT_ROOT / "reference" / "images"

# Category-specific style anchors, keyed by filename path prefix.
# Paths are relative to reference/images/. First listed = primary anchor.
# Max 2 anchors per category to avoid overwhelming gpt-image-1.
# Close-up texture/lighting/UI shots are intentionally absent — no refs.
CATEGORY_ANCHORS: dict[str, list[str]] = {
    "factory-exterior/": [
        "anchors/factory-park-anchor.png",
        "anchors/panorama-business-park-wide.png",
    ],
    "environment/": [
        "anchors/panorama-aerial-park.png",
    ],
    "exterior-objects/": [
        "anchors/panorama-approaching.png",
        "generated/environment/pathway-main-approach.png",
    ],
    "chimney/": [
        "anchors/factory-park-anchor.png",
    ],
    "narrative-moments/": [
        "anchors/factory-park-anchor.png",
    ],
    "barriers/": [
        "anchors/factory-park-anchor.png",
    ],
    "floor-1-infrastructure/": [
        "anchors/factory-park-anchor.png",
    ],
    "floor-2-production/": [
        "anchors/factory-park-anchor.png",
    ],
    "floor-3-orchestration/": [
        "anchors/factory-park-anchor.png",
    ],
    "floor-4-command/": [
        "anchors/panorama-from-factory-f4.png",
    ],
    "characters/": [
        "characters/autosergei.jpg",
    ],
}

STYLE_PREFIX_BASE = (
    "Bright cyberpunk architectural visualisation, golden hour lighting, "
    "modern concrete and glass building, clean futuristic aesthetic, "
    "optimistic and warm, neon accent lighting in cobalt blue (#2843d0) "
    "and purple (#b984ff), polished white stone surfaces, vertical forest "
    "buildings in background, high detail, 4K render, architectural "
    "illustration style, soft shadows, volumetric light"
)

INTERIOR_LIGHTING_REPLACEMENT = "cool interior neon lighting with warm ambient fill"
CLOSE_UP_ADD = "Product photography style, studio lighting, isolated on dark background"
TEXTURE_ADD = "Seamless tileable texture, flat lighting, square format"
CHARACTER_ADD = "3D character render, Pixar-adjacent style, clean background"
PHASE_1_ADD = "Warm tungsten lighting, slightly cluttered workspace, artisan workshop feel"
PHASE_3_ADD = "Zen-like efficiency, clean glowing surfaces, hyper-organised, calm blue-purple ambient"

DRY_RUN_FILENAMES: list[str] = [
    "factory-exterior/phase3-cutaway-4floor-hero.png",
    "environment/panorama-business-park-wide.png",
    "factory-exterior/phase1-cutaway-1floor.png",
    "characters/phase2-first-meerklet.png",
]

SIZE_HINTS: dict[str, str] = {
    "factory-exterior/phase3-cutaway-4floor-hero.png": "1536x1024",
    "environment/panorama-business-park-wide.png": "1536x1024",
    "factory-exterior/phase1-cutaway-1floor.png": "1536x1024",
    "characters/phase2-first-meerklet.png": "1024x1024",
}

CHARACTER_REFS: dict[str, list[str]] = {
    "characters/phase2-first-meerklet.png": ["autosergei.jpg"],
}


def get_refs_for(filename: str) -> list[Path]:
    """Return reference images to attach for a given filename.

    Order: category anchors first, then per-image character refs.
    Non-existent paths are dropped silently so missing anchors don't break runs.
    """
    refs: list[Path] = []
    for prefix, anchor_paths in CATEGORY_ANCHORS.items():
        if filename.startswith(prefix):
            for rel in anchor_paths:
                p = IMAGES_ROOT / rel
                if p.exists():
                    refs.append(p)
            break
    for char_ref in CHARACTER_REFS.get(filename, []):
        p = CHARACTER_REF_DIR / char_ref
        if p.exists() and p not in refs:
            refs.append(p)
    return refs


@dataclass
class ImagePrompt:
    number: int
    filename: str
    description: str
    prompt: str


ROW_RE = re.compile(
    r"^\|\s*(\d+)\s*\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|\s*`([^`]+)`\s*\|\s*$"
)
STYLE_TAG_RE = re.compile(r"\[STYLE PREFIX(?:\s*[\u2014-]\s*([^\]]+))?\]")


def parse_plan(plan_path: Path) -> list[ImagePrompt]:
    prompts: list[ImagePrompt] = []
    with plan_path.open() as f:
        for line in f:
            m = ROW_RE.match(line.rstrip("\n"))
            if m:
                num, filename, desc, prompt = m.groups()
                prompts.append(
                    ImagePrompt(
                        number=int(num),
                        filename=filename,
                        description=desc.strip(),
                        prompt=prompt.strip(),
                    )
                )
    return prompts


def expand_style_prefix(prompt: str, filename: str = "") -> str:
    """Replace [STYLE PREFIX ...] tokens with the plan's full style anchor.

    Modifier rules (per the plan's style guide):
      - 'interior variant'  → REPLACE 'golden hour lighting' with cool interior
      - 'close-up variant'  → APPEND product photography line
      - 'texture variant'   → APPEND seamless tileable line
      - 'character variant' → APPEND 3D character render line
      - 'Phase 1' anywhere  → APPEND warm tungsten line
      - 'Phase 3' anywhere  → APPEND zen-like efficiency line

    Phase inference: if `filename` is provided and starts with phase1- / phase3-
    AND an interior variant is used, the matching phase addition is applied
    even when the tag doesn't explicitly include 'Phase N feel'. This covers
    the plan's Phase 3 interior prompts (e.g. #125, #135) that use a bare
    `[STYLE PREFIX — interior variant]` tag but should still read zen-like.
    """
    basename = filename.rsplit("/", 1)[-1]

    def repl(m: re.Match[str]) -> str:
        modifiers_str = m.group(1) or ""
        modifiers = [s.strip() for s in modifiers_str.split(",") if s.strip()]
        has_interior = any("interior variant" in mod for mod in modifiers)

        prefix = STYLE_PREFIX_BASE
        if has_interior:
            prefix = prefix.replace("golden hour lighting", INTERIOR_LIGHTING_REPLACEMENT)

        additions: list[str] = []
        for mod in modifiers:
            if "close-up" in mod and CLOSE_UP_ADD not in additions:
                additions.append(CLOSE_UP_ADD)
            if "texture" in mod and TEXTURE_ADD not in additions:
                additions.append(TEXTURE_ADD)
            if "character variant" in mod and CHARACTER_ADD not in additions:
                additions.append(CHARACTER_ADD)
            if "Phase 1" in mod and PHASE_1_ADD not in additions:
                additions.append(PHASE_1_ADD)
            if "Phase 3" in mod and PHASE_3_ADD not in additions:
                additions.append(PHASE_3_ADD)

        # Phase inference from filename, gated on interior variant
        if has_interior and basename.startswith("phase1-") and PHASE_1_ADD not in additions:
            additions.append(PHASE_1_ADD)
        if has_interior and basename.startswith("phase3-") and PHASE_3_ADD not in additions:
            additions.append(PHASE_3_ADD)

        return ". ".join([prefix] + additions) + "."

    return STYLE_TAG_RE.sub(repl, prompt)


def export_prompts(output_path: Path) -> None:
    """Write a copy-paste-friendly markdown file of all expanded prompts.

    Output is strictly in plan-numerical order (1 -> 166). Phase headers match
    the plan's own structure (Foundation / Phase 1 / Phase 2 / Phase 3) and
    are inserted at the boundaries.
    """
    all_prompts = sorted(parse_plan(PLAN_PATH), key=lambda p: p.number)

    # Phase boundaries per the plan's own section definitions
    phase_boundaries = [
        (1, 57, "Foundation — Shared Assets"),
        (58, 72, "Phase 1 — The Artisan Forge"),
        (73, 116, "Phase 2 — The Hybrid Assembly Line"),
        (117, 166, "Phase 3 — The Autonomous Factory"),
    ]

    def phase_for(n: int) -> str:
        for lo, hi, name in phase_boundaries:
            if lo <= n <= hi:
                return name
        return ""

    lines: list[str] = [
        "# Expanded Meerklets Image Prompts",
        "",
        "Every `[STYLE PREFIX ...]` token has been fully expanded, so each "
        "prompt block can be copy-pasted directly into ChatGPT (or any image "
        "model) as a self-contained instruction.",
        "",
        f"**Total images:** {len(all_prompts)}. Listed in plan-numerical order.",
        "",
        "The filename under each heading is the exact path to save the output "
        "to (relative to `reference/images/generated/`).",
        "",
        "---",
        "",
    ]

    current_phase = ""
    for p in all_prompts:
        phase = phase_for(p.number)
        if phase != current_phase:
            lines.append(f"## {phase}")
            lines.append("")
            current_phase = phase

        lines.append(f"### {p.number}. `{p.filename}`")
        lines.append("")
        lines.append(f"_{p.description}_")
        lines.append("")
        lines.append("```")
        lines.append(expand_style_prefix(p.prompt, p.filename))
        lines.append("```")
        lines.append("")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text("\n".join(lines))
    print(f"Wrote {len(all_prompts)} prompts to {output_path.relative_to(PROJECT_ROOT)}")


def size_for(filename: str) -> str:
    return SIZE_HINTS.get(filename, "1024x1024")


def generate_image(
    client: OpenAI,
    prompt: ImagePrompt,
    quality: str,
    references: list[Path] | None,
) -> bytes:
    full_prompt = expand_style_prefix(prompt.prompt, prompt.filename)
    size = size_for(prompt.filename)

    if references:
        image_files = [open(p, "rb") for p in references]
        try:
            result = client.images.edit(
                model="gpt-image-1",
                image=image_files,
                prompt=full_prompt,
                n=1,
                size=size,
                quality=quality,
            )
        finally:
            for fh in image_files:
                fh.close()
    else:
        result = client.images.generate(
            model="gpt-image-1",
            prompt=full_prompt,
            n=1,
            size=size,
            quality=quality,
        )

    b64 = result.data[0].b64_json
    if not b64:
        raise RuntimeError("Empty response from OpenAI (no b64_json)")
    return base64.b64decode(b64)


def save_image(png_bytes: bytes, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(png_bytes)


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    p.add_argument("--dry-run", action="store_true", help="Generate the 4 anchor images only.")
    p.add_argument("--only", help="Comma-separated filenames to generate.")
    p.add_argument("--quality", choices=["low", "medium", "high", "auto"], default="high")
    p.add_argument(
        "--references",
        help="Comma-separated reference filenames relative to reference/images/.",
    )
    p.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing files (default: skip anything already on disk).",
    )
    p.add_argument("--list", action="store_true", help="List all prompts and exit.")
    p.add_argument(
        "--export",
        metavar="PATH",
        help="Write all expanded prompts to this markdown file and exit.",
    )
    p.add_argument("--yes", action="store_true", help="Skip confirmation prompt.")
    args = p.parse_args()

    load_dotenv(PROJECT_ROOT / ".env")
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("ERROR: OPENAI_API_KEY not set. Add it to .env.", file=sys.stderr)
        return 1

    all_prompts = parse_plan(PLAN_PATH)
    by_filename = {ip.filename: ip for ip in all_prompts}

    if args.list:
        for ip in all_prompts:
            print(f"{ip.number:>3}  {ip.filename}")
        print(f"\nTotal: {len(all_prompts)}")
        return 0

    if args.export:
        export_prompts(Path(args.export).resolve())
        return 0

    if args.dry_run:
        targets = [by_filename[f] for f in DRY_RUN_FILENAMES if f in by_filename]
        missing = [f for f in DRY_RUN_FILENAMES if f not in by_filename]
        if missing:
            print(f"WARN: dry-run filenames missing from plan: {missing}", file=sys.stderr)
    elif args.only:
        names = [n.strip() for n in args.only.split(",")]
        targets = [by_filename[n] for n in names if n in by_filename]
        missing = [n for n in names if n not in by_filename]
        if missing:
            print(f"WARN: --only filenames not found: {missing}", file=sys.stderr)
    else:
        targets = all_prompts

    explicit_refs: list[Path] | None = None
    if args.references:
        explicit_refs = [
            PROJECT_ROOT / "reference" / "images" / r.strip()
            for r in args.references.split(",")
        ]
        for r in explicit_refs:
            if not r.exists():
                print(f"ERROR: reference image not found: {r}", file=sys.stderr)
                return 1

    if not args.yes:
        print(f"About to generate {len(targets)} image(s) at quality={args.quality}.")
        resp = input("Continue? [y/N] ").strip().lower()
        if resp != "y":
            print("Cancelled.")
            return 0

    client = OpenAI(api_key=api_key)

    fail_count = 0
    for i, ip in enumerate(targets, 1):
        out_path = OUTPUT_DIR / ip.filename
        if out_path.exists() and not args.force:
            print(f"[{i}/{len(targets)}] SKIP (exists)  {ip.filename}")
            continue

        refs = explicit_refs if explicit_refs is not None else get_refs_for(ip.filename)

        ref_tag = f" refs={len(refs)}" if refs else ""
        print(f"[{i}/{len(targets)}] gen {size_for(ip.filename)}{ref_tag}  {ip.filename}")
        start = time.time()
        try:
            png = generate_image(client, ip, quality=args.quality, references=refs)
            save_image(png, out_path)
            rel = out_path.relative_to(PROJECT_ROOT)
            print(f"              done in {time.time() - start:.1f}s  ->  {rel}")
        except Exception as exc:  # keep going on failure
            fail_count += 1
            print(f"              FAILED: {exc}", file=sys.stderr)

    if fail_count:
        print(f"\n{fail_count} failure(s).", file=sys.stderr)
        return 1
    print("\nDone.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
