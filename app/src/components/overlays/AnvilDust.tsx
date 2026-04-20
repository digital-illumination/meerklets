/**
 * Floating dust-mote particles for the Code Anvil scene.
 * Pre-computed random positions + staggered rise animations keep it lightweight.
 */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: 15 + Math.random() * 70,       // 15%–85%
  startTop: 60 + Math.random() * 35,   // start lower
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 1 + Math.random() * 2,
  color: Math.random() > 0.6 ? "#6f85ef" : "#e6b30d",
  opacity: 0.35 + Math.random() * 0.4,
}));

export function AnvilDust() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.startTop}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.opacity,
            filter: `blur(0.3px) drop-shadow(0 0 3px ${p.color})`,
            animation: `dust-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
