import { useEffect, useRef, useState } from "react";
import { PopButtonDemo } from "./PopButtonDemo";

export default function BrainWarning({ onWarningChange }) {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const active = entry.intersectionRatio >= 0.95;

        setIsActive(active);
        onWarningChange?.(active);
      },
      {
        threshold: [0, 0.5, 0.75, 0.95, 1],
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      onWarningChange?.(false);
    };
  }, [onWarningChange]);

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh w-full overflow-hidden flex items-center justify-center"
    >
      <div
        className={`
          relative
          w-full
          h-full
          flex
          items-center
          justify-center
          ${isActive ? "brain-shake" : ""}
        `}
      >
        {/* DARK */}
        <div
          className={`
            absolute inset-0
            bg-black/10
            transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* WARNING */}
        <div
          className={`
            relative
            z-10
            text-center
            select-none
            transition-all
            duration-700
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            kalam-text
          `}
        >
          <div className="text-white text-xs md:text-sm tracking-[0.6em] mb-6">
            ⚠ SYSTEM WARNING
          </div>

          <h1 className="text-white font-bold text-4xl md:text-7xl tracking-tight">
            YOU&apos;RE NOT SUPPOSED
          </h1>

          <h1 className="text-white font-bold text-4xl md:text-7xl tracking-tight">
            TO BE HERE
          </h1>
          <div className="mt-16">
            <PopButtonDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
