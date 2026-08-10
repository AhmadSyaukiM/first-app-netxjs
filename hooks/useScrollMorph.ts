"use client";

import { useEffect, useState } from "react";

export function useScrollMorph(threshold = 40) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { isCompact, setIsCompact };
}