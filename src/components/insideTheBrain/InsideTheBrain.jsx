import AuraDustyBackground from "@/components/background/AuraDustyBackground";
import Hero from "./Hero";
import About from "./About";
// import Skills from "./skills";
import SolarSystem from "../ui/SolarSystem";
import Projects from "./Projects";

export default function InsideTheBrain() {
  return (
    <AuraDustyBackground>
      <Hero />
      <About />
      <SolarSystem />
      <Projects />
      {/* <Skills /> */}
    </AuraDustyBackground>
  );
}
