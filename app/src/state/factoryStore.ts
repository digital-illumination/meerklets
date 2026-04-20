import { create } from "zustand";

export type ViewMode = "story" | "manual" | "live";

/**
 * FactoryState — the single source of truth for what the scene shows.
 *
 * Rendering is a pure function of this state, so the state can be driven by
 * three interchangeable sources:
 *   1. Story mode    — a scripted timeline advances it
 *   2. Manual mode   — user controls mutate it (scrubber clicks, keys)
 *   3. Live mode     — a data source advances it (mocked for now; CTM API later)
 */
export interface FactoryState {
  phase: number;                        // continuous 1.0–3.0
  activeFloors: 1 | 2 | 3 | 4;
  sceneIndex: number;
  isPlaying: boolean;
  mode: ViewMode;
  liveProgress: number;                 // 0.0–1.0 — mock transformation completeness

  setSceneIndex: (i: number) => void;
  setPlaying: (playing: boolean) => void;
  setPhase: (phase: number) => void;
  setMode: (mode: ViewMode) => void;
  setLiveProgress: (p: number) => void;
}

export const useFactoryStore = create<FactoryState>((set) => ({
  phase: 1,
  activeFloors: 1,
  sceneIndex: 0,
  isPlaying: true,
  mode: "story",
  liveProgress: 0,
  setSceneIndex: (i) => set({ sceneIndex: i }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setPhase: (phase) => set({ phase }),
  setMode: (mode) => set({ mode }),
  setLiveProgress: (liveProgress) => set({ liveProgress }),
}));
