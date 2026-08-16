"use client";

import Image from "next/image";
import { FaRegEye, FaLink } from "react-icons/fa6";

type ProjectCardProps = {
  image: string;
  title: string;
  viewUrl?: string;
  linkUrl?: string;
};

export default function ProjectCard({ image, title, viewUrl, linkUrl }: ProjectCardProps) {
  return (
    <div className="relative h-full w-full">
      {/* layer glass belakang - lebih tebal offset-nya, border jelas, biar 2 lapis card kelihatan */}
      <div className="glass absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-white/60" />

      <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-xl">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* overlay "air naik" - height dari 0% ke 100%, dari bawah ke atas */}
        <div
          className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10
                     transition-[height] duration-500 ease-out
                     group-hover:h-full"
        />

        {/* icon-icon - muncul MENYUSUL setelah overlay mulai naik, delay sedikit */}
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {viewUrl && (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-xl bg-primary text-white opacity-0 shadow-lg
                         transition-all duration-500 ease-out delay-150
                         hover:brightness-95
                         group-hover:translate-y-0 group-hover:opacity-100"
              aria-label="View project"
            >
              <FaRegEye size={17} />
            </a>
          )}
          {linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-xl bg-primary text-white opacity-0 shadow-lg
                         transition-all duration-500 ease-out delay-[220ms]
                         hover:brightness-95
                         group-hover:translate-y-0 group-hover:opacity-100"
              aria-label="Project link"
            >
              <FaLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}