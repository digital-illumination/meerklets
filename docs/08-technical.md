# Technical Considerations

## Status: Decisions Pending

This document outlines the technical choices to be made once the design is finalised. Each decision includes the options being evaluated, trade-offs, and a preliminary recommendation.

---

## 3D Engine

| Option | Pros | Cons | Notes |
|--------|------|------|-------|
| **Three.js** | Industry standard, massive ecosystem, huge community, excellent docs | Lower-level API, more manual work | Most flexible option |
| **React Three Fiber** | React integration, declarative, component-based, great DX | Adds React dependency, learning curve for non-React devs | Best if we go with React for UI |
| **Babylon.js** | Feature-rich, built-in physics, great inspector/debugger | Heavier bundle, smaller community than Three.js | Good for complex scenes |
| **PlayCanvas** | Web-first game engine, visual editor, excellent performance | Less flexible for custom visualisations, commercial licensing | Better for game-like experiences |

**Preliminary recommendation**: **React Three Fiber** (Three.js + React) — gives us component-based architecture for the factory elements, good ecosystem for UI overlays, and the flexibility of Three.js under the hood.

---

## Rendering Style

| Option | Visual Quality | Performance | Build Effort | Notes |
|--------|---------------|-------------|-------------|-------|
| **Low-poly stylised** | Charming, distinctive | Excellent | Medium | Think Monument Valley / Crossy Road aesthetic |
| **Toon/cel-shaded** | Bold, readable | Good | Medium | Strong outlines, flat colours, good for the cutaway |
| **PBR realistic** | Impressive, polished | Heavy | High | Closer to the CGI meerkat look, but harder to achieve well |
| **Voxel art** | Retro, Thronglets-adjacent | Excellent | Low-Medium | Nods to the pixel-art Thronglets aesthetic |
| **2.5D (3D scene, 2D sprites)** | Unique, illustrative | Excellent | Medium | Characters as animated 2D sprites in a 3D environment |

**Preliminary recommendation**: **Low-poly stylised** with **toon shading** accents — keeps the bright cyberpunk feel, runs well on all hardware, and is feasible to model. The Thronglets were pixel-art; our Meerklets could be low-poly — a natural visual evolution.

---

## Character Model Approach

| Approach | Quality | Effort | Flexibility |
|----------|---------|--------|-------------|
| **Custom 3D models** (Blender) | Highest | Highest | Full control |
| **Low-poly custom** | Good, stylised | Medium | Good |
| **AI-generated 3D** (Meshy, Tripo, Rodin) | Variable | Low | Limited control |
| **2D animated sprites** | Different aesthetic | Low-Medium | Easy to update |
| **Voxel characters** (MagicaVoxel) | Charming, retro | Low | Easy to create variants |

**Preliminary recommendation**: **Low-poly custom models** in Blender for the main characters (Aleksandr, Sergei, Oleg, base Meerklet), then instance the Meerklet model with different vest colours for the agents. This balances quality with feasibility.

---

## Animation System

| Component | Approach | Tool |
|-----------|----------|------|
| **Character animation** | Skeletal animation baked in the model | Blender → glTF export |
| **Factory machinery** | Procedural animation (rotation, translation) | Three.js / R3F |
| **Data flow / particles** | GPU particle systems | Three.js Points / instanced meshes |
| **Camera choreography** | Keyframed camera paths | GSAP or Theatre.js |
| **UI transitions** | CSS/JS animation | Framer Motion or GSAP |
| **Building growth** | Morph targets or show/hide with transitions | Three.js |
| **Holographic chimney output** | Particle system + instanced shapes | Custom shader + Three.js |

---

## UI Framework

| Option | Pros | Cons |
|--------|------|------|
| **React** | Component-based, excellent for UI overlays, integrates with R3F | Bundle size, complexity |
| **Vue** | Lighter, good DX, TresJS for 3D | Smaller 3D ecosystem |
| **Vanilla JS + Web Components** | No framework overhead, maximum control | More boilerplate, harder to maintain |
| **Svelte** | Minimal bundle, great performance | Threlte for 3D is less mature |

**Preliminary recommendation**: **React** — primarily because React Three Fiber is the most mature bridge between React and Three.js, and the UI overlay requirements (metrics panel, timeline slider, mode switcher) suit a component framework.

---

## Data Integration (Phase 3)

| Method | Use Case | Notes |
|--------|----------|-------|
| **Static JSON** | Story mode, demo/presentation | Bundled with the app, no backend needed |
| **REST API** | Dashboard mode, periodic refresh | Poll every N seconds for updated metrics |
| **WebSocket** | Real-time dashboard | Live updates, push-based |
| **Server-Sent Events** | One-way real-time | Simpler than WebSocket for read-only data |

**Phase 1**: Static JSON (story mode is pre-scripted)
**Phase 3**: REST API with polling, potentially upgrading to WebSocket

---

## Deployment

| Option | Pros | Cons | Notes |
|--------|------|------|-------|
| **Static HTML (S3/CloudFront)** | Simple, fast, scalable | No backend for Phase 3 | Perfect for Phase 1 |
| **GitHub Pages** | Free, CI/CD built in | Public by default | Good for development |
| **Netlify/Vercel** | Easy deploys, preview URLs, edge functions | External service | Good for iteration |
| **Internal hosting** | Behind company auth, data security | More setup | Required for Phase 3 with real data |

**Phase 1**: Static hosting (Netlify or S3) for the narrative experience
**Phase 3**: Internal hosting behind auth for the live dashboard

---

## Performance Considerations

| Technique | Purpose |
|-----------|---------|
| **Instanced meshes** | Render dozens of Meerklets efficiently (same geometry, different materials) |
| **Level of Detail (LOD)** | Reduce polygon count for distant objects |
| **Frustum culling** | Don't render off-screen objects |
| **Texture atlasing** | Combine textures to reduce draw calls |
| **Progressive loading** | Load Floor 1 first, then add floors as needed |
| **Compressed glTF (Draco/Meshopt)** | Reduce model file sizes |
| **Baked lighting** | Pre-compute lighting for static elements |
| **Mobile fallback** | Reduced particle count, simpler shaders, or 2D mode |

---

## Accessibility

| Feature | Implementation |
|---------|---------------|
| **Screen reader** | Narration text available as aria-live regions |
| **Reduced motion** | Respect `prefers-reduced-motion`, offer static view |
| **Keyboard navigation** | Tab through acts, arrow keys for timeline slider |
| **High contrast** | Optional mode with stronger color differentiation |
| **Text alternatives** | Each act's narrative text available as a transcript |
| **Colour-blind friendly** | Vest colours supplemented with badges/shapes for role ID |

---

## Recommended Tech Stack (Phase 1)

```
Frontend:       React + TypeScript
3D Engine:      React Three Fiber (Three.js)
Animation:      GSAP (camera) + R3F animations (scene)
UI Components:  Tailwind CSS + Radix UI
State:          Zustand (lightweight, perfect for 3D state)
Build:          Vite
Deployment:     Static (Netlify or S3)
Models:         Blender → glTF/GLB
Textures:       Hand-painted or procedural
```
