import type { ViewMode } from "../state/factoryStore";

interface ModeSwitcherProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const MODES: { id: ViewMode; label: string; hint: string }[] = [
  { id: "story", label: "Story", hint: "Auto-paced narrative" },
  { id: "manual", label: "Manual", hint: "Scrub scenes yourself" },
  { id: "live", label: "Live", hint: "Follow real transformation data" },
];

export function ModeSwitcher({ mode, onChange }: ModeSwitcherProps) {
  return (
    <div className="absolute inset-x-0 bottom-16 flex justify-center">
      <div className="flex gap-1 rounded-full bg-black/60 p-1 backdrop-blur-md ring-1 ring-white/10">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            title={m.hint}
            onClick={() => onChange(m.id)}
            className={`rounded-full px-5 py-1.5 text-xs uppercase tracking-[0.25em] transition ${
              mode === m.id
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
