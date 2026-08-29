"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import SliderDots from "@/components/ui/SliderDots";
import MarqueeIcon from "@/components/icons/MarqueeIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const CATEGORIES = ["All", "UI/UX Design", "Website", "Mobile Application"] as const;
type Category = (typeof CATEGORIES)[number];


interface Project {
  category: Category | Category[];
  title: string;
  badge: string[];
  description: string;
  image: string;
  viewUrl: string;
  linkUrl: string;
}

const PROJECTS: Project[] = [
  {
    category: "Website",
    title: "Simple Movie",
    badge: ["Web Development"],
    description:
      "A movie catalog web app with search, filtering, and detail pages, built with a focus on clean UI and fast performance.",
    image: "/images/proje.png",
    viewUrl: "https://movie-taupe-chi.vercel.app/",
    linkUrl: "https://github.com/AhmadSyaukiM/movie",
  },
  {
    category: "Website",
    title: "Foranggis",
    badge: ["Web Development"],
    description:
      "Developing a web forum for Cimanggis residents to share concerns, ideas, and local information. This team project strengthened our collaboration, communication, and task management skills.",
    image: "/images/foranggis1.png",
    viewUrl: "https://foranggis.com/",
    linkUrl: "/error-404",
  },
  {
    category: "Website",
    title: "Q-Codex",
    badge: ["Web Development"],
    description:
      "Q-Codex is a lightweight QR Code Generator designed for quick and easy sharing. Generate QR codes for URLs or Emails instantly, with no unnecessary steps.",
    image: "/images/qrify.png",
    viewUrl: "https://q-codex.vercel.app/",
    linkUrl: "https://github.com/AhmadSyaukiM/Q-CodeX-QR-Generate",
  },
  {
    category: "Website",
    title: "Rumah Laundry",
    badge: ["Web Development"],
    description:
      "Rumah Laundry is a web-based laundry management system designed to simplify the management of orders, employees, packages, and customer data in one organized platform.",
    image: "/images/laundry_app.png",
    viewUrl: "/error-404",
    linkUrl: "https://github.com/AhmadSyaukiM/rumah_laundry",
  },
  {
    category: ["UI/UX Design", "Website", "Mobile Application"], 
    title: "Ecomart",
    badge: ["UI/UX Design", "Web Development", "Mobile Application"], 
    description:
      "EcoMart is a community-based e-commerce app for residential areas, designed to make everyday grocery shopping easier and more convenient for residents through a dedicated neighborhood marketplace.",
    image: "/images/ecomart_dash.png",
    viewUrl: "https://www.figma.com/design/ZBSiPlRMsHaTs60CmDjn8s/Solo-Project?node-id=245-449&t=bFwjgvV8AXIjHnT1-1",
    linkUrl: "https://github.com/AhmadSyaukiM/EcoMart-Admin",
  },
  {
    category: ["UI/UX Design", "Website"],
    title: "Bentang Altur Teknologia",
    badge: ["UI/UX Design", "Web Development"],
    description:
      "Bentang Altur Teknologia is an interactive company profile website for an IT consulting company, featuring modern design and engaging UI/UX.",
    image: "/images/bentang.png",
    viewUrl: "https://www.figma.com/design/RGcvwaXgQHR2uWSqChAUSa/bentang-id---colaborasi?m=auto&t=i8lEYjjvyIbnVWqQ-6",
    linkUrl: "/error-404",
  },
  {
    category: "Mobile Application",
    title: "SAM",
    badge: ["Mobile Application"],
    description:
      "Sales Assistant Management System is a web-based application designed to help sales teams manage data, monitor production, and check stock efficiently, making daily sales tasks easier and more organized.",
    image: "/images/samclone.jpg",
    viewUrl: "/error-404",
    linkUrl: "https://drive.google.com/file/d/1mz4Cm4nOgptpI0445PRzjVdVuOgKx_Yy/view?usp=drive_link",
  },
  {
    category: "Mobile Application",
    title: "Activy",
    badge: ["Mobile Application"],
    description:
      "Activy is a productivity app designed to help users organize their daily schedules and tasks, making their activities more structured and helping them stay on time.",
    image: "/images/activy_app.png",
    viewUrl: "https://drive.google.com/file/d/171UjexrD1rpWNyMMSEXJX0G8q6b0ii_T/view?usp=sharing",
    linkUrl: "https://github.com/AhmadSyaukiM/Activy-Activity-Mobile-Application",
  },
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  
  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  const current = filtered[index] ?? filtered[0];

  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setIndex(0);
  };

  const goPrev = () => {
    setDir(-1);
    setIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  };

  const goNext = () => {
    setDir(1);
    setIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="project" className="relative px-6 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-27 top-0 -z-10 h-64 w-64 rounded-full bg-primary/50 blur-[90px] sm:top-[90px] sm:h-90 sm:w-90 sm:left-[-87px]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[10px] h-[1px] bg-black/30" />
      <div className="pointer-events-none absolute left-[96%] top-[10px] h-[968px] w-[1px] bg-black/30 sm:left-[85%] lg:left-[80%] sm:h-[750px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[977px] h-[1px] bg-black/30 sm:top-[760]" />

      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="text-4xl font-extrabold text-black sm:text-5xl">
            05 . <span className="text-primary">MY PROJECT</span>
          </p>
          <h2 className="mt-1 text-2xl font-extrabold uppercase text-black sm:text-3xl">
            All Of My Repo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            A collection of UI/UX, web, and mobile projects that showcase my
            skills, creativity, and passion for building meaningful digital
            experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors duration-300
                    ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-md"
                        : "border-primary bg-transparent text-black hover:bg-primary/10"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center">
          {/* wrapper card */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-64 w-80 overflow-hidden sm:h-72 sm:w-[420px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`${activeCategory}-${index}`}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 40 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <ProjectCard
                    image={current.image}
                    title={current.title}
                    viewUrl={current.viewUrl}
                    linkUrl={current.linkUrl}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <SliderDots count={filtered.length} activeIndex={index} />
          </div>

          {/* info panel */}
          <div className="flex w-full max-w-sm flex-col items-center text-center sm:items-start sm:pt-4 sm:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${index}-info`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <MarqueeIcon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold uppercase text-black sm:text-3xl">
                    {current.title}
                  </h3>
                </div>

                {/* Render badges */}
                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {current.badge.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 sm:max-w-sm">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* arrow buttons */}
            <div className="mt-6 flex items-center gap-3">
              <motion.button
                onClick={goPrev}
                aria-label="Previous project"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-black/40 text-[#404040]"
              >
                <ArrowLeftIcon className="relative z-10 h-4 w-4" />
                <span
                  className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                             bg-gradient-to-r from-transparent via-white/70 to-transparent
                             transition-transform duration-700 ease-out
                             group-hover:translate-x-full"
                />
              </motion.button>

              <motion.button
                onClick={goNext}
                aria-label="Next project"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-black/40 text-[#404040]"
              >
                <ArrowRightIcon className="relative z-10 h-4 w-4" />
                <span
                  className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                             bg-gradient-to-r from-transparent via-white/70 to-transparent
                             transition-transform duration-700 ease-out
                             group-hover:translate-x-full"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}