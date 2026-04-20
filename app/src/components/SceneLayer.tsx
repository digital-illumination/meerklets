import type { KenBurnsDirection } from "../scenes/phase1/openingScenes";

interface SceneLayerProps {
  image: string;
  active: boolean;
  durationMs: number;
  kenBurns?: KenBurnsDirection;
}

export function SceneLayer({
  image,
  active,
  durationMs,
  kenBurns = "in",
}: SceneLayerProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!active}
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
        style={{
          animation: active
            ? `kenburns-${kenBurns} ${durationMs}ms linear forwards`
            : "none",
          willChange: "transform",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
    </div>
  );
}
