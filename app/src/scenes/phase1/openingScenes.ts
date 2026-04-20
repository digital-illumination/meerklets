export type KenBurnsDirection = "in" | "out" | "left" | "right";
export type SceneOverlayId = "silo-trek" | "anvil-dust";

export interface Scene {
  id: string;
  image: string;
  caption: string;
  subCaption?: string;
  durationMs: number;
  kenBurns?: KenBurnsDirection;
  overlay?: SceneOverlayId;
}

export const ACT_TITLE = "The Artisan Forge";
export const ACT_PHASE = 1;

const IMG = "/images/generated";

export const openingScenes: Scene[] = [
  {
    id: "approach",
    image: `${IMG}/environment/panorama-approaching.png`,
    caption: "Compare the Market Engineering",
    subCaption: "— The Artisan Era —",
    durationMs: 6500,
    kenBurns: "in",
  },
  {
    id: "modest-exterior",
    image: `${IMG}/factory-exterior/phase1-exterior-modest.png`,
    caption: "It started with a single workshop.",
    durationMs: 6000,
    kenBurns: "right",
  },
  {
    id: "cutaway",
    image: `${IMG}/factory-exterior/phase1-cutaway-1floor.png`,
    caption: "Inside, meerkats forged code by hand.",
    durationMs: 7000,
    kenBurns: "in",
  },
  {
    id: "workshop-wide",
    image: `${IMG}/narrative-moments/phase1-workshop-full-scene.png`,
    caption: "Every line, every fix — hammered out one keystroke at a time.",
    durationMs: 7500,
    kenBurns: "left",
  },
  {
    id: "code-anvil",
    image: `${IMG}/floor-2-production/phase1-code-anvil.png`,
    caption: "The Code Anvils.",
    subCaption: "— desk-forges where features took shape —",
    durationMs: 6500,
    kenBurns: "in",
    overlay: "anvil-dust",
  },
  {
    id: "irregular-blocks",
    image: `${IMG}/floor-2-production/phase1-irregular-code-blocks.png`,
    caption: "No two were quite the same.",
    durationMs: 5500,
    kenBurns: "right",
  },
  {
    id: "cluttered-desk",
    image: `${IMG}/floor-2-production/phase1-cluttered-desk.png`,
    caption: "The work piled up.",
    subCaption: "— the days grew longer —",
    durationMs: 6500,
    kenBurns: "out",
  },
  {
    id: "sergei-paperwork",
    image: `${IMG}/characters/phase1-sergei-paperwork.png`,
    caption: "Sergei drowned in process.",
    durationMs: 6500,
    kenBurns: "in",
  },
  {
    id: "silo-wall",
    image: `${IMG}/barriers/phase1-silo-wall.png`,
    caption: "Invisible walls grew between teams.",
    durationMs: 10500,
    kenBurns: "left",
    overlay: "silo-trek",
  },
  {
    id: "manual-handoff",
    image: `${IMG}/floor-2-production/phase1-manual-handoff.png`,
    caption: "Even passing a feature across the room became a trek.",
    durationMs: 7000,
    kenBurns: "right",
  },
  {
    id: "aleksandr-frustrated",
    image: `${IMG}/characters/phase1-aleksandr-frustrated.png`,
    caption: "Progress was slow.",
    subCaption: "— painfully slow —",
    durationMs: 6500,
    kenBurns: "in",
  },
  {
    id: "the-idea",
    image: `${IMG}/narrative-moments/phase1-the-idea.png`,
    caption: "Until one evening, an idea.",
    subCaption: "— what if the meerkats had help? —",
    durationMs: 8500,
    kenBurns: "out",
  },
];
