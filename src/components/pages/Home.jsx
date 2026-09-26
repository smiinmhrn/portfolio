import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "@/components/home/Hero";
import BrainSection from "@/components/home/BrainSection";
import InsideTheBrain from "@/components/insideTheBrain/InsideTheBrain";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInsideBrain, setIsInsideBrain] = useState(false);

  const touchStartY = useRef(0);

  // ─────────────────────────────────────────
  // Go inside brain
  // ─────────────────────────────────────────

  const goInsideBrain = useCallback(() => {
    if (isTransitioning || isInsideBrain) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setIsInsideBrain(true);
      setIsTransitioning(false);
    }, 1500);
  }, [isTransitioning, isInsideBrain]);

  // ─────────────────────────────────────────
  // Scroll + Touch
  // ─────────────────────────────────────────

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        goInsideBrain();
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0].clientY;

      const distance = touchStartY.current - touchEndY;

      // Swipe up
      if (distance > 50) {
        goInsideBrain();
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goInsideBrain]);

  return (
    <main className="bg-white min-h-screen">
      <Hero isTransitioning={isTransitioning} isInsideBrain={isInsideBrain} />

      <BrainSection isVisible={isInsideBrain || isTransitioning}>
        <InsideTheBrain />
      </BrainSection>
    </main>
  );
}
