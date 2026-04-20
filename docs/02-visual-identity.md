# Visual Identity & Aesthetic

## Overall Style

**Bright Cyberpunk** — futuristic but optimistic, not dystopian.

### Key Influences
- **Mirror's Edge** — clean, bright, modern architecture with bold color accents
- **Factorio** — the satisfaction of a well-designed factory with interconnected systems
- **Compare the Market** — warmth, humour, character-driven storytelling
- **Cyberpunk (bright variant)** — neon accents, holographic UI, futuristic tech, but daylight and clean rather than rain-soaked and gritty

### Visual Principles
1. **Bright, not dark** — the cyberpunk elements (neon, holograms, LEDs) glow against clean concrete and white surfaces, not against darkness
2. **Clean, not cluttered** — modern, minimal architecture. Detail comes from activity and animation, not visual noise
3. **Warm technology** — the tech feels helpful, purposeful, and alive — not cold or threatening
4. **Brand-consistent** — CTM's brand colours are the foundation, cyberpunk neon is derived from them
5. **Readable at a glance** — the dollhouse cutaway must communicate clearly even before zooming in

---

## The Factory Building

### Architecture
- **Shape**: Square, modern concrete structure — industrial but sleek
- **Material**: Exposed concrete with clean edges, glass panels, brushed metal accents
- **View**: Side-on **dollhouse cutaway** — one entire wall removed to reveal all floors simultaneously
- **Floors**: Grows from **1 floor to 4 floors** as the narrative progresses
- **Floor numbers**: Large **stencil-style numbers** painted on the exterior side wall (1-4), military/industrial aesthetic
- **Structural elements**: Visible steel I-beams, floor plates, stairwells connecting floors, cable conduits running vertically

---

## The Hologram Chimney ("The Output Stream")

The chimney is the factory's signature visual element — a real-time health indicator, not just decoration.

### Physical Design
- Mounted on the **side** of the building (not the roof)
- Industrial form factor — cylindrical, concrete and steel
- The mouth of the chimney is the emission point for the particle system

### The Stream
A **vertical vortex** of glowing blue/white light rising from the chimney mouth. The vortex intensity, color, and contents reflect the factory's current health and output.

### The "Smoke" — Floating 3D Symbols
Engineering world symbols rendered as glowing 3D objects rising in the vortex:
- `{ }` — Brackets
- `=>` — Arrows
- `++` — Increment
- `!` — Logic
- `< />` — Tags
- `fn` — Functions

### Easter Eggs
Occasionally mixed into the stream:
- Tiny 2D **"Rewards" icons** (CTM brand)
- **Meerkat silhouettes** floating upward
- CTM **mirrored pound sign** logo elements

### Dynamic Health States (Tied to Narrative Phase)

The chimney output directly reflects the factory's evolution and current health:

| Phase | Chimney State | Visual Detail |
|-------|--------------|---------------|
| **Phase 1 — Manual** | Coughing, sputtering | **Black soot particles** and broken "Error" symbols (`!`, `?`, `NULL`) tumble out weakly. The vortex is dim and unstable. Occasional sparks. The chimney struggles |
| **Phase 2 — Hybrid** | Clearing, mixed | Soot clears. A mix of **red "Blocked" icons** and **blue "Code" icons** emit. The stream is stronger but inconsistent — surges and pauses as barriers are hit and resolved |
| **Phase 3 — Agent-First** | Pure beam of light | The chimney becomes a **brilliant, focused beam** shooting out perfect **golden engineering symbols** (`++`, `{ }`, `< />`) at high velocity. Clean, powerful, constant. The vortex is tight and bright |

### Chimney Across the 5 Acts

| Act | State | Detail |
|-----|-------|--------|
| Act 1 | No chimney | Building is just a workshop — no output system |
| Act 2 | Installed, sputtering | First output. Black soot with occasional blue code symbol breaking through |
| Act 3 | Disrupted | Output fluctuates with each barrier — soot returns during problems, clears during resolutions |
| Act 4 | Steady mixed stream | Mostly blue/golden symbols, occasional red. Growing in intensity |
| Act 5 | Pure golden beam | Full power. Constant stream of golden symbols at high velocity. The signature visual of the complete factory |

### Live Dashboard Mode
In Phase 3 deployment, the chimney reflects real data:
- Stream velocity = actual deployment frequency
- Symbol types = types of work being shipped (features, fixes, tests)
- Color mix = health ratio (golden = healthy, red = issues)
- Occasional real feature names or PR counts rendered as floating text

---

## The Business Park Setting

The factory sits in a **bright, optimistic futuristic business park** — the environment reinforces that this is a positive transformation, not a dystopia.

### Background — Vertical Forest Architecture
- Modern **glass office buildings** in the background with **"Vertical Forests"** — trees and plants growing on balconies and terraces at every level
- The buildings are sleek and contemporary but alive with greenery
- Suggests a world where technology and nature coexist harmoniously
- Other smaller factory buildings visible in the distance (Act 5) — the model is spreading

### Ground — Polished & Manicured
- **Polished white stone pathways** leading to and around the factory
- Paths have subtle embedded lighting strips (cobalt blue glow)
- **Perfectly manicured digital grass** — vibrant, clean, almost too perfect (reinforcing the futuristic setting)
- Geometric landscaping — sculpted hedges, circular planters, clean edges
- No litter, no wear — this is an aspirational environment

### Lighting — Golden Hour
- **"Golden Hour" lighting** — everything has a warm, optimistic glow
- Warm sunlight coming from a low angle (late afternoon feel)
- The golden light **reflects off the factory's concrete walls**, giving them warmth
- Lens flare touches on glass surfaces and metallic elements
- Long, soft shadows that add depth without creating darkness
- The warm exterior light contrasts with the cooler neon interior lighting — walking into the factory is like stepping into the future

### Sky
- Warm gradient sky — golden near the horizon, transitioning to soft blue above
- A few wispy clouds catching the golden light
- No rain, no storm — perpetual optimism

### HDRI Environment Map Notes
For the 3D implementation, use or create an HDRI that captures:
- Warm directional sunlight (golden hour angle)
- Soft ambient fill from the sky
- Subtle reflections of greenery and glass buildings on the factory's surfaces
- Clean, bright exposure — no HDR extremes

---

## Brand Color System

### CTM Primary Palette
| Color | Hex | Role in Vis |
|-------|-----|-------------|
| **Cobalt Blue** | `#2843d0` | Core Meerklet chassis color, data streams, primary neon accent |
| **Yellow** | `#e6b30d` | Floor 2 (Production) Meerklet vests — represents "Value" being created |
| **Red** | `#b8123b` | Error states, barriers, alerts |

### Meerklet Color Logic

All Meerklets share a unified visual identity with floor-specific accents:

| Color | Hex | Application | Meaning |
|-------|-----|------------|---------|
| **CTM Blue** | `#2843d0` | **Core chassis** | All Meerklets have this base color — shows they are part of the CTM fleet |
| **CTM Yellow** | `#e6b30d` | **Floor 2 vest** (Production) | Represents the "Value" being created — building, testing, assembling |
| **CTM Magenta** | `#d946a8` | **Floor 3 vest** (Orchestration) | Represents the "Brain" and connectivity — planning, reviewing, coordinating |
| **Bright Orange** | `#e8722a` | **Floor 1 vest** (Infrastructure) | Represents "Power" and stability — deployment, monitoring, infrastructure |

> **Note**: Floor 4 has no Meerklets — only the real meerkat characters (Aleksandr, Sergei, Oleg). The human floor is Meerklet-free by design.

### Full Palette Reference
The complete CTM palette (all 99-to-10 shades for cobalt, red, yellow, green, grey-variant, and grey, plus purple) is documented in:

→ **[reference/brand-colors.md](../reference/brand-colors.md)** — includes every hex code, CSS custom properties ready to copy-paste, and the mapping to factory visual elements.

### Key Shades Used in the Factory
| Color Family | Key Shades | Hex Codes |
|-------------|-----------|-----------|
| **Cobalt** | 30 (primary) / 50 / 60 (neon) | `#2843d0` / `#4e68eb` / `#6f85ef` |
| **Purple** | 90 / 60 | `#6326b3` / `#b984ff` |
| **Green** | 50 (grass) / 60 (neon) | `#2fa384` / `#57b59c` |
| **Red** | 30 (primary) / 60 (neon) | `#b8123b` / `#dc5f7e` |
| **Yellow** | 30 (primary) / 40-50 (neon/chimney) | `#e6b30d` / `#ffc70e` / `#ffd035` |
| **Grey Variant** | 20-40 (structural) / 80 (metal) / 99 (glass) | `#2d3345` / `#434859` / `#b1b5c0` / `#e8ebf3` |

### Neon Accent Colours (Cyberpunk Layer)
Derived from the brand palette, pushed to higher saturation for glow effects:

| Purpose | Base Color | Neon Variant | Usage |
|---------|-----------|-------------|-------|
| Data streams, pipes | Cobalt | `#6f85ef` | Glowing data flowing through the factory |
| Holographic displays | Purple | `#b984ff` | Orchestration overlays, holographic UI |
| Active/warning | Yellow | `#ffc70e` | Status indicators, attention states |
| Health/success | Green | `#57b59c` | Healthy systems, passing tests |
| Error/barrier | Red | `#dc5f7e` | Error states, obstacles, alerts |
| Chimney golden beam | Gold | `#ffd035` (yellow-50) | Healthy output stream at full power |

### Environmental Colors
| Element | Color | Notes |
|---------|-------|-------|
| Concrete walls | `#434859` to `#5a5d6e` | Grey variant range, warmed by golden hour light |
| Floor surfaces | `#2d3345` | Dark grey variant |
| Glass/windows | `#e8ebf3` with transparency | Grey variant 99, catches golden hour reflections |
| Metal accents | `#b1b5c0` | Grey variant 80 |
| Greenery (exterior) | `#08926d` to `#57b59c` | Green range — lush, vibrant |
| Digital grass | `#2fa384` (green-50) | Bright, manicured, slightly surreal |
| Stone paths | `#e8e8e9` (grey-95) | Polished white stone |
| Sky (horizon) | Golden warm | Golden hour gradient |
| Sky (upper) | `#d5dbfa` (cobalt-90) | Soft blue transition |

---

## Lighting

### Exterior — Golden Hour
- **Warm directional sunlight** from a low angle
- Golden tones reflecting off concrete and glass
- Long, soft shadows adding depth
- Lens flare on metallic and glass surfaces
- Perpetual late-afternoon optimism

### Interior — Cool Neon + Warm Ambient
- The interior is cooler than the exterior — stepping inside feels like entering a tech space
- **Warm white ambient** (`#f3f4f4`) as base fill
- **Cobalt blue edge lighting** on floors, stairs, and structural elements
- Status LEDs on machinery in brand colors
- Holographic elements self-illuminate with purple/blue glow
- Data streams glow as they flow through pipes and conveyor systems
- The contrast between warm golden exterior and cool neon interior is deliberate

### Character Lighting
- **Meerklets**: Blue chassis glow, LED stripe on chest, blue lens indicator. Floor-colored vest has subtle luminance
- **Meerkats**: Warm lighting, no self-illumination — they're organic, not tech. Golden hour reflections on fur through Floor 4's panoramic windows
