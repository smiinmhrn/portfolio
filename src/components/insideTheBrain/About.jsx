import ScrollReveal from "@/components/scrollAnimation/ScrollReveal";
import sparkle from "@/assets/spotlight-23.png";

export default function About() {
  return (
    <div className="kalam-text flex flex-col justify-center items-center min-h-screen">
      <ScrollReveal>
        <img src={sparkle} alt="sparkle" className="w-75" />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h1
          className="font-bold text-5xl text-center mb-20 text-white"
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          A little about me
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="px-60">
          <p className="text-3xl">
            I’m someone who really enjoys making things — whether it’s drawing,
            playing an instrument, or building something with code. I love
            taking an idea in my head and slowly turning it into something real.
            One of my favorite things about coding is taking on something that
            initially feels impossible. I like figuring things out on my own,
            trying different approaches, breaking things, fixing them, and
            finally getting that satisfying “it works!” moment. When I build
            something, I want it to look good, feel good to use, and be fast. I
            also care about understanding the code I write and keeping it clean.
            I’m a calm and patient person, and the more I learn, the more I
            realize how much there is still to discover — and honestly, I enjoy
            that. I studied Computer Engineering at Yazd University, where I
            earned my Bachelor's degree. When I’m not coding, you’ll probably
            find me drawing, playing music, or watching a movie.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
