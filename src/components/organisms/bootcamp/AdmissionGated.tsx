"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, X } from "lucide-react";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";
import { Button } from "@/components/atoms/Button";
import { CountUp } from "@/components/atoms/CountUp";
import { GradientText } from "@/components/atoms/GradientText";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const STEP_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function AdmissionGated() {
  const t = useTranslations("Bootcamp.admission");
  const qualifies = t.raw("qualifies") as string[];
  const doesntQualify = t.raw("doesntQualify") as string[];
  const pills = t.raw("pills") as string[];
  const process = t.raw("process") as Array<{ step: string; title: string; desc: string }>;
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="w-full overflow-hidden bg-tabi-blush py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              eyebrowTone="white"
              title={
                <>
                  {t("heading")} <GradientText>{t("highlight")}</GradientText>
                </>
              }
              description={t("description")}
            />
            <Reveal delay={0.2} className="mt-8">
              <div className="flex items-start gap-4 rounded-[1.5rem] bg-white p-5">
                <span className="mt-0.5 shrink-0">
                  <Sparkle size={26} still />
                </span>
                <div>
                  <p className="font-bold text-tabi-ink">{t("goldenRuleTitle")}</p>
                  <p className="mt-1 text-sm leading-relaxed text-tabi-body">{t("goldenRuleText")}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Parallax offset={30}>
            <Reveal scale={0.95}>
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] border-[3px] border-brand-primary">
                <Image
                  src="https://images.unsplash.com/photo-1637979911022-792ba47b8098?w=900"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 p-6">
                  {stats.map((s) => (
                    <div key={s.l} className="rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-md">
                      <p className="text-2xl font-bold leading-none text-white">
                        <CountUp value={s.v} />
                      </p>
                      <p className="mt-1.5 text-xs text-white/75">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>

        {/* Qualify / doesn't */}
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <Reveal x={-24} y={0}>
            <div className="h-full rounded-[2rem] bg-white p-7 sm:p-8">
              <p className="mb-5 text-sm font-medium text-[#2F8F5B]">{t("qualifyTitle")}</p>
              <ul className="space-y-4">
                {qualifies.map((q, i) => (
                  <motion.li
                    key={q}
                    className="flex items-start gap-3"
                    initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE_TABI }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tabi-green text-[#2F8F5B]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <p className="text-base leading-relaxed text-tabi-ink">{q}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal x={24} y={0}>
            <div className="h-full rounded-[2rem] bg-white p-7 sm:p-8">
              <p className="mb-5 text-sm font-medium text-[#C2416B]">{t("doesntQualifyTitle")}</p>
              <ul className="space-y-4">
                {doesntQualify.map((q, i) => (
                  <motion.li
                    key={q}
                    className="flex items-start gap-3"
                    initial={reduced ? { opacity: 0 } : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE_TABI }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FDE8EE] text-[#C2416B]">
                      <X size={13} strokeWidth={3} />
                    </span>
                    <p className="text-base leading-relaxed text-tabi-body">{q}</p>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-primary/10 pt-5 text-sm leading-relaxed text-tabi-body">
                {t("doesntQualifyFooter")}
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mb-16 flex flex-wrap gap-2" stagger={0.05}>
          {pills.map((p) => (
            <StaggerItem key={p} as="span" y={10} scale={0.9}>
              <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-tabi-body">{p}</span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Process */}
        <Reveal>
          <h3 className="mb-8 text-2xl font-bold text-tabi-ink">{t("processTitle")}</h3>
        </Reveal>
        <div className="relative">
          <motion.span
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-brand-primary via-brand-orchid to-tabi-tan lg:block"
            initial={reduced ? undefined : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: EASE_TABI }}
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {process.map((p, i) => (
              <StaggerItem key={p.step} className="h-full" hoverLift={6}>
                <div className="relative h-full">
                  <span className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white ring-[6px] ring-tabi-blush">
                    {p.step}
                  </span>
                  <div className={`rounded-[1.5rem] p-6 ${STEP_TINTS[i % STEP_TINTS.length]}`}>
                    <h4 className="font-bold text-tabi-ink">{p.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-tabi-body">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-14 text-center" y={16}>
          <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
            {t("ctaButton")}
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Reveal>
      </div>

      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
