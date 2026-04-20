import { useEffect, useState } from "react";
import { SceneLayer } from "./components/SceneLayer";
import { NarrativeCaption } from "./components/NarrativeCaption";
import { SceneProgress } from "./components/SceneProgress";
import { PhaseBadge } from "./components/PhaseBadge";
import { ActOutro } from "./components/ActOutro";
import { ModeSwitcher } from "./components/ModeSwitcher";
import { TimelineBar } from "./components/TimelineBar";
import { LiveMetrics } from "./components/LiveMetrics";
import { SceneOverlay } from "./components/overlays/SceneOverlay";
import {
  openingScenes,
  ACT_TITLE,
  ACT_PHASE,
} from "./scenes/phase1/openingScenes";
import { useFactoryStore } from "./state/factoryStore";

// Acts declared for the timeline. Only Act 1 is currently available.
const ACTS = [
  { number: 1, title: ACT_TITLE, scenes: openingScenes.length, available: true },
  { number: 2, title: "Birth of the Meerklets", scenes: 12, available: false },
  { number: 3, title: "The Autonomous Factory", scenes: 12, available: false },
];

function App() {
  const sceneIndex = useFactoryStore((s) => s.sceneIndex);
  const isPlaying = useFactoryStore((s) => s.isPlaying);
  const mode = useFactoryStore((s) => s.mode);
  const liveProgress = useFactoryStore((s) => s.liveProgress);
  const setSceneIndex = useFactoryStore((s) => s.setSceneIndex);
  const setPlaying = useFactoryStore((s) => s.setPlaying);
  const setMode = useFactoryStore((s) => s.setMode);
  const setLiveProgress = useFactoryStore((s) => s.setLiveProgress);
  const scene = openingScenes[sceneIndex];

  const [showOutro, setShowOutro] = useState(false);

  // STORY mode — auto-advance scenes on a timer
  useEffect(() => {
    if (mode !== "story") return;
    if (!isPlaying) return;
    const isLast = sceneIndex >= openingScenes.length - 1;
    const t = setTimeout(() => {
      if (isLast) setShowOutro(true);
      else setSceneIndex(sceneIndex + 1);
    }, scene.durationMs);
    return () => clearTimeout(t);
  }, [mode, sceneIndex, isPlaying, scene.durationMs, setSceneIndex]);

  // LIVE mode — mock transformation progress ticks up; scene index follows
  useEffect(() => {
    if (mode !== "live") return;
    setShowOutro(false);
    const step = () => {
      const next = liveProgress + 0.003;
      if (next >= 1) {
        setLiveProgress(1);
        setSceneIndex(openingScenes.length - 1);
        return;
      }
      setLiveProgress(next);
      setSceneIndex(
        Math.min(
          Math.floor(next * openingScenes.length),
          openingScenes.length - 1,
        ),
      );
    };
    const id = setInterval(step, 200);
    return () => clearInterval(id);
  }, [mode, liveProgress, setLiveProgress, setSceneIndex]);

  // Reset outro if user scrubs back
  useEffect(() => {
    if (sceneIndex < openingScenes.length - 1) setShowOutro(false);
  }, [sceneIndex]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        setPlaying(!isPlaying);
      } else if (e.key === "ArrowRight") {
        setSceneIndex(Math.min(sceneIndex + 1, openingScenes.length - 1));
      } else if (e.key === "ArrowLeft") {
        setSceneIndex(Math.max(sceneIndex - 1, 0));
      } else if (e.key === "Home") {
        setSceneIndex(0);
        setLiveProgress(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sceneIndex, isPlaying, setSceneIndex, setPlaying, setLiveProgress]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {openingScenes.map((s, i) => (
        <SceneLayer
          key={s.id}
          image={s.image}
          active={i === sceneIndex}
          durationMs={s.durationMs}
          kenBurns={s.kenBurns}
        />
      ))}

      {/* Active-scene overlay (sprites, particles, etc.) */}
      <SceneOverlay id={scene.overlay} />

      {/* Cinematic letterbox */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4vh] bg-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4vh] bg-black/90" />

      <NarrativeCaption
        sceneKey={scene.id}
        caption={scene.caption}
        subCaption={scene.subCaption}
      />

      <TimelineBar
        acts={ACTS}
        currentAct={1}
        currentSceneInAct={sceneIndex}
        onSelectScene={(i) => {
          setSceneIndex(i);
          if (mode === "story") setPlaying(true);
        }}
      />

      <ModeSwitcher
        mode={mode}
        onChange={(m) => {
          setMode(m);
          if (m === "story") setPlaying(true);
          if (m === "live") setLiveProgress((sceneIndex + 1) / openingScenes.length);
        }}
      />

      <SceneProgress
        sceneKey={scene.id}
        durationMs={scene.durationMs}
        isPlaying={isPlaying && mode === "story"}
      />

      <PhaseBadge
        phase={ACT_PHASE}
        actTitle={ACT_TITLE}
        currentScene={sceneIndex + 1}
        totalScenes={openingScenes.length}
      />

      <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.25em] text-white/30">
        Space = play/pause · ← → skip · Home = restart
      </div>

      {mode === "live" && (
        <LiveMetrics
          progress={liveProgress}
          phase={ACT_PHASE + liveProgress * 0.999}
          activeScene={sceneIndex}
          totalScenes={openingScenes.length}
        />
      )}

      {!isPlaying && !showOutro && mode === "story" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-black/60 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/80">
            Paused
          </div>
        </div>
      )}

      <ActOutro
        visible={showOutro}
        actNumber={1}
        actTitle={ACT_TITLE}
        nextActTitle="Birth of the Meerklets"
        onReplay={() => {
          setShowOutro(false);
          setSceneIndex(0);
          setLiveProgress(0);
          setPlaying(true);
        }}
      />
    </div>
  );
}

export default App;
