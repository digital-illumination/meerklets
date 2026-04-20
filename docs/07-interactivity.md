# Interactivity & User Experience

## Three Interaction Modes

The visualisation supports three complementary modes. Phase 1 focuses on Story Mode and Evolution Mode. Phase 3 adds Dashboard Mode.

---

## Mode 1: Story Mode (Guided Tour)

### Purpose
Default experience for first-time viewers, particularly leadership and exec audiences. A narrated, choreographed progression through Acts 1-5.

### How It Works
- User lands on the page and sees a "Begin" button over the empty business park
- Clicking "Begin" starts the guided tour
- The camera is choreographed — pans, zooms, and transitions are pre-scripted
- Narrative text appears as overlays at key moments
- The user can click "Next" to advance through sections, or enable auto-play
- Metric overlay (`Human Code: X% | Agent Code: Y%`) updates at each act transition
- Estimated total duration: **3-5 minutes**

### Camera Choreography

| Act | Camera Behaviour |
|-----|-----------------|
| Act 1 | Close-up on the workshop floor. Slowly pans across desks. Zooms in on Sergei's paperwork pile. Pulls back to show the cramped single room |
| Act 2 | Camera pulls back as the building grows. Tracks the first Meerklet rolling off the line. Follows it to its workstation. Drops down to show Floor 1 being built below |
| Act 3 | Quick cuts between barrier moments. Zoom into the garbled manuals. Wide shot of the approval queue. Dramatic zoom on red tape wrapping machinery. Satisfying wide shot as each barrier resolves |
| Act 4 | Rising camera as Floor 3 is added. Sweeping pan across the orchestration layer. Traces a complete workflow from top to bottom. Pulls back to show all three floors humming |
| Act 5 | Final rise as Floor 4 crowns the building. Camera enters Floor 4, moves between characters. Final pull-back to reveal the full factory in the business park. Lingering wide shot |

### UI Elements
- **Progress bar** at the bottom showing position in the story
- **Act title** appearing briefly at each transition
- **Metric overlay** in the corner (human/agent ratio)
- **"Skip to end"** option for repeat viewers
- **Mute/unmute** for any sound design
- **Pause/play** controls

---

## Mode 2: Evolution Mode (Time Slider)

### Purpose
Allows users to scrub freely through the factory's evolution. Good for repeat viewers, presentations where you want to jump to a specific stage, or executives who want to quickly see the before/after.

### How It Works
- A **timeline slider** at the bottom of the screen
- Dragging it **morphs** the factory continuously between stages
- The building grows/shrinks, Meerklets appear/disappear, metrics change
- **Labels on the slider** mark each Act (Act 1: Workshop, Act 2: First Agents, etc.)
- Camera is free — user can orbit, zoom, pan while the timeline progresses
- No narration — the visual transformation tells the story

### Slider Behaviour
- **Smooth interpolation**: The factory doesn't "jump" between states — it morphs. Floors grow upward continuously. Meerklets fade in/out. Equipment appears/disappears
- **Snap points**: Small detents at each Act boundary for easy positioning
- **Metric counter**: The human/agent ratio slides smoothly (100/0 → 80/20 → 60/40 → 20/80 → 0/100)
- **Barrier markers**: Small warning icons on the slider at Act 3's barrier points

---

## Mode 3: Dashboard Mode (Live Data)

### Purpose
Phase 3 feature. Transforms the visualisation from a narrative tool into a **living dashboard** connected to real adoption data.

### How It Works
- The factory's state reflects **actual agent-first adoption metrics** from Product Engineering
- No narrative — the factory shows the current state in real-time
- Auto-updates on a polling interval or via WebSocket

### Data Mapping

| Real-World Metric | Factory Visual |
|------------------|---------------|
| Number of deployed agents | Number of Meerklets visible on the floor |
| Agent code output (% of total) | Human/Agent ratio overlay + chimney output volume |
| Agent types in use | Vest colour distribution |
| Pipeline throughput | Speed of conveyor belts, data flow rate |
| Error rate | Frequency of red LED flashes on Meerklets |
| Active barriers/challenges | Barrier visuals present on the factory floor |
| Resolved barriers | Resolution fixtures visible and operational |
| Team adoption level | Which floors are "lit up" and active vs dim/under construction |

### Dashboard UI Additions
- **Real-time metric panel** (collapsible) showing actual numbers
- **Date selector** for historical playback — "show me the factory 3 months ago"
- **Team filter** — view a specific team's contribution to the factory
- **Alerts** — visual notifications when key thresholds are crossed

---

## Camera Controls (All Modes)

### Default View
Side-on dollhouse cutaway. Camera positioned at ~45 degrees, showing the full building cross-section.

### User Controls
| Control | Action |
|---------|--------|
| Click + drag | Orbit around the building |
| Scroll wheel | Zoom in/out |
| Double-click floor | Zoom to that floor's detail view |
| Double-click character | Zoom to character close-up with info tooltip |
| Right-click + drag | Pan the view |
| Escape / "Reset" button | Return to default view |

### Zoom Levels
| Level | What's Visible |
|-------|---------------|
| **Far** | Full factory in business park, exterior details, chimney output, other buildings |
| **Medium** | All floors visible with clear activity, Meerklets as recognisable figures |
| **Close** | Single floor detail — individual workstations, screen contents, Meerklet animations |
| **Detail** | Individual character/Meerklet — facial expression, badge text, vest detail |

---

## Responsive Considerations

| Screen | Adaptation |
|--------|-----------|
| **Desktop (primary)** | Full 3D experience, all controls |
| **Tablet** | Touch controls, simplified camera, story mode prioritised |
| **Mobile** | 2D fallback or simplified view, story mode only |
| **Presentation (TV/projector)** | Auto-play story mode, larger text, no user controls needed |
| **Wall display** | Dashboard mode, always-on, auto-cycling between views |
