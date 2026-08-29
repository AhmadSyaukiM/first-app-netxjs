import FadeIn from "@/components/ui/FadeIn";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ServiceTimeline from "@/components/ui/ServiceTimeline";

export default function WhatIDo() {
  return (
    <div className="relative mt-24 sm:mt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-23 top-32 -z-10 sm:-left-80 sm:-top-8"
      >
        <div className="h-42 w-42 rounded-full bg-primary sm:h-100 sm:w-100" />
        <div className="absolute -right-5 -top-0 h-15 w-15 rounded-full bg-black sm:h-27 sm:w-27 sm:-right-5 sm:-top-0" />
      </div>

      <FadeIn>
        <div className="flex justify-center">
          <ScrollIndicator />
        </div>
      </FadeIn>

      <div className="relative mx-auto mt-6 h-8 w-full max-w-3xl">
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-[1px]" />
      </div>

      <FadeIn delay={0.1}>
        <p className="relative mt-8 text-[43px] font-extrabold text-black sm:text-6xl">
          02 . <span className="text-primary">WHAT I DO</span>
        </p>
        <h2 className="relative mt-1 text-[31px] font-extrabold uppercase text-black sm:text-4xl">
          My Expertise
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <ServiceTimeline />
      </FadeIn>
    </div>
  );
}