# Meerklets — The AI Factory

Interactive 3D-feel visualisation depicting Compare the Market Product Engineering's transformation from 100% human-written code to an agent-first delivery model.

Built as a **2.5D layered narrative** using pre-rendered architectural images, camera-style animations, sprite overlays, and a mode switcher for story / manual / live-data playback.

## Repo layout

```
meerklets/
├── app/                # React + Vite + TS narrative player (Phase 1 live)
├── scripts/            # Python image-generation tooling (OpenAI gpt-image-1)
├── docs/               # Design/narrative documentation
├── reference/
│   ├── image-generation-plan.md   # Canonical catalogue of all 166 images
│   ├── expanded-prompts.md        # Generated: fully-expanded prompts for manual use
│   ├── brand-colors.md
│   ├── image-gen-system-prompt.md
│   └── images/         # (gitignored — regenerate or sync)
│       ├── characters/ # Original reference images (kept in repo)
│       ├── anchors/    # Master style-anchor renders
│       └── generated/  # Script output per plan
└── PLAN.md             # Overall project plan
```

## Setup

Requires Node 20+ and Python 3.9+.

```bash
# 1. Narrative app
cd app
npm install
npm run dev                        # → http://localhost:5173

# 2. Image-generation script (optional)
cd ..
python3 -m venv .venv && source .venv/bin/activate
pip install -r scripts/requirements.txt
cp .env.example .env               # add OPENAI_API_KEY=...
python scripts/generate_images.py --list
python scripts/generate_images.py --dry-run
```

## Image pipeline

Images live in `reference/images/` (gitignored). The 97 generated so far are in Google Drive under the same path; on a fresh clone they need to be resynced or regenerated.

Quick regeneration of the full set:

```bash
python scripts/generate_images.py --quality medium --yes
```

The script skips files already on disk unless `--force` is passed. Category-appropriate reference anchors are attached automatically.

For a manual workflow (copy-paste prompts into ChatGPT/Gemini), expand the plan:

```bash
python scripts/generate_images.py --export reference/expanded-prompts.md
```

## Narrative architecture

`FactoryState` (`app/src/state/factoryStore.ts`) is the single source of truth for what the screen shows. It is driven by one of three interchangeable sources:

1. **Story mode** — scripted keyframes advance `sceneIndex` on a timer
2. **Manual mode** — user controls (scrubber, keys) mutate state
3. **Live mode** — a data source writes to state (currently mock CTM metrics; later the real API)

The same rendering code serves all three.
