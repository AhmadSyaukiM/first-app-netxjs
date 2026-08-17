// components/ui/ProjectCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegEye, FaLink } from "react-icons/fa6";

type ProjectCardProps = {
  image: string;
  title: string;
  viewUrl?: string;
  linkUrl?: string;
};

export default function ProjectCard({ image, title, viewUrl, linkUrl }: ProjectCardProps) {
  const [cardHovered, setCardHovered] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<"view" | "link" | null>(null);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
      {/* layer blur terpisah */}
      <div className="glass absolute inset-0 rounded-[2rem]" />

      <div className="relative h-full w-full p-3">
        <div
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => {
            setCardHovered(false);
            setHoveredBtn(null);
          }}
          className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl border-2 border-black/10"
        >
          <Image src={image} alt={title} fill className="object-cover" />

          {/* overlay "air naik" */}
          <motion.div
            animate={{ height: cardHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"
          />

          {/* PERBAIKAN: Kontainer dibuat fullscreen (inset-0) & terpusat sempurna di tengah (items-center justify-center) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                y: cardHovered ? 0 : 30, 
                opacity: cardHovered ? 1 : 0 
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-4 pointer-events-auto"
            >
              {viewUrl && (
                <motion.a
                  href={viewUrl}
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHoveredBtn("view")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  animate={{ scale: hoveredBtn === "view" ? 1.1 : 1 }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="relative flex h-11 w-11 items-center justify-center overflow-hidden border-1 border-white rounded-xl bg-primary text-white shadow-lg"
                  aria-label="View project"
                >
                  <motion.span
                    animate={{ height: hoveredBtn === "view" ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/25"
                  />
                  <FaRegEye size={17} className="relative z-10" />
                </motion.a>
              )}
              {linkUrl && (
                <motion.a
                  href={linkUrl}
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHoveredBtn("link")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  animate={{ scale: hoveredBtn === "link" ? 1.1 : 1 }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="relative flex h-11 w-11 items-center justify-center overflow-hidden border-1 border-white rounded-xl bg-primary text-white shadow-lg"
                  aria-label="Project link"
                >
                  <motion.span
                    animate={{ height: hoveredBtn === "link" ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/25"
                  />
                  <FaLink size={16} className="relative z-10" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}