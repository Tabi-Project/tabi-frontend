"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function BootcampWhy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Bootcamp.whyThisExists");
  const problems = t.raw("problems") as string[];
  const solutions = t.raw("solutions") as string[];

  return (
    <section className="w-full bg-[#fdf7ff] relative overflow-hidden py-24 md:py-32">
      {/* ... stripe accent unchanged ... */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #71286F, #71286F 2px, transparent 2px, transparent 24px)"
        }}
      />
      <div
        className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto relative z-10"
        ref={ref}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-5"
        >
          {t("badge")}
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight text-[#1a1a2e] leading-tight mb-6"
            >
              {t("heading")}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
                }}
              >
                {t("headingHighlight")}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="text-base text-[#666] leading-relaxed mb-8 max-w-sm"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "280px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80"
                alt="Developer learning"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,46,0.85) 0%, transparent 60%)"
                }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                {/* Quote text with <br/> handled by t.rich */}
                <p className="text-white font-bold text-lg leading-tight">
                  {t.rich("quoteText", {
                    br: () => <br />
                  })}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {t("quoteCaption")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="rounded-2xl border border-red-100 bg-white p-7"
              style={{ boxShadow: "0 4px 24px rgba(239,68,68,0.06)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-5">
                {t("problemCardTitle")}
              </p>
              <div className="space-y-4">
                {problems.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.36 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-400 shrink-0 mt-0.5 text-sm">
                      ✕
                    </span>
                    <p className="text-sm text-[#555] leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.38 }}
              className="rounded-2xl border p-7"
              style={{
                borderColor: "rgba(113,40,111,0.18)",
                background:
                  "linear-gradient(135deg, rgba(113,40,111,0.04), rgba(192,64,160,0.04))",
                boxShadow: "0 4px 24px rgba(113,40,111,0.07)"
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-5">
                {t("solutionCardTitle")}
              </p>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.46 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="shrink-0 mt-0.5 text-sm font-bold text-brand-primary">
                      ✓
                    </span>
                    <p className="text-sm text-[#555] leading-relaxed">{s}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="rounded-xl px-5 py-3 flex items-center gap-3"
              style={{
                background: "rgba(113,40,111,0.06)",
                border: "1px solid rgba(113,40,111,0.12)"
              }}
            >
              <span className="text-xl text-brand-primary">✦</span>
              {/* bottomQuote with <strong> handled by t.rich */}
              <p className="text-sm text-[#444] leading-relaxed">
                {t.rich("bottomQuote", {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
