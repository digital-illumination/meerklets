interface PhaseBadgeProps {
  phase: number;
  actTitle: string;
  currentScene: number;
  totalScenes: number;
}

export function PhaseBadge({
  phase,
  actTitle,
  currentScene,
  totalScenes,
}: PhaseBadgeProps) {
  // Phase accent colour (matches brand palette)
  const phaseColor =
    phase === 1
      ? "text-ctm-orange"
      : phase === 2
        ? "text-ctm-yellow"
        : "text-ctm-magenta";

  return (
    <div className="absolute right-6 top-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
      <span className={`font-semibold ${phaseColor}`}>Phase {phase}</span>
      <span className="text-white/30">·</span>
      <span>{actTitle}</span>
      <span className="text-white/30">·</span>
      <span className="tabular-nums text-white/50">
        {String(currentScene).padStart(2, "0")} / {String(totalScenes).padStart(2, "0")}
      </span>
    </div>
  );
}
