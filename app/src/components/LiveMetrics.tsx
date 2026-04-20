interface LiveMetricsProps {
  progress: number;          // 0.0–1.0
  phase: number;             // 1 | 2 | 3 (derived)
  activeScene: number;
  totalScenes: number;
}

/**
 * A mock "live data" card shown only in Live mode.
 * Demonstrates the data→state→scene pipeline that will later be wired to
 * real CTM engineering metrics (agent adoption %, throughput, etc.).
 */
export function LiveMetrics({
  progress,
  phase,
  activeScene,
  totalScenes,
}: LiveMetricsProps) {
  const pct = Math.round(progress * 100);
  const activeMeerklets = Math.round(progress * 120);  // mock agent count
  const throughputX = (1 + progress * 2.8).toFixed(1);  // mock throughput multiplier

  return (
    <div className="absolute right-6 top-20 w-72 rounded-lg bg-black/60 p-4 text-xs backdrop-blur-md ring-1 ring-white/10">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ctm-yellow">
          Live · Mock data
        </span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-ctm-green" />
      </div>

      <dl className="space-y-2 text-white/90">
        <Row label="Transformation" value={`${pct}%`} />
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-ctm-orange via-ctm-yellow to-ctm-magenta transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <Row label="Current phase" value={phase.toFixed(1)} />
        <Row label="Active Meerklets" value={String(activeMeerklets)} />
        <Row label="Throughput" value={`${throughputX}×`} />
        <Row label="Scene" value={`${activeScene + 1} / ${totalScenes}`} />
      </dl>

      <div className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/30">
        Data → scene · awaiting CTM connector
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-white/50">{label}</dt>
      <dd className="font-mono tabular-nums">{value}</dd>
    </div>
  );
}
