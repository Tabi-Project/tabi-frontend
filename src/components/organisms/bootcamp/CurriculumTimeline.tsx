"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";

type Week = {
  week: string;
  label: string;
  tagline: string;
  sessions: string;
  build: string;
  tech: string[];
};

const IMAGES = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80"
];

const TINTS = [
  { chip: "bg-tabi-pink text-brand-primary", dot: "bg-brand-primary" },
  { chip: "bg-tabi-mint text-[#2F8F5B]", dot: "bg-[#3CB371]" },
  { chip: "bg-tabi-cream text-[#9A5B1E]", dot: "bg-[#D9932F]" },
  { chip: "bg-tabi-lilac/70 text-brand-primary", dot: "bg-tabi-mauve" }
];

function WeekCard({ week, index, footerText }: { week: Week; index: number; footerText: string }) {
  const reduced = useReducedMotion();
  const tint = TINTS[index % TINTS.length];

  return (
    <motion.li
      className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE_TABI }}
    >
      <motion.span
        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-primary shadow-[0_6px_18px_-6px_rgba(113,40,111,0.35)] ring-4 ring-tabi-lilac/60 sm:h-12 sm:w-12"
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
      >
        {index + 1}
      </motion.span>

      <article className="group grid flex-1 overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_50px_-40px_rgba(113,40,111,0.6)] md:grid-cols-[0.9fr_1.1fr]">
        {/* Image — wipes open from the left as the card arrives */}
        <motion.div
          className="relative min-h-[220px] overflow-hidden"
          initial={reduced ? undefined : { clipPath: "inset(0% 100% 0% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
        >
          <Image
            src={IMAGES[index % IMAGES.length]}
            alt={week.label}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-brand-primary/35 to-brand-primary/10 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
            <p className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none text-white/35">{week.week}</p>
            <p className="-mt-2 text-2xl font-bold leading-tight">{week.label}</p>
            <p className="mt-1 text-sm text-white/75">{week.tagline}</p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 sm:p-8">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${tint.chip}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${tint.dot}`} />
              {week.sessions}
            </span>
            <p className="mt-5 text-base leading-[1.8] text-tabi-body">{week.build}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {week.tech.map((tech, i) => (
                <motion.li
                  key={tech}
                  className="rounded-full bg-tabi-card px-3 py-1.5 text-xs font-medium text-tabi-ink"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: EASE_TABI }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
          <p className="mt-8 flex items-center gap-2 border-t border-brand-primary/10 pt-5 text-sm text-tabi-body">
            <ArrowRight size={15} className="text-brand-primary transition-transform duration-300 group-hover:translate-x-1" />
            {footerText}
          </p>
        </div>
      </article>
    </motion.li>
  );
}

export default function CurriculumTimeline() {
  const t = useTranslations("Bootcamp.curriculum");
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;
  const weeks = t.raw("weeks") as Week[];
  const reduced = useReducedMotion();
  const railRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="curriculum" className="w-full scroll-mt-20 bg-tabi-lilac/50 py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-14 grid items-end gap-10 lg:mb-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t("badge")}
            eyebrowTone="white"
            title={
              <>
                {t("heading")} <GradientText>{t("highlight")}</GradientText>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="text-base leading-[1.8] text-tabi-body">{t("description")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div key={s.l} className="rounded-2xl bg-white px-4 py-3">
                  <p className="font-bold text-tabi-ink">{s.v}</p>
                  <p className="mt-0.5 text-xs text-tabi-body">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tabi-pink text-brand-primary">
                <Handshake size={18} />
              </span>
              <div>
                <p className="text-xs text-tabi-body">{t("implementationPartnerTitle")}</p>
                <p className="text-sm leading-relaxed text-tabi-ink">
                  {t.rich("implementationPartnerDesc", {
                    brand: (chunks) => <span className="font-bold text-brand-primary">{chunks}</span>
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <ol ref={railRef} className="relative">
          <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-brand-primary/15 sm:left-6" />
          <motion.span
            aria-hidden
            style={reduced ? undefined : { scaleY: fill }}
            className="absolute bottom-6 left-[1.35rem] top-6 w-px origin-top bg-gradient-to-b from-brand-primary via-brand-magenta to-brand-orchid sm:left-6"
          />
          {weeks.map((week, i) => (
            <WeekCard key={week.week} week={week} index={i} footerText={t("footerText")} />
          ))}
        </ol>
      </div>
    </section>
  );
}
