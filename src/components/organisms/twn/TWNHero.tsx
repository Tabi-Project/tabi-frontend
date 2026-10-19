"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe, MoveRight, Users } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { directoryMembers } from "@/constants/directory";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_TABI }
});

export const TWNHero = () => {
  const t = useTranslations("TWN.hero");
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [1.5, -2]);

  const scrollToPhilosophy = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredMembers = directoryMembers.slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-tabi-blush"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#71286F_1px,transparent_1px),linear-gradient(90deg,#71286F_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_30%_40%,#000,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-orchid/20 blur-[90px] animate-blob" />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid items-center gap-14 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <motion.div {...rise(0)} className="mb-8 flex flex-wrap items-center gap-3">
              <Eyebrow tone="white">{t("badge")}</Eyebrow>
              <span className="flex items-center gap-1.5 text-sm text-tabi-body">
                <Globe size={14} className="text-brand-primary" /> {t("panAfrican")}
              </span>
            </motion.div>

            <h1 className="text-[clamp(3rem,7vw,5rem)] font-bold leading-[0.98] tracking-[-0.02em] text-tabi-ink">
              <motion.span {...rise(0.08)} className="block">
                {t("headlineLine1")}
              </motion.span>
              <motion.span {...rise(0.16)} className="block">
                {t("headlineLine2")}
              </motion.span>
              <motion.span {...rise(0.24)} className="relative mt-1 inline-block">
                <span className="relative z-10">{t("headlineHighlight")}</span>
                {/* Hand-drawn circle, as on the event flyers */}
                <svg
                  viewBox="0 0 280 100"
                  className="pointer-events-none absolute left-[-10%] top-1/2 h-[200%] w-[140%] -translate-y-1/2 text-brand-orchid/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
                    d="M10,50 C10,10 270,10 270,50 C270,90 10,90 15,55"
                  />
                </svg>
                <Sparkle className="absolute -right-12 -top-6" size={34} />
              </motion.span>
            </h1>

            <motion.p {...rise(0.32)} className="mt-9 max-w-lg text-lg leading-[1.8] text-tabi-body">
              {t("description")}
            </motion.p>

            <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" onClick={scrollToPhilosophy}>
                {t("ctaLearnMore")}
              </Button>
              <Link href="/resources/blog/tabi-women-network-debuts-pan-african-series-in-enugu">
                <Button variant="outline" size="lg" className="bg-white">
                  {t("ctaReport")}
                  <MoveRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div {...rise(0.48)} className="mt-10 flex items-center gap-4 text-sm text-tabi-body">
              <div className="flex -space-x-3">
                {featuredMembers.map((member, i) => (
                  <motion.div
                    key={member.name}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-tabi-lilac"
                    initial={{ opacity: 0, x: -12, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease: EASE_TABI }}
                  >
                    <Image src={member.image} alt={member.name} fill sizes="44px" className="object-cover" />
                  </motion.div>
                ))}
              </div>
              <p>
                {t("socialProof")}{" "}
                <span className="font-bold text-brand-primary">
                  {t("socialProofHighlight", { count: directoryMembers.length })}
                </span>{" "}
                {t("socialProofSuffix")}
              </p>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div style={reduced ? undefined : { y: photoY, rotate: photoRotate }} className="relative mx-auto w-full max-w-[540px]">
            <motion.div
              className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-[3px] border-brand-primary shadow-[0_40px_80px_-40px_rgba(113,40,111,0.6)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE_TABI }}
            >
              <Image
                src="/events/enugu-group-shot.jpeg"
                alt="Tabi Women Network Enugu Cohort"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 540px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tabi-night/70 via-transparent to-transparent" />
              <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-primary shadow-lg">
                {t("editionBadge")}
              </span>
              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/15 p-5 text-white ring-1 ring-white/30 backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: EASE_TABI }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                    <Users size={20} />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold leading-none">{t("cohortTitle")}</h4>
                    <p className="mt-1 text-xs text-white/80">{t("cohortDetails")}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] border border-dashed border-brand-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
