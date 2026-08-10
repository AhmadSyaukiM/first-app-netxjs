import Hero from "@/components/sections/Hero";
import MarqueeDivider from "@/components/sections/MarqueeDivider";
import About from "@/components/sections/About";
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
    </div>
  );
}