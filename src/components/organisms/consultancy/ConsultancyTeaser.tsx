"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/atoms/Button";
import {
  APPLICATION_DEADLINE,
  SLOTS_REMAINING,
  TOTAL_SLOTS
} from "@/constants/consultancy";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

const FOCUS_AREAS = ["marketing", "finance", "tech", "strategy", "sales"] as const;

export default function ConsultancyTeaser() {
  const t = useTranslations("ConsultancyTeaser");
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const freeX = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);
  const arcRotate = useTransform(scrollYProgress, [0, 1], [-20, 25]);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary px-8 py-12 sm:px-14 sm:py-16"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_TABI }}
        >
          {/* Depth: plum → magenta wash, halftone dots, Tabi smile arcs */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(208,96,176,0.55)_0%,transparent_55%),radial-gradient(80%_80%_at_0%_100%,rgba(60,14,58,0.8)_0%,transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1.5px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]"
          />
          <motion.svg
            aria-hidden
            viewBox="0 0 200 100"
            style={reduced ? undefined : { rotate: arcRotate }}
            className="pointer-events-none absolute -right-24 -bottom-28 h-[340px] w-[680px] text-white/[0.07]"
          >
            <path d="M10 0a90 90 0 0 0 180 0" fill="none" stroke="currentColor" strokeWidth="18" />
            <path d="M55 0a45 45 0 0 0 90 0" fill="none" stroke="currentColor" strokeWidth="18" />
          </motion.svg>

          {/* Drifting outlined "FREE" */}
          <motion.span
            aria-hidden
            style={reduced ? undefined : { x: freeX }}
            className="pointer-events-none absolute -bottom-6 right-0 hidden select-none text-[11rem] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.14)] lg:block"
          >
            {t("freeText")}
          </motion.span>

          <Sparkle className="absolute right-[38%] top-10 hidden lg:block" size={34} />
          <Sparkle className="absolute right-[8%] top-[42%] hidden lg:block" size={18} delay={1.1} color="#fff" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Copy */}
            <div>
              <Reveal y={12} className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-brand-primary">
                  {t("badge")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/85 ring-1 ring-white/15">
                  <CalendarDays size={14} />
                  {t("deadlinePrefix")} {APPLICATION_DEADLINE}
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-[1.15] text-white">
                  {t("heading")}{" "}
                  <span className="bg-gradient-to-r from-[#F9D7F2] via-white to-tabi-tan bg-clip-text text-transparent">
                    {t("headingHighlight")}
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/75">
                  {t("description", { remaining: SLOTS_REMAINING, total: TOTAL_SLOTS })}
                </p>
              </Reveal>

              <Stagger className="mt-7 flex flex-wrap gap-2" stagger={0.06} delay={0.2}>
                {FOCUS_AREAS.map((area) => (
                  <StaggerItem key={area} as="span" y={10} scale={0.9}>
                    <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white ring-1 ring-white/15 transition-colors duration-300 hover:bg-white hover:text-brand-primary">
                      {t(`focusAreas.${area}`)}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* Slots meter + CTA */}
            <Reveal x={30} y={0} delay={0.2}>
              <div className="rounded-[1.75rem] bg-white/[0.08] p-7 ring-1 ring-white/15 backdrop-blur-md">
                <div className="flex items-end justify-between">
                  <p className="text-sm text-white/70">{t("slotsLabel")}</p>
                  <p className="text-3xl font-bold text-white tabular-nums">
                    {SLOTS_REMAINING}
                    <span className="text-lg text-white/50">/{TOTAL_SLOTS}</span>
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                    <motion.span
                      key={i}
                      className={`h-2.5 flex-1 rounded-full ${i < SLOTS_REMAINING ? "bg-gradient-to-r from-[#F9D7F2] to-tabi-tan" : "bg-white/15"}`}
                      initial={reduced ? undefined : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: EASE_TABI }}
                      style={{ originX: 0 }}
                    />
                  ))}
                </div>

                <Link href="/consultancy#apply" className="mt-7 block">
                  <Button variant="white" size="lg" className="w-full">
                    {t("cta").replace(/\s*→\s*$/, "")}
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                <p className="mt-3 text-center text-xs text-white/50">{t("terms")}</p>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
