"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUpFromBracket, FaCircleCheck } from "react-icons/fa6";

const TAGS = ["UI/UX Design", "Full Stack Developer", "Mobile Dev"];

export default function ProfileCard() {
  return (
    <div className="relative">
      {/* circle gradient primary di belakang - full circle, tidak lagi bisa kepotong */}
      <div
        aria-hidden
        className="absolute -bottom-0 left-1/2 -z-10 h-72 w-72 -translate-x-1/5 rounded-full bg-primary/100 blur-[80px]"
      />

      <svg
        aria-hidden
        viewBox="0 0 120 120"
        className="pointer-events-none absolute -left-10 -top-10 -z-10 h-28 w-28"
      >
        <circle cx="60" cy="60" r="48" fill="none" stroke="black" strokeWidth="7" strokeDasharray="230 80" strokeLinecap="round" />
      </svg>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass w-72 rounded-[2rem] p-3 sm:w-80"
      >
        <div className="overflow-hidden rounded-[1.6rem] bg-white p-2.5 shadow-sm">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/profile.png"
              alt="Ahmad Syauki Mubarok"
              width={320}
              height={260}
              className="h-56 w-full object-cover"
            />

            {/* badge - lebih gelap, bukan glass terang lagi */}
            <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available For Work
            </div>
          </div>

          <div className="p-3 pt-4">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-black">Ahmad Syauki Mubarokq</h3>
              <FaCircleCheck className="text-black" size={16} />
            </div>
            <p className="text-sm text-gray-500">Junior Web Developer</p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {TAGS.map((tag) => (
                <span key={tag} className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-gray-600">
              I&apos;m an IT student at Universitas Indraprasta PGRI, passionate about
              technology and software development. I love exploring new ideas and
              turning them into useful digital products.
            </p>

            {/* Download CV - bump lebih halus + shine sweep seperti button Contact */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative mt-4 flex w-full items-center justify-center gap-2
                         overflow-hidden rounded-full bg-black py-3 text-sm font-semibold
                         text-white shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <FaArrowUpFromBracket size={12} />
              </span>

              <span
                className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                           bg-gradient-to-r from-transparent via-white/25 to-transparent
                           transition-transform duration-700 ease-out
                           group-hover:translate-x-full"
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}