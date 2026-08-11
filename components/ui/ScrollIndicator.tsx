// components/ui/ScrollIndicator.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function ScrollIndicator() {
  const { direction, isScrolling } = useScrollDirection();

  return (
    <div className="relative flex h-[110px] w-10 items-center justify-center">
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            {direction === "up" ? (
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaChevronUp className="text-black/70" size={18} />
              </motion.div>
            ) : null}

            <div className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-black/70 p-2">
              {/* spring lebih lembut - stiffness diturunkan, damping dinaikkan */}
              <motion.div
                animate={{ y: direction === "down" ? 12 : 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
                className="h-2.5 w-1.5 rounded-full border-2 border-black/70 bg-transparent"
              />
            </div>

            {direction === "down" ? (
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaChevronDown className="text-black/70" size={18} />
              </motion.div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}