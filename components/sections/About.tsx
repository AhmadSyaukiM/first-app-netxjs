import FadeIn from "@/components/ui/FadeIn";
import ProfileCard from "@/components/ui/ProfileCard";
import ConnectPanel from "@/components/ui/ConnectPanel";

const TOP_LINE_WIDTH = 1800;
const VERTICAL_LINE_LEFT = 1270;   // posisi horizontal garis vertikal (px dari kiri)
const VERTICAL_LINE_HEIGHT = 838; // tinggi garis vertikal (px)

export default function About() {
  return (
    <section id="about" className="relative px-6 py-16 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-0 top-10 h-[1.5px] bg-black/30"
          style={{ width: TOP_LINE_WIDTH }}
        />
        <div
          className="absolute top-10 w-[1.5px] bg-black/30"
          style={{ left: VERTICAL_LINE_LEFT, height: VERTICAL_LINE_HEIGHT }}
        />
        <div
          className="absolute bottom-10 h-[1.5px] w-screen -translate-x-1/2 bg-black/30"
          style={{ left: "50%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-3xl font-extrabold text-black sm:text-6xl">
            01 . <span className="text-primary">ABOUT</span>
          </p>
          <h2 className="mt-1 text-2xl font-extrabold uppercase text-black sm:text-3xl">
            Who I&apos;m &amp; What I Do
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          <FadeIn delay={0.1}>
            <ProfileCard />
          </FadeIn>

          <FadeIn delay={0.2} className="w-full lg:w-auto lg:flex-1">
            <ConnectPanel />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}