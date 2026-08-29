"use client";

import { motion } from "framer-motion";
import { FaHouse } from "react-icons/fa6";
import TypingText from "@/components/ui/TypingText";

export default function NotFoundContent() {
  return (
    // "h-full" bukan "min-h-screen" - karena sekarang tinggi diatur oleh flex-1
    // di parent (page.tsx), bukan section ini sendiri
    <section className="relative flex h-full min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold text-black sm:text-6xl">Page not found</h1>

        <p className="mx-auto mt-4 max-w-md text-sm text-gray-600 sm:text-base">
          <TypingText text="Oops! The page you're looking for may have been moved or no longer exists." />
        </p>

        <motion.a
          href="/"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaHouse size={13} />
            Back to Home
          </span>
          <span
            className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                       bg-gradient-to-r from-transparent via-white/50 to-transparent
                       transition-transform duration-700 ease-out
                       group-hover:translate-x-full"
          />
        </motion.a>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none text-center -ml-[5%] text-[14rem] font-extrabold leading-none text-black/5 sm:translate-y-20 sm:text-[28rem]"
      >
        404
      </div>
    </section>
  );
}