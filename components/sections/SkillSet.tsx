"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPhp, SiJavascript, SiLaravel, SiBootstrap, SiTailwindcss, SiWordpress,
  SiFlutter, SiFirebase, SiPostman, SiNextdotjs, SiDotnet, SiFigma,
} from "react-icons/si";
import { FaPlus, FaMinus } from "react-icons/fa6";

import FadeIn from "@/components/ui/FadeIn";
import SkillBadge from "@/components/ui/SkillBadge";
import ScrollDownArrow from "@/components/ui/ScrollDownArrow";

const SKILLS = [
  { icon: SiPhp, label: "PHP Native", iconColor: "#ffffff", iconBg: "#777BB4" },
  { icon: SiJavascript, label: "Javascript", iconColor: "#000000", iconBg: "#F7DF1E" },
  { icon: SiLaravel, label: "Laravel", iconColor: "#ffffff", iconBg: "#FF2D20" },
  { icon: SiBootstrap, label: "Bootstrap 5", iconColor: "#ffffff", iconBg: "#7952B3" },
  { icon: SiTailwindcss, label: "Tailwind", iconColor: "#ffffff", iconBg: "#06B6D4" },
  { icon: SiWordpress, label: "Wordpress", iconColor: "#ffffff", iconBg: "#21759B" },
  { icon: SiFlutter, label: "Flutter", iconColor: "#02569B", iconBg: "#ffffff" },
  { icon: SiFirebase, label: "Firebase", iconColor: "#ffffff", iconBg: "#FFCA28" },
  { icon: SiPostman, label: "Postman", iconColor: "#ffffff", iconBg: "#FF6C37" },
  { icon: SiNextdotjs, label: "Next.js", iconColor: "#ffffff", iconBg: "#000000" },
  { icon: SiDotnet, label: ".NET", iconColor: "#ffffff", iconBg: "#512BD4" },
  { icon: SiFigma, label: "Figma", iconColor: "#ffffff", iconBg: "#000000" },
];

const MOBILE_VISIBLE_COUNT = 5;

export default function SkillSet() {
  const [expanded, setExpanded] = useState(false);
  const overflowSkills = SKILLS.slice(MOBILE_VISIBLE_COUNT);
  const hiddenCount = overflowSkills.length;

  return (
    <div className="relative mt-24 sm:mt-32">
      <div aria-hidden className="pointer-events-none absolute -right-26 top-108 -z-10 sm:-right-86 sm:top-86">
        <div className="h-32 w-32 rounded-full bg-primary/100 blur-[65px] sm:h-90 sm:w-90 sm:blur-[95px]" />
      </div>

      <div className="relative mx-auto h-8 w-full max-w-3xl">
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-[1px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <p className="mt-8 text-[38px] font-extrabold text-black sm:text-5xl">
            03 . <span className="text-primary">SKILL SET</span>
          </p>
          <h2 className="mt-1 text-3xl font-extrabold uppercase text-black sm:text-3xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            My core tech stack for crafting responsive websites, web applications,
            and mobile solutions from concept to deployment.
          </p>
        </FadeIn>

      
        <FadeIn delay={0.15}>
        
          <motion.div
            layout
            transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:hidden"
          >
            {SKILLS.slice(0, MOBILE_VISIBLE_COUNT).map((skill) => (
              <motion.div key={skill.label} layout>
                <SkillBadge {...skill} />
              </motion.div>
            ))}

            <AnimatePresence>
              {expanded &&
                overflowSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.label}
                    layout
                    initial={{ opacity: 0, scale: 0.7, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: -6 }}
                    transition={{ duration: 0.3, delay: idx * 0.03, ease: "easeOut" }}
                  >
                    <SkillBadge {...skill} />
                  </motion.div>
                ))}
            </AnimatePresence>

            {!expanded && hiddenCount > 0 && (
              <motion.button
                layout
                onClick={() => setExpanded(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-black"
              >
                <FaPlus size={10} />
                {hiddenCount} more skill
              </motion.button>
            )}

            {expanded && (
              <motion.button
                layout
                onClick={() => setExpanded(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-black"
              >
                <FaMinus size={10} />
                Show less
              </motion.button>
            )}
          </motion.div>
        </FadeIn>

        
        <FadeIn delay={0.15}>
          <div className="mt-8 hidden flex-wrap justify-center gap-3 sm:flex">
            {SKILLS.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <motion.div layout className="mt-10 flex justify-center">
          <ScrollDownArrow />
        </motion.div>
      </FadeIn>

      <div className="relative mx-auto mt-6 h-8 w-full max-w-3xl">
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-[1px]" />
      </div>
    </div>
  );
}