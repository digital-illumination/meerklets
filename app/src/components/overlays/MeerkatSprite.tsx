interface MeerkatSpriteProps {
  carrying?: boolean;
}

/**
 * Tiny stylised meerkat silhouette. ~24x32px viewBox, scales via parent size.
 * When `carrying`, shows a glowing blue code block under its arm.
 */
export function MeerkatSprite({ carrying = false }: MeerkatSpriteProps) {
  return (
    <svg
      viewBox="0 0 24 32"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* tail */}
      <path
        d="M 17 24 Q 22 20 20 14"
        stroke="#92400e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* body */}
      <ellipse cx="12" cy="22" rx="5.5" ry="7" fill="#b45309" />
      {/* head */}
      <ellipse cx="12" cy="10" rx="3.5" ry="4.5" fill="#b45309" />
      {/* ears */}
      <circle cx="9" cy="7" r="1.2" fill="#92400e" />
      <circle cx="15" cy="7" r="1.2" fill="#92400e" />
      {/* eyes */}
      <circle cx="10.5" cy="9.5" r="0.8" fill="white" />
      <circle cx="13.5" cy="9.5" r="0.8" fill="white" />
      <circle cx="10.5" cy="9.7" r="0.35" fill="black" />
      <circle cx="13.5" cy="9.7" r="0.35" fill="black" />
      {/* nose */}
      <ellipse cx="12" cy="12" rx="0.6" ry="0.45" fill="#1f1f1f" />
      {/* code block */}
      {carrying && (
        <rect
          x="15"
          y="17"
          width="5.5"
          height="4"
          rx="0.5"
          fill="#6f85ef"
          opacity="0.95"
          style={{ filter: "drop-shadow(0 0 2px rgba(111,133,239,0.9))" }}
        />
      )}
    </svg>
  );
}
