"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { EASE_TABI } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";

const PHASES = [
  { key: "onboarding", tint: "bg-tabi-pink", dot: "bg-brand-primary" },
  { key: "week1", tint: "bg-tabi-mint", dot: "bg-[#2F8F5B]" },
  { key: "week2", tint: "bg-tabi-cream", dot: "bg-[#B9772E]" },
  { key: "postProgramme", tint: "bg-tabi-lilac/60", dot: "bg-brand-primary" }
] as const;

export default function AIBusinessTimeline() {
  const t = useTranslations("AIBusiness.timeline");
  const reduced = useReducedMotion();
  const railRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="w-full bg-tabi-blush">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow={t("badge")} eyebrowTone="white" title={t("heading")} description={t("description")} />
          </div>

          {/* Numbered rail — mirrors the Featured Projects layout in the Figma */}
          <ol ref={railRef} className="relative">
            <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-brand-primary/15" />
            <motion.span
              aria-hidden
              style={reduced ? undefined : { scaleY: fill }}
              className="absolute bottom-6 left-[1.35rem] top-6 w-px origin-top bg-gradient-to-b from-brand-primary via-brand-magenta to-brand-orchid"
            />

            {PHASES.map(({ key, tint, dot }, i) => {
              const highlights = t.raw(`phases.${key}.highlights`) as string[];
              return (
                <motion.li
                  key={key}
                  className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: EASE_TABI }}
                >
                  <motion.span
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-primary shadow-[0_6px_18px_-6px_rgba(113,40,111,0.35)] ring-4 ring-tabi-blush"
                    initial={{ scale: 0.4 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    {i + 1}
                  </motion.span>

                  <article className="group flex-1 rounded-[1.75rem] bg-white p-7 ring-1 ring-brand-primary/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(113,40,111,0.5)] sm:p-8">
                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-tabi-ink ${tint}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                      {t(`phases.${key}.tag`)}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-tabi-ink sm:text-2xl">{t(`phases.${key}.title`)}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-tabi-body sm:text-base">
                      {t(`phases.${key}.description`)}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-tabi-ink">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tabi-green text-[#2F8F5B]">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
