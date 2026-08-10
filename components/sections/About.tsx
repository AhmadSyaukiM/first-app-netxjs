import FadeIn from "@/components/ui/FadeIn";
import ProfileCard from "@/components/ui/ProfileCard";
import ConnectPanel from "@/components/ui/ConnectPanel";

const VERTICAL_LINE_HEIGHT = 38;

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Horizontal atas - full viewport */}
      <div className="pointer-events-none absolute left-0 top-10 h-[1.5px] w-screen bg-black/30" />

      {/* Vertical */}
      <div
        className="pointer-events-none absolute left-[65%] top-10 w-[1.5px] bg-black/30"
        style={{
          height: VERTICAL_LINE_HEIGHT,
        }}
      />

      {/* Horizontal bawah - full viewport */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-[1.5px] w-screen -translate-x-1/2 bg-black/30" />

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

          <FadeIn
            delay={0.2}
            className="w-full lg:w-auto lg:flex-1"
          >
            <ConnectPanel />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}