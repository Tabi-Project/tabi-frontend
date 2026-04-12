"use client";

import { motion, Variants } from "framer-motion";
import { Github } from "lucide-react";
import { CASE_STUDIES } from "@/constants/open-source";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CaseStudiesList() {
  return (
    <section className="bg-white">

      <style>
          {`
          .browser-container:hover .screenshot-img {
            transform: translateY(calc(-100% + 440px));
          }
          .screenshot-img {
            transition: transform 6000ms ease-in-out;
          }
        `}
      </style>
      {CASE_STUDIES.map((project, index) => (
        <article
          key={project.id}
          className={`py-24 lg:py-32 border-t border-gray-50 ${
            index % 2 !== 0 ? "bg-[#fafafa]" : "bg-white"
          }`}
        >
          <div
            className={`mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* ── LEFT: BROWSER MOCKUP ── */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="browser-container group cursor-pointer"
            >
              <div
                className="relative rounded-2xl overflow-hidden border bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/50 relative z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  <div className="flex-1 mx-4 h-5 rounded-full bg-gray-200/30" />
                </div>
                <div className="relative h-110 overflow-hidden bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="screenshot-img w-full absolute top-0 left-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: CONTENT ── */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-0.5"
                    style={{ background: project.themeColor }}
                  />
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.3em]"
                    style={{ color: project.themeColor }}
                  >
                    Project 0{index + 1}
                  </span>
                </div>

                {/* CONTRIBUTOR STACK */}
                <div className="flex -space-x-2">
                  {project.contributors?.map((person) => (
                    <motion.a
                      key={person.github}
                      href={`https://github.com/${person.github}`}
                      target="_blank"
                      whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                      className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-100 group/avatar"
                    >
                      <img
                        src={person.avatar}
                        alt={person.github}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap z-50">
                        @{person.github}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                {project.title}
              </h2>
              <p className="text-base text-[#666] leading-relaxed mb-8">
                {project.description}
              </p>

              {/* STATS / SOLUTION GRID */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      {s.label}
                    </p>
                    <p className="text-sm font-bold text-[#1a1a2e]">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* FEATURES CHIPS */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 border border-gray-200 bg-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-white shadow-lg transition-transform hover:scale-95"
                  style={{ background: project.themeColor }}
                >
                  {project.buttonText}
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-primary transition-colors"
                >
                  <Github size={18} /> Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </article>
      ))}
    </section>
  );
}
