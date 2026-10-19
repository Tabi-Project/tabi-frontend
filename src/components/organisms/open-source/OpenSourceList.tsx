"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

const STAT_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function OpenSourceList() {
  const t = useTranslations("OpenSource.list");
  const reduced = useReducedMotion();
  const projects = t.raw("items") as Array<{
    id: string;
    title: string;
    tagline?: string;
    description: string;
    impact?: string;
    image: string;
    themeColor: string;
    features: string[];
    stats: { label: string; value: string }[];
    buttonText: string;
    contributors?: { github: string; avatar: string }[];
    links: { live: string; github: string };
  }>;

  return (
    <section className="overflow-x-clip bg-white">
      <style>{`
        .browser-container:hover .screenshot-img {
          transform: translateY(calc(-100% + 440px));
        }
        .screenshot-img {
          transition: transform 6000ms ease-in-out;
        }
      `}</style>

      {projects.map((project, index) => {
        const flip = index % 2 !== 0;
        return (
          <article key={project.id} className={`py-20 lg:py-28 ${flip ? "bg-tabi-blush" : "bg-white"}`}>
            <div className="mx-auto grid max-w-350 grid-cols-1 items-center gap-14 px-6 sm:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
              {/* Browser mockup — scrolls through the screenshot on hover */}
              <Parallax offset={30} className={flip ? "lg:order-2" : ""}>
                <motion.div
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 50, rotate: flip ? 2 : -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: EASE_TABI }}
                  className="browser-container group relative cursor-pointer"
                >
                  <Sparkle className={`absolute -top-5 z-10 ${flip ? "-left-4" : "-right-4"}`} size={40} />
                  <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-brand-primary bg-white shadow-[0_40px_80px_-40px_rgba(113,40,111,0.55)] transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative z-20 flex items-center gap-2 border-b border-brand-primary/10 bg-tabi-blush px-5 py-3.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F3A6D9]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-tabi-tan" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9FD8B0]" />
                      <span className="mx-4 h-5 flex-1 rounded-full bg-white" />
                    </div>
                    <div className="relative h-110 overflow-hidden bg-tabi-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.image} alt={project.title} className="screenshot-img absolute left-0 top-0 w-full" />
                    </div>
                  </div>
                </motion.div>
              </Parallax>

              {/* Content */}
              <div className={flip ? "lg:order-1" : ""}>
                <Reveal y={12} className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                    style={{ background: `${project.themeColor}14`, color: project.themeColor }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.themeColor }} />
                    {t("projectLabel", { number: String(index + 1).padStart(2, "0") })}
                  </span>

                  <div className="flex -space-x-2">
                    {project.contributors?.map((person, i) => (
                      <motion.a
                        key={`${person.github}-${i}`}
                        href={`https://github.com/${person.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                        className="group/avatar relative h-9 w-9 rounded-full border-2 border-white bg-tabi-card"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={person.avatar} alt={person.github} className="h-full w-full rounded-full object-cover" />
                        <span className="absolute -top-8 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-tabi-ink px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover/avatar:opacity-100">
                          @{person.github}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-tabi-ink">{project.title}</h2>
                  {project.tagline && <p className="mt-2 text-base font-medium text-brand-primary">{project.tagline}</p>}
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-base leading-[1.8] text-tabi-body">{project.description}</p>
                </Reveal>

                <Stagger className="mt-8 grid grid-cols-2 gap-3" stagger={0.08} delay={0.1}>
                  {project.stats.map((s, i) => (
                    <StaggerItem key={s.label}>
                      <div className={`rounded-2xl p-4 ${STAT_TINTS[i % STAT_TINTS.length]}`}>
                        <p className="text-xs text-tabi-body">{s.label}</p>
                        <p className="mt-0.5 font-bold text-tabi-ink">{s.value}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <Stagger className="mt-6 flex flex-wrap gap-2" stagger={0.05} delay={0.2}>
                  {project.features.map((feature) => (
                    <StaggerItem key={feature} as="span" y={8} scale={0.9}>
                      <span className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-medium text-tabi-ink ${flip ? "bg-white" : "bg-tabi-card"}`}>
                        {feature}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>

                <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ background: project.themeColor }}
                  >
                    {project.buttonText}
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-tabi-body transition-colors hover:text-brand-primary"
                  >
                    <Github size={18} /> {t("docLink")}
                  </a>
                </Reveal>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
