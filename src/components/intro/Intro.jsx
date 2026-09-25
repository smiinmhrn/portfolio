import { useEffect, useRef } from "react";
import { MorphText } from "@/components/ui/morph-text";

function Intro() {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.12;
      current.current.y += (mouse.current.y - current.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(
          ${current.current.x}px,
          ${current.current.y}px,
          0
        ) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-center text-white">
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-100 w-100 rounded-full bg-gray-400/15 blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10">
        <MorphText
          words={["LADIES AND GENTLEMEN", "HI", "THIS IS ME"]}
          interval={2500}
          subtext="I CAN BUILD THINGS THAT YOU WANT"
          fontSize="clamp(2rem, 6vw, 6rem)"
          subtextClassName="text-xs sm:text-sm md:text-base"
        />
      </div>
    </section>
  );
}

export default Intro;
