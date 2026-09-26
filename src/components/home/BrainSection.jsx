import { useEffect, useState } from "react";
import lampCursor from "@/assets/lamp.png";

export default function BrainSection({ isVisible }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [lampOn, setLampOn] = useState(false);

  // Cursor
  useEffect(() => {
    if (isVisible) {
      document.body.style.cursor = `url("${lampCursor}") 16 16, auto`;
    } else {
      document.body.style.cursor = "default";
    }

    return () => {
      document.body.style.cursor = "default";
    };
  }, [isVisible]);

  // Mouse position
  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible]);

  // Toggle lamp
  const handleClick = () => {
    setLampOn((prev) => !prev);
  };

  const isLampOn = isVisible && lampOn;

  return (
    <section
      onClick={handleClick}
      className={`fixed inset-0 z-30 overflow-hidden transition-opacity duration-[1500ms] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ================================= */}
      {/* CONTENT UNDER THE DARKNESS */}
      {/* ================================= */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">Your hidden content</h1>

          <p className="mt-4 text-white/70">
            This becomes visible when the lamp is turned on.
          </p>
        </div>
      </div>

      {/* ================================= */}
      {/* DARK OVERLAY */}
      {/* ================================= */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLampOn
            ? `
              radial-gradient(
                circle 300px
                at ${mousePosition.x - 80}px ${mousePosition.y - 150}px,
                transparent 0%,
                transparent 30%,
                rgba(0,0,0,0.25) 45%,
                rgba(0,0,0,0.65) 65%,
                rgba(0,0,0,0.92) 82%,
                #000 100%
              )
            `
            : "#000",
        }}
      />

      {/* ================================= */}
      {/* WARM YELLOW LIGHT */}
      {/* ================================= */}

      {isLampOn && (
        <div
          className="fixed pointer-events-none"
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

      {/* ================================= */}
      {/* TEXT BEFORE CLICK */}
      {/* ================================= */}

      {!isLampOn && (
        <div
          className="fixed pointer-events-none select-none text-white/70 text-sm leading-6"
          style={{
            left: mousePosition.x - 120,
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
