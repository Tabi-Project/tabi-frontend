"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { CountUp } from "@/components/atoms/CountUp";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";
import PaymentMethodModal from "@/components/molecules/PaymentMethodModal";

/** Circular text that slowly rotates — a "sale" stamp. */
function Stamp({ text }: { text: string }) {
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="stamp-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-white text-[11px] font-bold uppercase tracking-[0.18em]">
          <textPath href="#stamp-circle">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute inset-[26%] flex items-center justify-center rounded-full bg-white text-xl font-bold text-brand-primary">
        −50%
      </span>
    </div>
  );
}

export default function AIBusinessPricing() {
  const t = useTranslations("AIBusiness.pricing");
  const [showModal, setShowModal] = useState(false);
  const reduced = useReducedMotion();
  const features = t.raw("features") as string[];

  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-tabi-blush py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-orchid/15 blur-[100px]" />
      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <SectionHeading
          align="center"
          eyebrow={t("badge")}
          eyebrowTone="white"
          title={t("heading")}
          description={t("description")}
          className="mb-14 lg:mb-16"
        />

        <Reveal scale={0.96} y={40}>
          <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_90px_-50px_rgba(113,40,111,0.6)] md:grid-cols-[1.25fr_1fr]">
            {/* Price side */}
            <div className="relative p-8 sm:p-12">
              <p className="text-sm font-medium text-tabi-body">{t("tuitionLabel")}</p>
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none text-tabi-ink">
                  <CountUp value="₦50,000" duration={1.4} />
                </span>
                <span className="relative mb-2 text-xl font-medium text-tabi-body/50">
                  ₦100,000
                  <motion.span
                    aria-hidden
                    className="absolute left-0 right-0 top-1/2 h-[2px] origin-left -rotate-6 rounded-full bg-brand-orchid"
                    initial={reduced ? undefined : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: EASE_TABI }}
                  />
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {features.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-base text-tabi-ink"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE_TABI }}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tabi-green text-[#2F8F5B]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button variant="primary" size="lg" className="mt-10 w-full" onClick={() => setShowModal(true)}>
                {t("cta")}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>

            {/* Perforated divider, like a ticket stub */}
            <div aria-hidden className="pointer-events-none absolute bottom-6 top-6 hidden border-l-2 border-dashed border-brand-primary/15 md:left-[55.5%] md:block" />
            <span aria-hidden className="absolute -top-5 hidden h-10 w-10 -translate-x-1/2 rounded-full bg-tabi-blush md:left-[55.5%] md:block" />
            <span aria-hidden className="absolute -bottom-5 hidden h-10 w-10 -translate-x-1/2 rounded-full bg-tabi-blush md:left-[55.5%] md:block" />

            {/* International side */}
            <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-brand-primary p-8 text-white sm:p-12">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,rgba(208,96,176,0.5)_0%,transparent_60%)]" />
              <Sparkle className="absolute bottom-8 right-8" size={26} />
              <div className="relative flex justify-end">
                <Stamp text={t("stampText")} />
              </div>
              <div className="relative">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <Globe size={20} />
                </span>
                <h4 className="text-xl font-bold">{t("international.heading")}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{t("international.description")}</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="group mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-white"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                    {t("international.link").replace(/\s*→\s*$/, "")}
                  </span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {showModal && <PaymentMethodModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
