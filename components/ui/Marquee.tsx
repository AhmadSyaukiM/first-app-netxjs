"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  direction?: "left" | "right";
  baseSpeed?: number;
  repeat?: number; // berapa kali pola diulang sebelum di-duplikasi untuk loop
  className?: string;
};

export default function Marquee({
  items,
  direction = "left",
  baseSpeed = 0.7,
  repeat = 8,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speedRef = useRef(0);
  const targetRef = useRef(1);

  // ulang pola "repeat" kali dulu, baru nanti diduplikasi 2x untuk seamless loop
  const loopedItems = Array.from({ length: repeat }).flatMap(() => items);

  useEffect(() => {
    let rafId: number;
    let trackWidth = 0;
    const dirMultiplier = direction === "left" ? -1 : 1;

    const measure = () => {
      if (trackRef.current) {
        trackWidth = trackRef.current.scrollWidth / 2;
        if (direction === "right") x.set(-trackWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);

    const loop = () => {
      speedRef.current += (targetRef.current - speedRef.current) * 0.05;

      let current = x.get() + dirMultiplier * baseSpeed * speedRef.current;

      // wrap seamless: karena kontennya panjang & berpola sama, titik reset ini
      // jatuh di tengah pola yang identik, jadi tidak terlihat "nyambung"
      if (direction === "left" && current <= -trackWidth) current += trackWidth;
      if (direction === "right" && current >= 0) current -= trackWidth;

      x.set(current);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measure);
    };
  }, [direction, baseSpeed, x]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => { targetRef.current = 0; }}
      onMouseLeave={() => { targetRef.current = 1; }}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max whitespace-nowrap">
        {[...loopedItems, ...loopedItems].map((item, idx) => (
          <span key={idx} className="flex items-center">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}