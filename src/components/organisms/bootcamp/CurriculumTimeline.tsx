"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function WeekCard({
  week,
  reverse,
  footerText
}: {
  week: any;
  reverse: boolean;
  footerText: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid lg:grid-cols-[1fr_1fr] gap-0 rounded-3xl overflow-hidden border`}
      style={{
        borderColor: week.accentBorder,
        boxShadow: "0 4px 32px rgba(0,0,0,0.06)"
      }}
    >
      {/* Image side */}
      <div
        className={`relative h-56 lg:h-auto ${reverse ? "lg:order-2" : ""}`}
        style={{ minHeight: "240px" }}
      >
        <Image
          src={week.image}
          alt={week.label}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${week.accent}99 0%, ${week.accent}44 100%)`
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <p className="text-white/50 font-extrabold leading-none text-[clamp(4rem,8vw,7rem)]">
            {week.week}
          </p>
          <p className="text-white font-extrabold text-2xl leading-tight -mt-3">
            {week.label}
          </p>
          <p className="text-white/70 text-sm mt-1">{week.tagline}</p>
        </div>
      </div>

      {/* Content side */}
      <div
        className={`bg-white p-8 flex flex-col justify-between ${reverse ? "lg:order-1" : ""}`}
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-[10px] font-semibold uppercase tracking-wide"
              style={{ color: week.accent }}
            >
              {week.sessions}
            </span>
            <div
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-extrabold"
              style={{
                borderColor: week.accentBorder,
                color: week.accent,
                background: week.accentLight
              }}
            >
              {week.week}
            </div>
          </div>
          <p className="text-sm text-[#555] leading-relaxed mb-6">
            {week.build}
          </p>
          <div className="flex flex-wrap gap-2">
            {week.tech.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-[10px] font-semibold border"
                style={{
                  borderColor: week.accentBorder,
                  color: week.accent,
                  background: week.accentLight
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-[#f5f5f5] flex items-center gap-2">
          <span className="text-xs font-bold" style={{ color: week.accent }}>
            →
          </span>
          <p className="text-xs text-[#999]">{footerText}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurriculumTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Bootcamp.curriculum");
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;
  const weeks = t.raw("weeks") as any[];

  const accentMap = ["#71286F", "#9553E9", "#c040a0", "#71286F"];
  const accentLightMap = [
    "rgba(113,40,111,0.06)",
    "rgba(149,83,233,0.06)",
    "rgba(192,64,160,0.06)",
    "rgba(113,40,111,0.05)"
  ];
  const accentBorderMap = [
    "rgba(113,40,111,0.16)",
    "rgba(149,83,233,0.16)",
    "rgba(192,64,160,0.16)",
    "rgba(113,40,111,0.14)"
  ];
  const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80",
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80"
  ];

  const weekData = weeks.map((w, i) => ({
    ...w,
    accent: accentMap[i],
    accentLight: accentLightMap[i],
    accentBorder: accentBorderMap[i],
    image: images[i]
  }));

  return (
    <section className="w-full bg-brand-surface py-24 md:py-32">
      <div className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto">
        <div
          className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-16"
          ref={ref}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-4"
            >
              {t("badge")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-extrabold tracking-tight text-[clamp(2rem,3.8vw,3rem)] text-[#1a1a2e] leading-tight"
            >
              {t("heading")}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
                }}
              >
                {t("highlight")}
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-base text-[#666] leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="px-4 py-3 rounded-xl border border-[#eddeed] bg-white"
                >
                  <p className="font-extrabold text-[#1a1a2e] text-sm">{s.v}</p>
                  <p className="text-[10px] text-[#999] uppercase tracking-wide mt-0.5 font-semibold">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
          {weekData.map((week, i) => (
            <WeekCard
              key={week.week}
              week={week}
              reverse={i % 2 !== 0}
              footerText={t("footerText")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
