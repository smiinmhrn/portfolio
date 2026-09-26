import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import BrainSection from "@/components/home/BrainSection";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInsideBrain, setIsInsideBrain] = useState(false);

  // ─────────────────────────────────────────
  // Scroll → transition
  // ─────────────────────────────────────────

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0 && !isTransitioning && !isInsideBrain) {
        setIsTransitioning(true);

        setTimeout(() => {
          setIsInsideBrain(true);
          setIsTransitioning(false);
        }, 1500);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isTransitioning, isInsideBrain]);

  return (
    <main className="bg-white min-h-screen">
      <Hero isTransitioning={isTransitioning} isInsideBrain={isInsideBrain} />

      <BrainSection isVisible={isInsideBrain || isTransitioning} />
    </main>
  );
}
