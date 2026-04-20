interface ScrubberProps {
  current: number;
  total: number;
  onSelect: (index: number) => void;
}

export function Scrubber({ current, total, onSelect }: ScrubberProps) {
  return (
    <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to scene ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === current
              ? "w-10 bg-white"
              : i < current
                ? "w-6 bg-white/50"
                : "w-6 bg-white/20 hover:bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}
