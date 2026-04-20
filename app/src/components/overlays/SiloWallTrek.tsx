import { MeerkatSprite } from "./MeerkatSprite";

/**
 * Overlay for the silo-wall scene. A meerkat sprite walks the absurd
 * around-the-wall path, demonstrating the inefficiency narrated in the scene.
 */
export function SiloWallTrek() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Path hint — faint dotted line showing the route */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 22 55 V 82 H 76 V 55"
          fill="none"
          stroke="#e6b30d"
          strokeWidth="0.4"
          strokeDasharray="1 1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Walking meerkat — positioned via keyframe animation */}
      <div
        className="absolute h-10 w-7"
        style={{
          animation: "silo-trek 10s ease-in-out infinite",
          willChange: "top, left",
        }}
      >
        <div className="h-full w-full" style={{ animation: "walk-bob 0.45s ease-in-out infinite" }}>
          <MeerkatSprite carrying />
        </div>
      </div>
    </div>
  );
}
