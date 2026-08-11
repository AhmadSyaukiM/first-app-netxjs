import FadeIn from "@/components/ui/FadeIn";
import ProfileCard from "@/components/ui/ProfileCard";
import ConnectPanel from "@/components/ui/ConnectPanel";
import WhatIDo from "@/components/sections/WhatIDo";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Horizontal atas - full lebar section, pakai inset-x-0 (bukan w-screen) */}
      <div
        className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-black/30
                   top-[25px] 
                   sm:top-[600px] lg:top-[10px]"
      />

      {/* Vertical - tidak berubah, sudah aman karena pakai left-[%] + height pixel */}
      <div
        className="pointer-events-none absolute w-[1.5px] bg-black/30
                   left-[94%] top-[25px] h-[1175px]
                   sm:left-[65%] sm:top-[600px] sm:h-[500px]
                   lg:left-[80%] lg:top-[10px] lg:h-[868px]"
      />

      {/* Horizontal bawah - full lebar section, pakai inset-x-0 (bukan w-screen) */}
      <div
        className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-black/30
                   bottom-[805px] sm:bottom-[80px] lg:bottom-[877px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <FadeIn className="mx-auto w-[280px] sm:mx-0 sm:w-auto">
          <p className="text-5xl font-extrabold text-black sm:text-6xl">
            01 . <span className="text-primary">ABOUT</span>
          </p>

          <h2 className="mt-1 text-[26px] font-extrabold uppercase text-black sm:text-3xl">
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

        {/* section "What I Do" - masih di dalam <section id="about"> yang sama,
            bukan section terpisah, sesuai request kamu */}
        <WhatIDo />
      </div>
    </section>
  );
}