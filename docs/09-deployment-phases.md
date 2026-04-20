# Deployment Phases

## Phase 1: Leadership & Exec — "The Story"

### Goal
Communicate the agent-first transformation vision to leadership and executive teams through a compelling visual narrative.

### Scope
- Story Mode (guided tour through Acts 1-5)
- Evolution Mode (time slider)
- Self-contained, deployable as a single URL
- No backend or data integration required

### Deliverables
- Interactive 3D visualisation with full 5-act narrative
- Narration text overlays
- Camera choreography
- All four floors with full detail
- All three meerkat characters + Meerklet population
- At least 3 barrier sequences (documentation, hierarchy, governance)
- Chimney with holographic output
- Exterior business park environment

### Audience Experience
- Open a URL → click "Begin" → watch the 5-minute story
- Or: use the time slider to scrub through the evolution
- Or: freely explore the factory in orbit mode
- Works on desktop, reasonable tablet experience
- Can be presented live by Adam or self-served as a link

### Success Criteria
- Leadership understands the transformation journey
- The factory metaphor resonates and becomes shared language
- "Show me the factory" becomes a reference point in conversations

---

## Phase 2: Engineering Teams — "The Detail"

### Goal
Extend the visualisation to be a motivational and informational tool for engineering teams.

### Additional Scope (on top of Phase 1)
- Deeper zoom levels showing technical detail
- Extended barrier catalogue (beyond the initial 3)
- Team-specific views — "this is your section of the factory"
- More Meerklet role types as agent capabilities expand
- Possibly: clickable elements with tooltips explaining concepts

### Audience Experience
- Engineers explore the factory and see how their work maps to it
- Teams can identify which floor/role their agents occupy
- The barriers become discussion tools — "are we hitting this one?"

---

## Phase 3: Live Dashboard — "The Pulse"

### Goal
Connect the factory to real agent-first adoption data, making it a living representation of Product Engineering's transformation progress.

### Additional Scope (on top of Phase 2)
- Data integration layer (API → factory state mapping)
- Real-time Meerklet counts based on actual deployed agents
- Real-time human/agent code ratio
- Barrier states reflecting actual organisational challenges
- Historical playback — "show me the factory 3 months ago"
- Team filtering — view a specific team's contribution
- Always-on wall display mode
- Alerting — visual notifications for key thresholds

### Data Requirements
To be defined, but likely includes:
- Number and type of AI agents deployed
- Code output metrics (lines, PRs, features) split by human/agent
- Pipeline throughput and success rates
- Active organisational challenges/barriers
- Team-level adoption metrics
- Agent error/success rates

### Audience Experience
- Walk past a wall display and see the factory humming with today's real activity
- Check the dashboard before a leadership meeting to get the latest state
- Use historical playback to show progress over quarters

---

## Implementation Sequence

### Milestone 1: Static Prototype
- Single floor, basic geometry, no characters
- Prove the dollhouse cutaway view works
- Test the rendering style and performance
- Validate the bright cyberpunk aesthetic

### Milestone 2: Full Factory Shell
- All 4 floors with basic geometry and equipment
- Stencil floor numbers on exterior
- Chimney with placeholder particles
- Business park exterior

### Milestone 3: Characters
- Base Meerklet model with vest colour variants
- Three meerkat character models (Aleksandr, Sergei, Oleg)
- Basic idle animations

### Milestone 4: Story Mode
- Camera choreography for Acts 1-5
- Building growth animation
- Narration text overlays
- Metric counter

### Milestone 5: Factory Activity
- Meerklet work animations per role
- Conveyor belt motion
- Data flow particles
- Screen content
- Holographic chimney output

### Milestone 6: Barriers
- Three barrier sequences with full animation
- Problem → disruption → diagnosis → resolution → improvement

### Milestone 7: Evolution Mode
- Time slider implementation
- Smooth interpolation between acts
- Free camera controls

### Milestone 8: Polish
- Sound design
- Loading experience
- Responsive adaptations
- Performance optimisation
- Accessibility features

### Milestone 9: Live Dashboard (Phase 3)
- Data schema definition
- API integration
- Real-time state mapping
- Historical playback
- Wall display mode
