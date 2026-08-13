"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function ScrollDownArrow() {
  const { isScrolling } = useScrollDirection();

  return (
    <div className="relative flex h-10 items-center justify-center">
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaChevronDown className="text-black/70" size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}