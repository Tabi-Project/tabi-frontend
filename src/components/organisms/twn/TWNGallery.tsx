"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function TWNGallery() {
  const t = useTranslations("TWN.gallery");
  const locale = useLocale();
  const reduced = useReducedMotion();
  const galleryUrl = `/${locale}/community?tab=meetup#community-gallery`;

  const tile = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 50, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.9, delay, ease: EASE_TABI }
  });

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-xl">
            <h3 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-tabi-ink">
              {t("headingPart1")} <span className="font-serif font-normal italic text-gradient-brand">{t("headingHighlight")}</span>
            </h3>
            <p className="mt-4 text-lg leading-[1.8] text-tabi-body">{t("description")}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href={galleryUrl}
              className="group inline-flex items-center gap-3 rounded-full bg-tabi-pink px-7 py-4 text-sm font-bold text-brand-primary transition-colors duration-500 hover:bg-brand-primary hover:text-white"
            >
              {t("cta")}
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </Reveal>
        </div>

        <div className="grid h-auto grid-cols-12 gap-5 md:h-150">
          <motion.div {...tile(0)} className="group relative col-span-12 h-80 overflow-hidden rounded-[2.5rem] md:col-span-8 md:h-full">
            <Parallax offset={-30} className="absolute inset-[-8%_0]">
              <Image
                src="/events/enugu-group-shot.jpeg"
                alt="Networking Session"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </Parallax>
            <Sparkle className="absolute left-6 top-6" size={34} />
          </motion.div>
          <div className="col-span-12 grid grid-rows-2 gap-5 md:col-span-4">
            <motion.div {...tile(0.12)} className="group relative h-60 overflow-hidden rounded-[2rem] md:h-auto">
              <Image
                src="/events/tw-side.jpeg"
                alt="Collaborative Session"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            <motion.div {...tile(0.24)} className="h-60 md:h-auto">
              <Link
                href={galleryUrl}
                className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-brand-primary p-10 text-center text-white"
              >
                <Image
                  src="/events/tabi-archive-preview.png"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:scale-110">
                    <Users size={24} />
                  </span>
                  <h4 className="text-xl font-bold">{t("archiveTitle")}</h4>
                  <p className="mt-1 text-sm text-white/70">{t("archiveSubtext")}</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
