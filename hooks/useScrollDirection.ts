"use client";

import { useEffect, useRef, useState } from "react";

const IDLE_DELAY = 800;
const MIN_DELTA = 4; // pergeseran di bawah ini diabaikan - biar ga kepancing overscroll bounce

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [isScrolling, setIsScrolling] = useState(false);

  const lastY = useRef(0);
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handle = () => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - lastY.current;

      if (Math.abs(delta) >= MIN_DELTA) {
        setDirection(delta > 0 ? "down" : "up");
        lastY.current = currentY;

        setIsScrolling(true);
        clearTimeout(idleTimeout.current);
        idleTimeout.current = setTimeout(() => setIsScrolling(false), IDLE_DELAY);
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handle);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idleTimeout.current);
    };
  }, []);

  return { direction, isScrolling };
}