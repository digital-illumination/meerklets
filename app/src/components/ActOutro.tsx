interface ActOutroProps {
  visible: boolean;
  actNumber: number;
  actTitle: string;
  nextActTitle?: string;
  onReplay: () => void;
}

export function ActOutro({
  visible,
  actNumber,
  actTitle,
  nextActTitle,
  onReplay,
}: ActOutroProps) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-[fadein_1200ms_ease-out]">
      <div className="flex flex-col items-center gap-8 text-center px-8">
        <div className="text-xs uppercase tracking-[0.5em] text-ctm-yellow">
          End of Act {actNumber}
        </div>

        <h1 className="text-5xl font-light tracking-wide md:text-6xl">
          {actTitle}
        </h1>

        <div className="h-px w-24 bg-white/30" />

        {nextActTitle && (
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Act {actNumber + 1} — {nextActTitle} — coming soon
          </p>
        )}

        <button
          type="button"
          onClick={onReplay}
          className="mt-4 rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:border-white/70 hover:bg-white/5 hover:text-white"
        >
          ↻ Replay Act {actNumber}
        </button>
      </div>
    </div>
  );
}
