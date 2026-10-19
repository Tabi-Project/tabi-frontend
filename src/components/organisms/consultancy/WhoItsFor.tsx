"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Parallax } from "@/components/atoms/Parallax";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";
import { withBasePath } from "@/constants/paths";

export default function WhoItsFor() {
  const t = useTranslations("Consultancy.WhoItsFor");
  const list = t.raw("list") as string[];
  const reduced = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-tabi-blush">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Copy + checklist */}
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              eyebrowTone="white"
              title={
                <>
                  {t("headingPart1")} <GradientText>{t("headingHighlight")}</GradientText>
                </>
              }
              description={t("description")}
            />

            <ul className="mt-10 flex flex-col gap-3">
              {list.map((item, i) => (
                <motion.li
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_12px_30px_-18px_rgba(113,40,111,0.5)]"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: EASE_TABI }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tabi-green text-[#2F8F5B] transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <p className="text-base text-tabi-ink">{item}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_TABI }}
            >
              <Link href="#apply">
                <Button variant="primary" size="lg">
                  {t("cta").replace(/\s*→\s*$/, "")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image stack with the Figma "stadium" mask used for testimonial portraits */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div aria-hidden className="absolute inset-[8%] rounded-full border border-dashed border-brand-primary/25 animate-spin-slow" />
            <Parallax offset={40}>
              <motion.div
                className="relative mx-auto aspect-[189/264] w-[72%] overflow-hidden rounded-full ring-[6px] ring-white shadow-[0_30px_60px_-30px_rgba(113,40,111,0.6)]"
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: EASE_TABI }}
              >
                <Image src={withBasePath("/consultancy/hero-3.jpg")} alt="" fill sizes="340px" className="object-cover" />
              </motion.div>
            </Parallax>
            <Parallax offset={-50} className="absolute -left-2 bottom-10 w-[38%]">
              <div className="aspect-square overflow-hidden rounded-full ring-[6px] ring-white shadow-xl">
                <Image src={withBasePath("/consultancy/hero-1.jpg")} alt="" width={240} height={240} className="h-full w-full object-cover" />
              </div>
            </Parallax>
            <Sparkle className="absolute right-[6%] top-[12%]" size={42} />
            <Sparkle className="absolute bottom-[8%] right-[18%]" size={20} delay={1.2} color="var(--color-brand-orchid)" />
          </div>
        </div>
      </div>
    </section>
  );
}
