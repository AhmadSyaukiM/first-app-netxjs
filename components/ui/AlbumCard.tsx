"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type AlbumCardProps = {
  src: string;
  alt: string;
};

export default function AlbumCard({ src, alt }: AlbumCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((v) => !v)}
      className="group relative h-40 w-56 cursor-pointer sm:h-48 sm:w-64"
    >
      {/* kartu belakang ke-2 - warna dark navy, muncul & fan-out saat open */}
      <motion.div
        animate={
          open
            ? { rotate: 10, x: 14, y: 8, opacity: 1 }
            : { rotate: 0, x: 0, y: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="absolute inset-0 rounded-2xl bg-[#233D4D] shadow-lg"
      />

      {/* kartu belakang ke-1 - warna primary, muncul & fan-out saat open */}
      <motion.div
        animate={
          open
            ? { rotate: -8, x: -12, y: 6, opacity: 1 }
            : { rotate: 0, x: 0, y: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="absolute inset-0 rounded-2xl bg-primary shadow-lg"
      />

      {/* kartu utama (foto) - default lurus, sedikit rotate & naik saat open */}
      <motion.div
        animate={open ? { rotate: 2, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="glass group/inner relative h-full w-full overflow-hidden rounded-2xl border-2 border-white shadow-xl"
      >
        <Image src={src} alt={alt} fill className="object-cover" />

        {/* shine sweep saat hover */}
        <span
          className="pointer-events-none absolute inset-0 z-10 -translate-x-full
                     bg-gradient-to-r from-transparent via-white/50 to-transparent
                     transition-transform duration-700 ease-out
                     group-hover:translate-x-full"
        />
      </motion.div>
    </div>
  );
}