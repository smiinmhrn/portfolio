import AuraDustyBackground from "@/components/background/AuraDustyBackground";
import Hero from "./Hero";
import About from "./About";
import SolarSystem from "../ui/SolarSystem";
import Projects from "./Projects";
import BrainWarning from "./BrainWarning";

export default function InsideTheBrain() {
  return (
    <AuraDustyBackground>
      <Hero />
      <About />
      <SolarSystem />
      <Projects />
      <BrainWarning />  
    </AuraDustyBackground>
  );
}
