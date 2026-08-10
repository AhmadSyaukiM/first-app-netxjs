// components/layout/Navbar.tsx
"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import HomeIcon from "@/components/icons/HomeIcon";
import AboutIcon from "@/components/icons/AboutIcon";
import CareerIcon from "@/components/icons/CareerIcon";
import ProjectIcon from "@/components/icons/ProjectIcon";
import ContactIcon from "@/components/icons/ContactIcon";

const NAV_ITEMS = [
  { icon: HomeIcon, label: "Home", id: "home" },
  { icon: AboutIcon, label: "About", id: "about" },
  { icon: CareerIcon, label: "Career", id: "career" },
  { icon: ProjectIcon, label: "Project", id: "project" },
  { icon: ContactIcon, label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);

  const measurePill = () => {
    const el = itemRefs.current[active];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setPillStyle({ left: elRect.left - containerRect.left, width: elRect.width });
  };

  // ukur ulang tiap kali "active" berubah, DAN sesudah browser selesai
  // layout (double rAF) supaya lebar final sudah pasti fix, bukan lebar transisi
  useLayoutEffect(() => {
    measurePill();
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(measurePill);
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <nav
      ref={containerRef}
      className="glass fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2
                 items-center gap-2.5 sm:gap-3 rounded-full px-3 py-3"
    >
      <motion.div
        animate={{ left: pillStyle.left, width: pillStyle.width }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        className="absolute top-1/2 z-0 h-11 -translate-y-1/2 rounded-full bg-primary sm:h-12"
      />

      {NAV_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        const isActive = idx === active;

        return (
          <button
            key={item.label}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
              onClick={() => {
                setActive(idx);
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}           
              aria-label={item.label}
            // lebar/padding TANPA transisi CSS -> berubah instan, biar getBoundingClientRect
            // selalu baca ukuran final, bukan ukuran di tengah animasi
            className={`group relative z-10 flex h-11 shrink-0 items-center justify-center
                        gap-2 overflow-hidden rounded-full
                        sm:h-12
                        ${isActive ? "px-4 sm:px-5" : "w-11 sm:w-12"}`}
          >
            {!isActive && (
              <span className="glass pointer-events-none absolute inset-0 rounded-full" />
            )}

            {!isActive && (
              <span
                className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                           bg-gradient-to-r from-transparent via-white/70 to-transparent
                           transition-transform duration-700 ease-out
                           group-hover:translate-x-full"
              />
            )}

            <span className="relative z-10 flex items-center gap-2">
              <Icon
                className={`h-4 w-4 shrink-0 transition-colors duration-300 sm:h-5 sm:w-5 ${
                  isActive ? "text-white" : "text-icon-inactive group-hover:text-black"
                }`}
              />
              {isActive && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  className="whitespace-nowrap text-sm font-bold text-white sm:text-base"
                >
                  {item.label}
                </motion.span>
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}