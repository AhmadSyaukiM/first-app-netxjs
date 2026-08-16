"use client";

import { motion } from "framer-motion";

export default function SliderDots({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={i}
            animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.85 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-white"
          />
        );
      })}
    </div>
  );
}