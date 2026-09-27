import { useEffect, useState } from "react";
import lampCursor from "@/assets/lamp.png";

export default function BrainSection({ isVisible, children }) {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [lampOn, setLampOn] = useState(false);

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // ─────────────────────────────────────────
  // Desktop cursor
  // ─────────────────────────────────────────

  useEffect(() => {
    if (!isVisible || isTouchDevice) {
      document.body.style.cursor = "default";
      return;
    }

    document.body.style.cursor = `url("${lampCursor}") 16 16, auto`;

    return () => {
      document.body.style.cursor = "default";
    };
  }, [isVisible, isTouchDevice]);

  // ─────────────────────────────────────────
  // Mouse position
  // ─────────────────────────────────────────

  useEffect(() => {
    if (!isVisible || isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible, isTouchDevice]);

  // ─────────────────────────────────────────
  // Touch position
  // ─────────────────────────────────────────

  useEffect(() => {
    if (!isVisible || !isTouchDevice) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];

      setMousePosition({
        x: touch.clientX,
        y: touch.clientY,
      });
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];

      setMousePosition({
        x: touch.clientX,
        y: touch.clientY,
      });
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isVisible, isTouchDevice]);

  // ─────────────────────────────────────────
  // Toggle lamp
  // ─────────────────────────────────────────

  const handleClick = (e) => {
    if (
      e.target.closest("button, a, input, textarea, select, [role='button']")
    ) {
      return;
    }

    setLampOn((prev) => !prev);
  };

  const isLampOn = isVisible && lampOn;

  return (
    <section
      onClick={handleClick}
      className={`fixed inset-0 z-30 overflow-y-auto overflow-x-hidden transition-opacity duration-1500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* CONTENT */}
      <div className="relative z-0 min-h-full">{children}</div>

      {/* DARK OVERLAY */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: isLampOn
            ? `
              radial-gradient(
                circle 500px
                at ${mousePosition.x - 80}px ${mousePosition.y - 150}px,
                transparent 0%,
                transparent 30%,
                rgba(0,0,0,0.28) 45%,
                rgba(0,0,0,0.63) 65%,
                rgba(0,0,0,0.84) 82%,
                rgba(0,0,0,0.89) 100%
              )
            `
            : "#000",
        }}
      />

      {/* WARM YELLOW LIGHT */}
      {isLampOn && (
        <div
          className="fixed pointer-events-none z-20"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 150,
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            background: `
              radial-gradient(
                circle,
                rgba(255, 210, 70, 0.25) 0%,
                rgba(255, 190, 40, 0.18) 25%,
                rgba(255, 170, 20, 0.09) 50%,
                rgba(255, 150, 0, 0.035) 70%,
                transparent 100%
              )
            `,
            filter: "blur(20px)",
          }}
        />
      )}

      {/* MOBILE LAMP */}
      {isVisible && isTouchDevice && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {!lampOn && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap text-white/70 text-sm leading-6 text-center">
              <div className="kalam-text">It's a little bit dark here.</div>

              <div className="kalam-text">Touch to turn on the lamp.</div>
            </div>
          )}

          <img src={lampCursor} alt="" className="w-16 h-16 object-contain" />
        </div>
      )}

      {/* DESKTOP TEXT */}
      {!isLampOn && !isTouchDevice && (
        <div
          className="fixed z-40 pointer-events-none select-none text-white/70 text-sm leading-6"
          style={{
            left: mousePosition.x - 130,
            top: mousePosition.y - 70,
          }}
        >
          <div className="kalam-text">It's a little bit dark here.</div>

          <div className="kalam-text">Click to turn on the lamp.</div>
        </div>
      )}
    </section>
  );
}
