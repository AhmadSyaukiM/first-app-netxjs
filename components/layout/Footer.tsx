"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

export default function Footer() {
  const lenis = useLenis();
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-secondary px-6 py-6 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-6">
          <span>&copy; 2026 Ahmad Syauki Mubarokq. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-primary">Terms of Use</a>
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Cookies</a>
          </div>
        </div>

        <motion.button
          onClick={scrollToTop}
          initial="rest"
          whileHover="hover"
          animate="rest"
          whileTap={{ scale: 0.95 }}
          className="mr-1 flex h-12 items-center justify-center rounded-full border border-black/25 bg-white p-1 shadow-sm sm:mr-2"
        >
          <motion.div
            variants={{
              rest: { width: 36 },
              hover: { width: 148 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex h-9 items-center justify-center overflow-hidden rounded-full border-[3px] border-primary"
          >
            <motion.span
              variants={{
                rest: { opacity: 0, width: 0, marginRight: 0 },
                hover: { opacity: 1, width: "auto", marginRight: 10 },
              }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap text-sm font-bold text-primary"
            >
              Back to top
            </motion.span>

            <FaArrowUp className="h-3.5 w-3.5 shrink-0 text-primary" />
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
}