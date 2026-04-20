import { useEffect, useState } from "react";

interface SceneProgressProps {
  sceneKey: string;
  durationMs: number;
  isPlaying: boolean;
}

/**
 * Thin horizontal bar that fills left-to-right over the scene's duration.
 * Remounts on sceneKey change, giving a clean restart per scene.
 */
export function SceneProgress({
  sceneKey,
  durationMs,
  isPlaying,
}: SceneProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    if (!isPlaying) return;
    const start = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const pct = Math.min((now - start) / durationMs, 1);
      setProgress(pct);
      if (pct < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [sceneKey, durationMs, isPlaying]);

  return (
    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
      <div
        className="h-full bg-white/70"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
