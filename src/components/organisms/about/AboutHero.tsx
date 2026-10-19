"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { withBasePath } from "@/constants/paths";
import { EASE_TABI } from "@/components/atoms/Reveal";

const IMAGES = [
  withBasePath("/about/about-1.png"),
  withBasePath("/about/about-2.png"),
  withBasePath("/about/about-3.png"),
  withBasePath("/about/about-4.png"),
  withBasePath("/about/about-5.png")
];

/*
 * Geometry is taken 1:1 from the Figma frame (1440 wide). The band spans
 * y = 419 → 974 in the frame, so every value below is a % of a 1440 × 555 box.
 *
 *   lilac lines (centre):  top  0 → 22.70% → 0    bottom 99.28% → 81.98% → 99.28%
 *   photo window:          top  5.05% → 25.77%     bottom 95.14% → 79.64%
 *   cards: 5 × 272px with 20px #F7F7F7 gutters
 */
const BAND_ASPECT = "1440 / 555";
const FILL_CLIP = "polygon(0% 0.72%, 50% 22.7%, 100% 0.72%, 100% 99.28%, 50% 81.98%, 0% 99.28%)";
const PHOTO_CLIP = "polygon(0% 5.05%, 50% 25.77%, 100% 5.05%, 100% 95.14%, 50% 79.64%, 0% 95.14%)";
const LINE = "#B893B7";
const GRADIENT = "linear-gradient(180deg, #FFCC70 0%, #C850C0 31.93%, #71286F 57.11%)";

function PhotoCard({ src, index }: { src: string; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="group relative h-full overflow-hidden"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.35 + Math.abs(index - 2) * 0.12, ease: EASE_TABI }}
    >
      {/* Sized to the photo window's bounding box so crops match the Figma */}
      <div className="absolute inset-x-0 bottom-[4.86%] top-[5.05%]">
        <Image
          src={src}
          alt={`TEE Foundation photo ${index + 1}`}
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover object-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

export default function AboutHero() {
  const t = useTranslations("About.hero");
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // The band drifts up slightly as the hero scrolls away (resting state is untouched)
  const bandY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white" style={{ paddingTop: "var(--nav-height, 80px)" }}>
      {/* Blurred gradient orbs — positions match the Figma frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[35px] top-[110px] h-[120px] w-[120px] rounded-full opacity-70 blur-[50px] animate-blob"
        style={{ background: GRADIENT }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[11.5%] top-[295px] h-[120px] w-[120px] rounded-full opacity-70 blur-[50px] animate-blob [animation-delay:-7s]"
        style={{ background: GRADIENT }}
      />

      {/* Copy */}
      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center px-6 pt-[97px] text-center">
        <motion.h1
          className="bg-clip-text pb-1 text-[clamp(2.75rem,7vw,3.5rem)] font-bold leading-[1.2] text-transparent"
          style={{ backgroundImage: GRADIENT, WebkitBackgroundClip: "text" }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE_TABI }}
        >
          {t("heading")}
        </motion.h1>
        <motion.p
          className="mt-[5px] max-w-[640px] text-base leading-8 text-[#444444]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE_TABI }}
        >
          {t("description")}
        </motion.p>
      </div>

      {/* Bow-tie photo band */}
      <div className="relative mt-[69px] overflow-hidden">
        <motion.div
          className="relative left-1/2 w-[250%] md:w-[160%] lg:w-full"
          style={{ aspectRatio: BAND_ASPECT, y: reduced ? 0 : bandY, x: "-50%" }}
        >
          {/* Gutter fill between the two lines */}
          <motion.div
            className="absolute inset-0 bg-[#F7F7F7]"
            style={{ clipPath: FILL_CLIP, WebkitClipPath: FILL_CLIP }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Photos, clipped to the inner window */}
          <div
            className="absolute inset-0 grid grid-cols-5"
            style={{ clipPath: PHOTO_CLIP, WebkitClipPath: PHOTO_CLIP, columnGap: "1.3889%" }}
          >
            {IMAGES.map((src, i) => (
              <PhotoCard key={src} src={src} index={i} />
            ))}
          </div>

          {/* Lilac edge lines — drawn outward from the centre */}
          <svg aria-hidden viewBox="0 0 1440 555" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {[
              "M720 126 L0 4",
              "M720 126 L1440 4",
              "M720 455 L0 551",
              "M720 455 L1440 551"
            ].map((d, i) => (
              <motion.path
                key={d}
                d={d}
                fill="none"
                stroke={LINE}
                strokeWidth={4}
                vectorEffect="non-scaling-stroke"
                initial={reduced ? undefined : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, delay: 0.25 + (i > 1 ? 0.1 : 0), ease: [0.65, 0, 0.35, 1] }}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="h-16 bg-white" />
    </section>
  );
}
