import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopButtonDemo } from "./PopButtonDemo";

export default function BrainWarning({ onWarningChange }) {
  const sectionRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const navigate = useNavigate();

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

  const handleExit = () => {
    setIsLeaving(true);

    setTimeout(() => {
      navigate("/contacts");
    }, 800);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`
          relative
          w-full
          overflow-hidden
          flex
          items-center
          justify-center
          py-32
          md:py-40
          ${isLeaving ? "page-exit" : ""}
        `}
      >
        <div
          className={`
            relative
            w-full
            flex
            items-center
            justify-center
            ${isActive ? "brain-shake" : ""}
          `}
        >
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
              <PopButtonDemo onClick={handleExit} />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      {isLeaving && (
        <div className="fixed inset-0 z-9999 pointer-events-none page-transition" />
      )}
    </>
  );
}
