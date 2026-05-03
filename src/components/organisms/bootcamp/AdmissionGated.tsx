"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AdmissionGated() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Bootcamp.admission");
  const qualifies = t.raw("qualifies") as string[];
  const doesntQualify = t.raw("doesntQualify") as string[];
  const pills = t.raw("pills") as string[];
  const process = t.raw("process") as Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;

  return (
    <section className="w-full bg-[#fdf7ff] py-24 md:py-32 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto">
        {/* Header row */}
        <div
          className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start mb-16"
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
              className="font-extrabold tracking-tight text-[clamp(2rem,3.8vw,3rem)] text-[#1a1a2e] leading-tight mb-6"
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
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="text-base text-[#666] leading-relaxed mb-7"
            >
              {t("description")}
            </motion.p>
            {/* Golden rule */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.26 }}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(113,40,111,0.06), rgba(192,64,160,0.04))",
                border: "1px solid rgba(113,40,111,0.15)"
              }}
            >
              <span className="text-2xl shrink-0 text-brand-primary">✦</span>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm mb-1">
                  {t("goldenRuleTitle")}
                </p>
                <p className="text-sm text-[#555] leading-relaxed">
                  {t("goldenRuleText")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: image with overlaid stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "360px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80"
              alt="Developer working focused"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(113,40,111,0.75) 0%, rgba(192,64,160,0.5) 100%)"
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.l}
                    className="bg-white/15 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <p className="text-white font-extrabold text-xl leading-none">
                      {s.v}
                    </p>
                    <p className="text-white/70 text-[10px] mt-1 uppercase tracking-widest font-semibold">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Qualify/Doesn't grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="rounded-2xl border border-brand-primary/30 bg-white p-7"
            style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.06)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-5">
              {t("qualifyTitle")}
            </p>
            <div className="space-y-4">
              {qualifies.map((q, i) => (
                <motion.div
                  key={q}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-primary text-sm shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-sm text-[#555] leading-relaxed">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-red-100 bg-white p-7"
            style={{ boxShadow: "0 4px 20px rgba(239,68,68,0.05)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-5">
              {t("doesntQualifyTitle")}
            </p>
            <div className="space-y-4">
              {doesntQualify.map((q, i) => (
                <motion.div
                  key={q}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-400 text-sm shrink-0 mt-0.5">
                    ✕
                  </span>
                  <p className="text-sm text-[#555] leading-relaxed">{q}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[#fef2f2]">
              <p className="text-xs text-[#999] leading-relaxed">
                {t("doesntQualifyFooter")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-2 mb-14"
        >
          {pills.map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full border border-[#f0e8f0] text-xs font-medium text-[#888] bg-white"
            >
              {p}
            </span>
          ))}
        </motion.div>

        {/* Process steps */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="text-[#1a1a2e] font-extrabold text-xl mb-7"
        >
          {t("processTitle")}
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.72 + i * 0.09 }}
              className="rounded-xl border border-[#f0e8f0] bg-white p-5 hover:shadow-sm hover:border-brand-primary/20 transition-all duration-300"
            >
              <p className="text-xs font-semibold text-brand-primary mb-3 tracking-widest">
                {p.step}
              </p>
              <h4 className="text-[#1a1a2e] font-bold text-sm mb-2">
                {p.title}
              </h4>
              <p className="text-xs text-[#888] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
