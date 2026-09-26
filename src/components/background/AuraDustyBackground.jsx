export default function AuraDustyBackground({ children }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Layer 1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(145deg, #ffe4e6 0%, #fda4af 38%, #fb7185 68%, #e11d48 100%)",
          mixBlendMode: "normal",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Layer 2 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 48% 45% at 40% 42%, rgba(255,255,255,0.25) 0%, transparent 62%)",
          mixBlendMode: "multiply",
          filter: "blur(144px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          mixBlendMode: "overlay",
          opacity: 0.85,
        }}
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="4"
              stitchTiles="stitch"
            />

            <feColorMatrix
              type="matrix"
              values="
                0.181 0.608 0.061 0 0.075
                0.181 0.608 0.061 0 0.075
                0.181 0.608 0.061 0 0.075
                0     0     0     1 0
              "
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
