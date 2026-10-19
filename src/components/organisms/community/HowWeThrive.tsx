"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Code2, HeartHandshake, Users } from "lucide-react";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";

const ICONS = [Code2, Users, HeartHandshake];
const TINTS = [
  { card: "bg-tabi-pink", ink: "text-brand-primary" },
  { card: "bg-tabi-mint", ink: "text-[#2F8F5B]" },
  { card: "bg-tabi-cream", ink: "text-[#B9772E]" }
];

/** A card that pins, then shrinks back as the next card slides over it. */
function StackCard({
  index,
  total,
  progress,
  children
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index - 1) * 0.05]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, index < total - 1 ? 0.06 : 0]);

  return (
    <div className="sticky" style={{ top: `calc(var(--nav-height, 80px) + 2rem + ${index * 28}px)` }}>
      <motion.div style={reduced ? undefined : { scale }} className="origin-top">
        {children}
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-tabi-ink"
            style={{ opacity: dim }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default function HowWeThrive() {
  const t = useTranslations("Community.howWeThrive");
  const pillars = t.raw("pillars") as Array<{ title: string; desc: string }>;
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow={t("badge")}
              title={
                <>
                  {t("headingPart1")} <GradientText>{t("headingHighlight")}</GradientText>
                </>
              }
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md border-l-2 border-brand-primary/30 pl-6 text-lg leading-[1.8] text-tabi-body">
                {t("description")}
              </p>
            </Reveal>
          </div>

          <div ref={stackRef} className="relative flex flex-col gap-8 pb-10">
            {pillars.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              const tint = TINTS[i % TINTS.length];
              return (
                <StackCard key={item.title} index={i} total={pillars.length} progress={scrollYProgress}>
                  <article
                    className={`group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 shadow-[0_30px_60px_-40px_rgba(113,40,111,0.5)] sm:p-10 ${tint.card}`}
                  >
                    <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[8rem] font-bold leading-none text-black/[0.05]">
                      0{i + 1}
                    </span>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110 ${tint.ink}`}>
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                    <div className="mt-12">
                      <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-tabi-ink">{item.title}</h3>
                      <p className="mt-3 max-w-lg text-base leading-[1.8] text-tabi-body">{item.desc}</p>
                      <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${tint.ink}`}>
                        {t("exploreText")}
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </article>
                </StackCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
