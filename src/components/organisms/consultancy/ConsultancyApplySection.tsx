"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Mail } from "lucide-react";
import ConsultancyForm from "@/components/molecules/ConsultancyForm";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";
import { APPLICATION_DEADLINE, SLOTS_REMAINING, TOTAL_SLOTS } from "@/constants/consultancy";

export default function ConsultancyApplySection() {
  const t = useTranslations("Consultancy.ApplySection");
  const reduced = useReducedMotion();

  return (
    <section className="w-full scroll-mt-24 bg-white" id="apply">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Copy */}
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={t("badge")} title={t("heading")} description={t("description")} />

            <Reveal delay={0.15} className="mt-8 space-y-3">
              <div className="flex items-center gap-4 rounded-[1.5rem] bg-tabi-cream p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#B9772E] shadow-sm">
                  <CalendarDays size={18} />
                </span>
                <div>
                  <p className="text-xs text-tabi-body">{t("deadlineLabel")}</p>
                  <p className="font-bold text-tabi-ink">{APPLICATION_DEADLINE}</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-tabi-pink p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-tabi-ink">
                    {t("slotsLabel", { remaining: SLOTS_REMAINING, total: TOTAL_SLOTS })}
                  </p>
                </div>
                <div className="mt-3 flex gap-2">
                  {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                    <motion.span
                      key={i}
                      className={`h-2.5 flex-1 rounded-full ${i < SLOTS_REMAINING ? "bg-brand-primary" : "bg-white"}`}
                      style={{ originX: 0 }}
                      initial={reduced ? undefined : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: EASE_TABI }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] bg-tabi-card/70 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-bold text-tabi-ink">{t("questionsTitle")}</p>
                  <p className="text-sm text-tabi-body">{t("questionsText")}</p>
                </div>
              </div>
            </Reveal>

            <p className="mt-6 text-xs text-tabi-body/70">{t("terms")}</p>
          </div>

          {/* Form */}
          <Reveal y={40} delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] bg-tabi-blush p-3 ring-1 ring-brand-primary/10 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <ConsultancyForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
