"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ClipboardList, Clock3, LineChart, RotateCcw, ShieldCheck, Star } from "lucide-react";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { TiltCard } from "@/components/atoms/TiltCard";
import SectionHeading from "@/components/molecules/SectionHeading";
import { withBasePath } from "@/constants/paths";

const STEPS = [
  { key: "attendance", icon: CalendarCheck },
  { key: "assignments", icon: ClipboardList },
  { key: "capstone", icon: Star },
  { key: "exam", icon: Clock3 },
  { key: "score", icon: LineChart }
] as const;

export default function AIBusinessCertification() {
  const t = useTranslations("AIBusiness.certification");
  const reduced = useReducedMotion();

  return (
    <section id="certification" className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Requirements */}
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              title={
                <>
                  {t("headingLine1")} <span className="text-gradient-brand">{t("headingLine2")}</span>
                </>
              }
              description={t("description")}
              className="mb-12"
            />

            <ol className="relative">
              <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-brand-primary/10" />
              {STEPS.map(({ key, icon: Icon }, i) => (
                <motion.li
                  key={key}
                  className="group relative flex gap-5 pb-7 last:pb-0"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: EASE_TABI }}
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tabi-pink text-brand-primary ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-xs font-medium text-brand-primary/60">
                      {t("stepLabel")} 0{i + 1}
                    </p>
                    <p className="mt-0.5 font-bold text-tabi-ink">{t(`steps.${key}.title`)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-tabi-body">{t(`steps.${key}.detail`)}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Certificate */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, rotate: -6, y: 60 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: EASE_TABI }}
            >
              <TiltCard max={7} className="rounded-[2rem]">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#FFFCF8] p-3 shadow-[0_40px_80px_-40px_rgba(113,40,111,0.55)] ring-1 ring-tabi-tan/50">
                  <div className="relative rounded-[1.5rem] border-2 border-brand-primary/80 p-8 sm:p-10">
                    {/* guilloché-ish corner flourish */}
                    <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[14px] border-tabi-pink/70" />
                    <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border-[10px] border-tabi-lilac/60" />

                    <div className="relative flex items-start justify-between">
                      <div>
                        <Image src={withBasePath("/tabi-logo.svg")} alt="Tabi Academy" width={90} height={30} className="h-7 w-auto" />
                        <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-tabi-brown">
                          Tabi Academy · TEE Foundation
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-8 text-[clamp(1.5rem,3vw,2rem)] font-bold text-tabi-ink">
                      {t("certificate.subtitle")}
                    </p>
                    <p className="relative mt-6 text-xs uppercase tracking-[0.2em] text-tabi-body/70">
                      {t("certificate.awardedTo")}
                    </p>

                    {/* Name "writes" itself in */}
                    {/* The observer sits on this unclipped wrapper — Chromium treats a fully
                        clip-pathed element as zero-area, so it would never count as "in view". */}
                    <motion.div
                      className="relative mt-2"
                      initial={reduced ? "visible" : "hidden"}
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.6 }}
                    >
                      <motion.p
                        className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] italic text-brand-primary"
                        variants={{
                          hidden: { clipPath: "inset(0% 100% 0% 0%)" },
                          visible: {
                            clipPath: "inset(0% 0% 0% 0%)",
                            transition: { duration: 1.6, delay: 0.6, ease: [0.65, 0, 0.35, 1] }
                          }
                        }}
                      >
                        {t("certificate.placeholderName")}
                      </motion.p>
                      <motion.span
                        aria-hidden
                        className="mt-1 block h-px origin-left bg-gradient-to-r from-brand-primary to-transparent"
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1, transition: { duration: 1, delay: 0.4, ease: EASE_TABI } }
                        }}
                      />
                    </motion.div>

                    <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-tabi-body">{t("certificate.description")}</p>

                    <div className="relative mt-8 grid grid-cols-2 gap-3">
                      {[
                        { label: t("certificate.capstone"), weight: 60, tint: "bg-tabi-pink" },
                        { label: t("certificate.exam"), weight: 40, tint: "bg-tabi-mint" }
                      ].map((item) => (
                        <div key={item.label} className={`rounded-2xl px-4 py-3.5 ${item.tint}`}>
                          <p className="text-xs text-tabi-body">{item.label}</p>
                          <p className="text-xl font-bold text-tabi-ink">{item.weight}%</p>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/80">
                            <motion.span
                              className="block h-full rounded-full bg-brand-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.weight}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.8, ease: EASE_TABI }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative mt-8 flex items-end justify-between gap-4">
                      <p className="flex items-center gap-2 text-xs text-[#2F8F5B]">
                        <ShieldCheck size={15} />
                        {t("certificate.verification")}
                      </p>
                      {/* gold seal */}
                      <motion.div
                        className="relative flex h-20 w-20 shrink-0 items-center justify-center"
                        initial={reduced ? undefined : { scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 160, damping: 12, delay: 1.2 }}
                      >
                        <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
                          <path
                            fill="#F8C828"
                            d="M40 0l5.6 7.4 8.9-2.9 1.6 9.2 9.2 1.6-2.9 8.9L80 40l-7.4 5.6 2.9 8.9-9.2 1.6-1.6 9.2-8.9-2.9L40 80l-5.6-7.4-8.9 2.9-1.6-9.2-9.2-1.6 2.9-8.9L0 40l7.4-5.6-2.9-8.9 9.2-1.6 1.6-9.2 8.9 2.9z"
                          />
                        </svg>
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#E9A912] text-white ring-2 ring-white/60">
                          <Sparkle size={26} color="#fff" still />
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <Reveal delay={0.2} y={20}>
              <div className="flex items-start gap-4 rounded-[1.5rem] bg-tabi-cream px-6 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B9772E] shadow-sm">
                  <RotateCcw size={18} />
                </span>
                <div>
                  <p className="font-bold text-tabi-ink">{t("retake.title")}</p>
                  <p className="mt-1 text-sm leading-relaxed text-tabi-body">{t("retake.description")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
