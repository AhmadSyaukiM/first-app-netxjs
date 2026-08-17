import Hero from "@/components/sections/Hero";
import MarqueeDivider from "@/components/sections/MarqueeDivider";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Project from "@/components/sections/Project";
import InterestContact from "@/components/sections/InterestContact";
import Contact from "@/components/sections/Contact";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className="relative">
      <Logo />
      <div id="home">
        <Hero />
      </div>
      <MarqueeDivider />
      <About />
      <Career />
      <Project />
      <InterestContact />
      <Contact />
    </div>
  );
}