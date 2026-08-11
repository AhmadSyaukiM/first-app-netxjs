import FadeIn from "@/components/ui/FadeIn";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ServiceTimeline from "@/components/ui/ServiceTimeline";

export default function WhatIDo() {
  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <div className="flex justify-center">
          <ScrollIndicator />
        </div>
      </FadeIn>

      {/* garis "cahaya" pemisah section - gradient blur tipis, bukan garis solid */}
      <div className="relative mx-auto mt-6 h-8 w-full max-w-3xl">
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-[1px]" />
      </div>

      <FadeIn delay={0.1}>
        <p className="mt-8 text-4xl font-extrabold text-black sm:text-5xl">
          02 . <span className="text-primary">WHAT I DO</span>
        </p>
        <h2 className="mt-1 text-2xl font-extrabold uppercase text-black sm:text-3xl">
          My Expertise
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <ServiceTimeline />
      </FadeIn>
    </div>
  );
}