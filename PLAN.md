# Meerklets: The AI Factory

> *"We are no longer engineers who write code. We are engineers who build and maintain the factory. The factory writes the code."*

## What Is This?

A 3D interactive visualisation showing how Product Engineering at Compare the Market evolves from writing 100% code manually to an **agent-first factory model** — where engineers build and orchestrate AI agents ("Meerklets") that deliver 100% of the code.

**Name origin**: Meerkats + Thronglets (Black Mirror S7 "Plaything") — small digital creatures that evolve into a powerful collective.

---

## Project Structure

```
Meerklets/
├── PLAN.md                      ← You are here (overview & decisions)
├── docs/
│   ├── 01-concept.md            — Vision, name origin, Thronglets reference, audiences
│   ├── 02-visual-identity.md    — Aesthetic, colors, lighting, environment design
│   ├── 03-characters.md         — Meerklets (agents) & Meerkats (humans) full specs
│   ├── 04-factory-architecture.md — Floor-by-floor breakdown with all visual elements
│   ├── 05-narrative-arc.md      — 5-act story with scene descriptions & camera notes
│   ├── 06-barriers.md           — 10 barriers to execution with visual metaphors
│   ├── 07-interactivity.md      — Story Mode, Evolution Mode, Dashboard Mode specs
│   ├── 08-technical.md          — Tech stack options, recommendations, performance
│   └── 09-deployment-phases.md  — Phase 1/2/3 scope, milestones, implementation sequence
├── reference/
│   ├── brand-colors.md          — Complete CTM color palette (all hex codes + CSS vars)
│   ├── image-generation-plan.md — 166 image asset catalogue with filenames & prompts
│   ├── image-gen-system-prompt.md — Gem/Project setup for consistent image generation
│   └── images/
│       ├── characters/          — Character reference images (see README for naming)
│       ├── brand/               — Brand assets and color palette
│       ├── inspiration/         — Mood board and style references
│       └── generated/           — AI-generated design visualisations (14 subdirectories)
```

---

## Key Design Decisions (Confirmed)

| Decision | Status |
|----------|--------|
| Aesthetic | **Bright cyberpunk** — futuristic, optimistic, neon accents on clean concrete |
| View | **Side-on dollhouse cutaway** — full cross-section visible |
| Building | **Square, modern concrete** — grows from 1 to 4 floors |
| Floor numbers | **Stencil-style** on exterior wall |
| Chimney | Pumps **holographic projections** (not smoke) — code symbols, shapes, brand elements |
| Exterior | **Futuristic business park** with greenery |
| Agent design | Based on **AutoSergei** — white robotic suit, LED stripe, blue lens, coloured high-vis vest per role |
| Human characters | **Aleksandr** (CTO), **Sergei** (Engineering Lead), **Oleg** (Next Gen) on Floor 4 |
| Brand colors | Full CTM palette received — cobalt `#2843d0`, yellow `#e6b30d`, red `#b8123b`, purple `#6326b3`, green `#08926d` |
| Interaction | Combination: **Story Mode** (guided tour) + **Evolution Mode** (time slider) + **Dashboard Mode** (live data) |
| Narrative | **5 acts** — Workshop → First Agents → Growing Pains → The Factory → The AI Factory |

---

## Meerklet Color Logic

All Meerklets have a **CTM Blue** (`#2843d0`) **core chassis** — marking them as part of the CTM fleet. Vest color indicates their floor:

| Floor | Vest Colour | Meaning | Roles |
|-------|------------|---------|-------|
| Floor 1 (Infrastructure) | **Bright Orange** | "Power" and stability | Deployers, Monitors |
| Floor 2 (Production) | **CTM Yellow** `#e6b30d` | "Value" being created | Builders, Testers |
| Floor 3 (Orchestration) | **CTM Magenta** | "Brain" and connectivity | Architects, Reviewers |
| Floor 4 (Command) | — | No Meerklets — humans only | Aleksandr, Sergei, Oleg |

---

## Factory Floors

| Floor | Name | Theme | Appears |
|-------|------|-------|---------|
| 1 | Infrastructure | Engine room — servers, pipelines, deployment | Act 2 |
| 2 | Agent Factory | Production line — assembly, training, quality gates | Act 1 (original room) |
| 3 | Orchestration | Control room — workflows, dashboards, coordination | Act 4 |
| 4 | Command Centre | Human leadership — strategy, oversight, direction | Act 5 |

→ Full details: [docs/04-factory-architecture.md](docs/04-factory-architecture.md)

---

## Narrative Arc

| Act | Name | Floors | Human:Agent | Emotion |
|-----|------|--------|-------------|---------|
| 1 | The Workshop | 1 | 100:0 | Constraint |
| 2 | The First Agents | 2 | 80:20 | Hope |
| 3 | Growing Pains | 2 | 60:40 | Tension → Triumph |
| 4 | The Factory | 3 | 20:80 | Satisfaction |
| 5 | The AI Factory | 4 | 0:100 | Aspiration |

→ Full details: [docs/05-narrative-arc.md](docs/05-narrative-arc.md)

---

## Open Decisions

| # | Decision | Options | Notes |
|---|----------|---------|-------|
| 1 | **Characters** | Aleksandr, Sergei, Oleg confirmed? Carl the wombat as supporting? | See [docs/03-characters.md](docs/03-characters.md) |
| 2 | **Barrier priority** | Which of the 10 barriers resonate most with current CTM challenges? | See [docs/06-barriers.md](docs/06-barriers.md) |
| 3 | **Tech stack** | React Three Fiber recommended — confirm? | See [docs/08-technical.md](docs/08-technical.md) |
| 4 | **Rendering style** | Low-poly stylised recommended — or toon-shaded, voxel, realistic? | See [docs/08-technical.md](docs/08-technical.md) |
| 5 | **Character models** | Custom Blender, AI-generated, voxel, 2D sprites? | See [docs/08-technical.md](docs/08-technical.md) |
| 6 | **Data schema** | What real metrics feed the live dashboard in Phase 3? | See [docs/09-deployment-phases.md](docs/09-deployment-phases.md) |

---

## Milestones

1. Static prototype (single floor, basic geometry)
2. Full factory shell (4 floors, chimney, exterior)
3. Character models (Meerklet + 3 meerkats)
4. Story mode (camera choreography, narration, Acts 1-5)
5. Factory activity (animations, data flow, conveyor belts)
6. Barrier sequences (3 barrier animations)
7. Evolution mode (time slider)
8. Polish (sound, loading, responsive, accessibility)
9. Live dashboard (data integration — Phase 3)

→ Full details: [docs/09-deployment-phases.md](docs/09-deployment-phases.md)
