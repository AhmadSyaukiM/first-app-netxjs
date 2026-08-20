// components/ui/ServiceTimeline.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDesktop, FaMobileScreenButton, FaBezierCurve } from "react-icons/fa6";

const SERVICES = [
  {
    icon: FaDesktop,
    title: "Web Developer",
    description:
      "High-quality development of sites at the professional level. ",
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile Developer",
    description:
      "Professional development of applications for iOS and Android with smooth, native-like user experience.",
  },
  {
    icon: FaBezierCurve,
    title: "UI/UX Designer",
    description:
      "Designing intuitive interfaces and user flows that balance aesthetics with usability and business goals.",
  },
];

export default function ServiceTimeline() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-10 flex max-w-3xl gap-4 sm:gap-5">
      {/* timeline kiri */}
      <div className="flex flex-col items-center">
        {SERVICES.map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <motion.span
              animate={{
                scale: idx === active ? 1.15 : 1,
                borderColor: idx === active ? "var(--color-primary)" : "rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-5 w-5 items-center justify-center rounded-full border-2"
            >
              {idx === active && (
                <motion.span
                  layoutId="timelineActiveDot"
                  className="h-2 w-2 rounded-full bg-primary"
                />
              )}
            </motion.span>

            {idx < SERVICES.length - 1 && (
              <div className="my-1 h-20 w-[2px] bg-black/15 sm:h-24" />
            )}
          </div>
        ))}
      </div>

      {/* daftar layanan */}
      <div className="flex flex-1 flex-col gap-4 sm:gap-5">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          const isActive = idx === active;
          const isHighlighted = isActive || idx === hovered;

          return (
            <motion.button
              key={service.title}
              layout
              onClick={() => setActive(idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className={`glass flex gap-4 rounded-2xl border p-5 text-left transition-colors duration-500 sm:p-6
                ${isActive ? "items-start" : "items-center"}
                ${
                  isHighlighted
                    ? "border-transparent bg-primary text-white shadow-lg"
                    : "border-black/15 text-black hover:border-black/30"
                }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14
                  ${isHighlighted ? "bg-white/20" : "bg-black/5"}`}
              >
                <Icon size={22} className={isHighlighted ? "text-white" : "text-black"} />
              </span>

              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold leading-tight sm:text-xl">
                  {service.title}
                </span>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-2 overflow-hidden text-sm text-white/90 sm:text-base"
                    >
                      {service.description}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}