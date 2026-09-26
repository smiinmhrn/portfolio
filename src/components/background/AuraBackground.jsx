export default function AuraBackground({ children }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, rgba(251,191,36,0.6) 0%, transparent 45%)",
          filter: "blur(175px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 35%, rgba(251,146,60,0.5) 0%, transparent 40%)",
          filter: "blur(200px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 75%, rgba(244,63,94,0.4) 0%, transparent 50%)",
          filter: "blur(200px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 80%, rgba(245,158,11,0.3) 0%, transparent 35%)",
          filter: "blur(150px)",
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
