import { useEffect, useState } from "react";
import brainImage from "@/assets/brain.png";
import AuraBackground from "@/components/background/AuraBackground";
// import kalamFont from "@/assets/fonts/Kalam_Complete/Fonts/TTF";

export default function Home() {
  const [text, setText] = useState("");

  const firstText = "AND THIS IS MY ";
  const brainText = "BRAIN !";
  const lastText = ". OH, YOU WANNA EXPLORE? SURE! JUST SCROLL.";

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

  const firstPart = text.slice(0, Math.min(text.length, firstText.length));

  const brainStart = firstText.length;
  const brainEnd = brainStart + brainText.length;

  const brainPart =
    text.length > brainStart
      ? text.slice(brainStart, Math.min(text.length, brainEnd))
      : "";

  const lastPart = text.length > brainEnd ? text.slice(brainEnd) : "";

  return (
    <AuraBackground>
      <section className="h-screen grid grid-cols-[4fr_6fr]">
        <div className="pt-20">
          <p
            className="text-5xl font-bold leading-tight m-18 kalam-text text-white "
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

        <div className="flex items-center justify-center">
          <img src={brainImage} alt="Brain" />
        </div>
      </section>
    </AuraBackground>
  );
}
