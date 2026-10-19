"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { withBasePath } from "@/constants/paths";

// Five photos fanned along an arc — they spread further apart as you scroll
const FAN = [
  { src: "/events/enugu-group-shot.jpeg", rotate: -14, x: -2.1, y: 50 },
  { src: "/community/learnable-event.jpg", rotate: -7, x: -1.05, y: 14 },
  { src: "/community/woman-teaching.jpg", rotate: 0, x: 0, y: 0 },
  { src: "/uploads/20240913_110227.jpg", rotate: 7, x: 1.05, y: 14 },
  { src: "/events/tw-side.jpeg", rotate: 14, x: 2.1, y: 50 }
];

function FanCard({
  card,
  index,
  spread,
  alt
}: {
  card: (typeof FAN)[number];
  index: number;
  spread: MotionValue<number>;
  alt: string;
}) {
  const reduced = useReducedMotion();
  const x = useTransform(spread, (s) => `calc(${card.x * 100}% + ${card.x * s}px)`);
  const rotate = useTransform(spread, (s) => card.rotate * (1 + s / 140));
  const center = index === 2;

  return (
    <motion.div
      className={`absolute left-1/2 top-0 w-[38%] max-w-[260px] -translate-x-1/2 sm:w-[30%] ${center ? "z-30" : index === 1 || index === 3 ? "z-20" : "z-10"}`}
      style={reduced ? { rotate: card.rotate, x: `${card.x * 100}%`, y: card.y } : { x, rotate, y: card.y }}
    >
      <motion.div
        initial={{ opacity: 0, y: 120, rotate: 0, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25 + Math.abs(index - 2) * 0.12, ease: EASE_TABI }}
        whileHover={{ y: -14, scale: 1.04, transition: { duration: 0.35 } }}
        className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border-[3px] border-white bg-tabi-lilac shadow-[0_30px_60px_-30px_rgba(42,13,41,0.6)]"
      >
        <Image
          src={withBasePath(card.src)}
          alt={center ? alt : ""}
          fill
          priority={center}
          sizes="(max-width: 640px) 40vw, 260px"
          className="object-cover"
        />
        {center && <div className="absolute inset-0 ring-[3px] ring-inset ring-brand-primary rounded-[1.35rem]" />}
      </motion.div>
    </motion.div>
  );
}

export default function CommunityHero() {
  const t = useTranslations("Community.hero");
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const spread = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fanY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToJoin = () => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      {/* Blurred orbs from the About Us hero */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-28 h-64 w-64 rounded-full bg-brand-orchid/25 blur-[80px] animate-blob" />
      <div aria-hidden className="pointer-events-none absolute -right-16 top-64 h-72 w-72 rounded-full bg-brand-orchid/20 blur-[90px] animate-blob [animation-delay:-7s]" />

      <div className="relative mx-auto max-w-350 px-6 pt-14 text-center sm:px-12 lg:px-20 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_TABI }}
        >
          <Eyebrow dot>{t("badge")}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE_TABI }}
          className="mx-auto mt-7 max-w-4xl text-[clamp(2.3rem,5.6vw,4.4rem)] font-bold leading-[1.08] tracking-[-0.015em] text-tabi-ink"
        >
          {t("headlinePart1")}{" "}
          <span className="relative inline-block">
            <GradientText>{t("headlineHighlight")}</GradientText>
            <Image
              src={withBasePath("/scribble.svg")}
              alt=""
              aria-hidden
              width={70}
              height={70}
              className="absolute -right-12 -top-8 h-12 w-12 sm:-right-14 sm:h-16 sm:w-16"
            />
          </span>{" "}
          {t("headlinePart2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE_TABI }}
          className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-tabi-body sm:text-lg"
        >
          {t("subheadPrefix")} <span className="font-bold text-tabi-ink">{t("subheadBold")}</span>{" "}
          {t("subheadSuffix")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: EASE_TABI }}
          className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button variant="primary" size="lg" onClick={scrollToJoin}>
            {t("cta")}
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="flex items-center gap-2.5 text-sm text-tabi-body">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3CB371] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3CB371]" />
            </span>
            <span>
              <span className="font-medium text-tabi-ink">{t("fomoMain")}</span> {t("fomoQueue")}
            </span>
          </p>
        </motion.div>
      </div>

      {/* Photo fan */}
      <motion.div
        style={reduced ? undefined : { y: fanY }}
        className="relative mx-auto mt-16 h-[min(70vw,440px)] w-full max-w-[1100px] sm:mt-20"
      >
        {FAN.map((card, i) => (
          <FanCard key={card.src} card={card} index={i} spread={spread} alt={t("images.womanCodingAlt")} />
        ))}

        <Sparkle className="absolute left-[30%] top-[-6%] z-40" size={40} />

        {/* Floating chips (desktop) */}
        <motion.div
          className="absolute left-[4%] top-[12%] z-40 hidden md:block"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1 }}
        >
          <div className="animate-float flex items-center gap-3 rounded-2xl bg-tabi-mint px-4 py-3 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.35)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2F8F5B]">
              <Users size={16} />
            </span>
            <span className="text-left">
              <span className="block text-xl font-bold leading-none text-tabi-ink">{t("floatingTag2Value")}</span>
              <span className="mt-1 block text-[11px] text-tabi-body">{t("floatingTag2Label")}</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[4%] top-[6%] z-40 hidden md:block"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1.15 }}
        >
          <div className="animate-float rounded-2xl bg-white px-4 py-3 text-left shadow-[0_14px_34px_-14px_rgba(113,40,111,0.35)] [animation-delay:-3s]">
            <p className="text-[11px] text-tabi-body">{t("floatingTag1")}</p>
            <p className="flex items-center gap-1.5 text-sm font-bold text-tabi-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              {t("floatingTag1Sub")}
            </p>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[62%] z-40 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 12, delay: 1.3 }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_10px_30px_-8px_rgba(113,40,111,0.7)] ring-4 ring-white animate-float">
            <Heart size={22} fill="currentColor" strokeWidth={0} />
          </span>
        </motion.div>
      </motion.div>

      {/* soft fade into the next section */}
      <div aria-hidden className="pointer-events-none relative z-40 -mt-24 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
