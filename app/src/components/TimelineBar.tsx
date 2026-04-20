interface Act {
  number: number;
  title: string;
  scenes: number;       // count of scenes in this act
  available: boolean;
}

interface TimelineBarProps {
  acts: Act[];
  currentAct: number;   // 1-indexed
  currentSceneInAct: number;  // 0-indexed
  onSelectScene: (globalSceneIndex: number) => void;
}

/**
 * Horizontal timeline bar with act markers. Each act is a segment; scenes
 * are ticks within it. Current scene highlighted, past scenes filled, future
 * scenes empty, unavailable acts faded.
 */
export function TimelineBar({
  acts,
  currentAct,
  currentSceneInAct,
  onSelectScene,
}: TimelineBarProps) {
  // Compute the global scene index for each act's local scene
  const actOffsets: number[] = [];
  let running = 0;
  for (const a of acts) {
    actOffsets.push(running);
    running += a.scenes;
  }

  return (
    <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-8">
      <div className="flex w-full max-w-4xl items-stretch gap-3">
        {acts.map((act, ai) => {
          const isCurrent = act.number === currentAct;
          return (
            <div
              key={act.number}
              className={`flex flex-1 flex-col gap-1.5 ${
                act.available ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
                <span
                  className={
                    isCurrent ? "text-white" : "text-white/40"
                  }
                >
                  Act {act.number}
                </span>
                <span
                  className={
                    isCurrent ? "text-ctm-yellow" : "text-white/30"
                  }
                >
                  {act.title}
                </span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: act.scenes }).map((_, si) => {
                  const state = !act.available
                    ? "locked"
                    : !isCurrent
                      ? act.number < currentAct
                        ? "past"
                        : "future"
                      : si < currentSceneInAct
                        ? "past"
                        : si === currentSceneInAct
                          ? "current"
                          : "future";
                  const className =
                    state === "current"
                      ? "h-1 flex-1 rounded-sm bg-white"
                      : state === "past"
                        ? "h-1 flex-1 rounded-sm bg-white/70"
                        : state === "future"
                          ? "h-1 flex-1 rounded-sm bg-white/15 hover:bg-white/30"
                          : "h-1 flex-1 rounded-sm bg-white/10";
                  return (
                    <button
                      key={si}
                      type="button"
                      disabled={!act.available}
                      onClick={() => onSelectScene(actOffsets[ai] + si)}
                      className={`${className} transition disabled:cursor-not-allowed`}
                      aria-label={`Act ${act.number} scene ${si + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
