"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import FadeIn from "@/components/ui/FadeIn";
import FigmaFrame from "@/components/ui/FigmaFrame";

import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const lenis = useLenis();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FadeIn delay={0}>
        <h1 className="flex flex-col items-center gap-2 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          <span>
            <span className="text-primary">Hey,</span> I'm Ahmad
          </span>

          <span className="inline-flex flex-wrap items-center justify-center gap-2">
            <FigmaFrame>
              <span className="text-primary">Syauki</span>
            </FigmaFrame>

            <span className="relative inline-block">
              Mubarokq

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-[15px] top-[70px] -translate-y-1/2"
              >
                <Image
                  src="/images/cursor-arrow.png"
                  alt=""
                  width={48}
                  height={72}
                />
              </motion.div>
            </span>
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mt-6 max-w-xl text-text-primary sm:text-lg">
          I'm a software engineer dedicated to create accessible and
          delightful interfaces that enhance user experience and build
          design systems that are reliable and scalable.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
  <motion.button
    type="button"
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 400, damping: 12 }}
    onClick={() => {
      const target = document.getElementById("contact");

      if (target && lenis) {
        lenis.scrollTo(target, {
          duration: 1.2,
        });
      } else if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }}
    className="glass group relative mt-8 flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 font-medium text-black transition"
  >
   
    <span
      className="pointer-events-none absolute inset-0 z-0 bg-black/0
                 transition-colors duration-300
                 group-hover:bg-black/80"
    />

 
    <span
      className="relative z-10 flex items-center gap-2
                 text-black transition-colors duration-300
                 group-hover:text-white"
    >
      Contact me for work
      <FaChevronDown size={12} />
    </span>


    <span
      className="pointer-events-none absolute inset-0 z-20
                 -translate-x-full
                 bg-gradient-to-r from-transparent via-white/60 to-transparent
                 transition-transform duration-700 ease-out
                 group-hover:translate-x-full"
    />
  </motion.button>
</FadeIn>
    </section>
  );
}