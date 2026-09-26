import { useEffect, useState } from "react";
import brainImage from "@/assets/brain.png";
import AuraBackground from "@/components/background/AuraBackground";

export default function Hero({ isTransitioning, isInsideBrain }) {
  const [text, setText] = useState("");

  const firstText = "AND THIS IS MY ";
  const brainText = "BRAIN !";
  const lastText = ". OH, YOU WANNA EXPLORE? SURE! JUST SCROLL.";

  // ─────────────────────────────────────────
  // Typing animation
  // ─────────────────────────────────────────

  useEffect(() => {
    let index = 0;
    const fullText = firstText + brainText + lastText;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // ─────────────────────────────────────────
  // Text parts
  // ─────────────────────────────────────────

  const firstPart = text.slice(0, Math.min(text.length, firstText.length));

  const brainStart = firstText.length;
  const brainEnd = brainStart + brainText.length;

  const brainPart =
    text.length > brainStart
      ? text.slice(brainStart, Math.min(text.length, brainEnd))
      : "";

  const lastPart = text.length > brainEnd ? text.slice(brainEnd) : "";

  if (isInsideBrain) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-20 transition-all duration-1500 ease-in-out ${
        isTransitioning ? "scale-[8]" : "scale-100"
      }`}
    >
      <AuraBackground>
        <section className="h-screen flex flex-col lg:grid lg:grid-cols-[4fr_6fr]">
          {/* TEXT */}

          <div className="flex items-center lg:block mt-30 lg:mt-20">
            <p
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight m-8 lg:m-18 kalam-text text-white text-center lg:text-left"
              style={{
                textShadow: "3px 3px 0px #D06167",
              }}
            >
              {firstPart}

              <span
                className="text-[#D06167]"
                style={{
                  textShadow: "3px 3px 0px black",
                }}
              >
                {brainPart}
              </span>

              {lastPart}
            </p>
          </div>

          {/* BRAIN */}

          <div className="flex items-center justify-center mt-10 lg:mt-0 overflow-visible">
            <img
              src={brainImage}
              alt="Brain"
              className={`w-full sm:w-[80%] lg:w-auto transition-transform duration-1500 ease-in-out ${
                isTransitioning ? "scale-[8]" : "scale-100"
              }`}
            />
          </div>
        </section>
      </AuraBackground>
    </div>
  );
}
