import FadeIn from "@/components/ui/FadeIn";
import ProfileCard from "@/components/ui/ProfileCard";
import ConnectPanel from "@/components/ui/ConnectPanel";
import WhatIDo from "@/components/sections/WhatIDo";
import SkillSet from "@/components/sections/SkillSet";

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Horizontal atas - top-anchored, stabil */}
      <div
        className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-black/30
                   top-[25px] 
                   sm:top-[600px] lg:top-[10px]"
      />

      {/* Vertical - top-anchored + height tetap, stabil */}
      <div
        className="pointer-events-none absolute w-[1px] bg-black/30
                   left-[94%] top-[25px] h-[1218px]
                   sm:left-[65%] sm:top-[600px] sm:h-[500px]
                   lg:left-[80%] lg:top-[10px] lg:h-[882px]"
      />

      {/* Horizontal bawah - SEKARANG juga top-anchored (bukan bottom, bukan margin),
         posisinya persis = titik akhir garis vertical (top + height vertical),
         jadi otomatis nyambung rapi dan TIDAK PERNAH bergeser walau konten
         di bawahnya bertambah/berkurang (expand skill, section baru, dll) */}
      <div
        className="pointer-events-none absolute inset-x-0 h-[1px] bg-black/30
                   top-[1243px]
                   sm:top-[1100px] lg:top-[892px]"
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

        <WhatIDo />
        <SkillSet />
      </div>
    </section>
  );
}