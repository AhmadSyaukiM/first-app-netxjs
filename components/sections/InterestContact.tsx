"use client";

import Marquee from "@/components/ui/Marquee";

export default function InterestContact() {
  return (
    // total tinggi wrapper sekarang 250vh (100vh + 100vh + 50vh buffer)
    // buffer ini yang kasih "jatah dwell" ke section 2 supaya dia beneran nempel diam
    <div className="wrapper relative" style={{ height: "250vh" }}>
      {/* SECTION 1 - Intrest With Me */}
      <section className="sticky top-0 z-10 h-screen w-full bg-gray-100 grid place-content-center px-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center tracking-tight leading-[120%] text-black">
          Intrest With Me ?
        </h1>
      </section>

      {/* SECTION 2 - Let's Contact & Collaboration */}
      <section className="sticky top-0 z-20 h-screen w-full bg-black/100 grid place-content-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 flex h-full items-center">
          <Marquee
            items={[
              <span
                key="contact"
                className="px-8 text-[7rem] sm:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)" }}
              >
                Contact
              </span>,
            ]}
            direction="left"
            baseSpeed={0.4}
            repeat={6}
            className="flex h-full items-center"
          />
        </div>

        <h1 className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-semibold text-center tracking-tight leading-snug text-white">
          Let&apos;s Contact &amp; Collaboration
          <br />
          With Me.
        </h1>
      </section>
    </div>
  );
}