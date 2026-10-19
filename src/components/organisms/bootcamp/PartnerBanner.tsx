"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { withBasePath } from "@/constants/paths";
import { CountUp } from "@/components/atoms/CountUp";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const STAT_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream"];

export default function PartnerBanner() {
  const t = useTranslations("Bootcamp.partnerBanner");
  const benefits = t.raw("benefits") as string[];
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;
  const reduced = useReducedMotion();

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Reveal y={40} scale={0.97}>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-tabi-blush lg:grid-cols-[1fr_1fr]">
            {/* Image panel with the partnership lock-up */}
            <div className="relative min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-magenta/70" />
              <Sparkle className="absolute left-8 top-8" size={30} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div className="flex items-center gap-5 rounded-full bg-white px-7 py-4 shadow-xl">
                  <motion.div
                    className="relative h-8 w-24"
                    initial={reduced ? undefined : { x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: EASE_TABI }}
                  >
                    <Image src={withBasePath("/tabi-logo.svg")} alt="Tabi Academy" fill className="object-contain" />
                  </motion.div>
                  <motion.span
                    className="text-lg font-bold text-brand-primary"
                    initial={reduced ? undefined : { scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.8 }}
                  >
                    ×
                  </motion.span>
                  <motion.div
                    className="relative h-10 w-28"
                    initial={reduced ? undefined : { x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: EASE_TABI }}
                  >
                    <Image src="/partners/sailscast-full-rm.png" alt="Sailscasts" fill className="object-contain" />
                  </motion.div>
                </div>
                <p className="max-w-xs text-center text-sm text-white/85">{t("overlayText")}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <SectionHeading
                eyebrow={t("badge")}
                eyebrowTone="white"
                size="md"
                title={
                  <>
                    {t("heading")} <GradientText>{t("highlight")}</GradientText>
                  </>
                }
                description={t.rich("description", { strong: (chunks) => <strong className="text-tabi-ink">{chunks}</strong> })}
              />

              <ul className="mt-8 space-y-3">
                {benefits.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE_TABI }}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <p className="text-base text-tabi-ink">{item}</p>
                  </motion.li>
                ))}
              </ul>

              <Stagger className="mt-8 grid grid-cols-3 gap-3" stagger={0.08} delay={0.2}>
                {stats.map((s, i) => (
                  <StaggerItem key={s.l}>
                    <div className={`rounded-2xl px-3 py-4 text-center ${STAT_TINTS[i % STAT_TINTS.length]}`}>
                      <p className="text-lg font-bold text-tabi-ink">
                        <CountUp value={s.v} />
                      </p>
                      <p className="mt-0.5 text-xs text-tabi-body">{s.l}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
