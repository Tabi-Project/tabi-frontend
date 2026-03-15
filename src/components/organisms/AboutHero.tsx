"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/about/about-1.png",
  "/about/about-2.png",
  "/about/about-3.png",
  "/about/about-4.png",
  "/about/about-5.png"
];

const STRIP_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];

const CARD_WIDTH = 280;
const GAP = 0;
const SET_WIDTH = (CARD_WIDTH + GAP) * IMAGES.length;
const SPEED = 0.8;
const STRIP_HEIGHT = 380;

const CLIP =
  "polygon(0% 0%, 34% 22%, 50% 28%, 66% 22%, 100% 0%, 100% 100%, 0% 100%)";

function InfiniteStrip() {
  const x = useMotionValue(0);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    xRef.current -= SPEED;
    if (xRef.current <= -SET_WIDTH) xRef.current = 0;
    x.set(xRef.current);
  });

  return (
    <motion.div
      style={{
        x,
        display: "flex",
        alignItems: "stretch",
        height: STRIP_HEIGHT,
        gap: GAP
      }}
    >
      {STRIP_IMAGES.map((src, i) => (
        <div
          key={i}
          style={{
            width: CARD_WIDTH,
            height: STRIP_HEIGHT,
            flexShrink: 0,
            position: "relative"
          }}
        >
          <Image
            src={src}
            alt={`TEE Foundation photo ${(i % IMAGES.length) + 1}`}
            fill
            className="object-cover object-center"
            sizes="280px"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: 120,
          height: 120,
          background:
            "linear-gradient(180deg, #FFCC70 0%, #C850C0 31.93%, #71286F 57.11%)",
          filter: "blur(100px)",
          opacity: 0.7,
          borderRadius: "50%"
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 240,
          right: 60,
          width: 120,
          height: 120,
          background:
            "linear-gradient(180deg, #FFCC70 0%, #C850C0 31.93%, #71286F 57.11%)",
          filter: "blur(100px)",
          opacity: 0.7,
          borderRadius: "50%"
        }}
      />

      <div className="relative w-full flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-6"
            style={{
              background:
                "linear-gradient(180deg, #FFCC70 0%, #C850C0 31.93%, #71286F 57.11%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Who Are We?
          </h1>
          <p className="text-[#666] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We are a non-profit organization that offers tech education,
            research and development and Open-source projects. It aims to train
            5000 African women to be well equipped in the tech industry to
            bridge the gap in the ecosystem.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: STRIP_HEIGHT,
          overflow: "hidden",
          clipPath: CLIP,
          WebkitClipPath: CLIP
        }}
      >
        <InfiniteStrip />
      </div>

      <div className="h-16 bg-white" />
    </section>
  );
}
