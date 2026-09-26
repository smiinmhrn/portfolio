export default function SollarBackground({ children }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#100e0b",
      }}
    >
      {/* Layer 1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 40% 45%, rgba(56,189,248,0.6) 0%, transparent 65%)",
          mixBlendMode: "screen",
          filter: "blur(234px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Layer 2 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 45% at 65% 60%, rgba(255,255,255,0.35) 0%, transparent 60%)",
          mixBlendMode: "soft-light",
          filter: "blur(198px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Stars */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 8% 12%, rgba(255,255,255,0.9) 1px, transparent 3px),
            radial-gradient(circle at 30% 8%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 60% 15%, rgba(199,210,254,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 85% 22%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 92% 60%, rgba(255,255,255,0.8) 1.5px, transparent 4px),
            radial-gradient(circle at 45% 75%, rgba(199,210,254,1) 1.5px, transparent 4px),
            radial-gradient(circle at 15% 68%, rgba(255,255,255,0.6) 1px, transparent 3px)
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
