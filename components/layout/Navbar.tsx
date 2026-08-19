"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
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
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [bottomOffset, setBottomOffset] = useState(24);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let el = document.getElementById("navbar-portal-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "navbar-portal-root";
      document.body.appendChild(el);
    }
    setPortalNode(el);
  }, []);

  // Hitung posisi Footer secara realtime agar navbar berhenti tepat di atasnya
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (footerRect.top < viewportHeight) {
        const overlap = viewportHeight - footerRect.top;
        setBottomOffset(overlap + 24);
      } else {
        setBottomOffset(24);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const measurePill = () => {
    const el = itemRefs.current[active];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setPillStyle({ left: elRect.left - containerRect.left, width: elRect.width });
  };

  useLayoutEffect(() => {
    measurePill();
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(measurePill);
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [active]);

  useEffect(() => {
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
  }, [active]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const sectionId = visible[0].target.id;
          const idx = NAV_ITEMS.findIndex((item) => item.id === sectionId);
          if (idx !== -1) setActive(idx);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (idx: number, id: string) => {
    isClickScrolling.current = true;
    setActive(idx);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  const navbarElement = (
    <nav
      ref={containerRef}
      style={{ bottom: `${bottomOffset}px` }}
      className="glass fixed left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full px-3 py-3 transition-[bottom] duration-75 ease-out sm:gap-3"
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
            onClick={() => handleNavClick(idx, item.id)}
            aria-label={item.label}
            className={`group relative z-10 flex h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full sm:h-12 ${
              isActive ? "px-4 sm:px-5" : "w-11 sm:w-12"
            }`}
          >
            {!isActive && (
              <span className="glass pointer-events-none absolute inset-0 rounded-full" />
            )}
            {!isActive && (
              <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
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

  if (!portalNode) return null;
  return createPortal(navbarElement, portalNode);
}