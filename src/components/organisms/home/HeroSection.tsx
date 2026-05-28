"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";

function polarToCSS(angleDeg: number, radiusPct: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return { left: `${x}%`, top: `${y}%` };
}

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  const ALL_TAGS = [
    {
      id: "academy",
      angle: 210,
      content: (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 min-w-22.5 md:px-4 md:py-2.5 md:min-w-27.5">
          <p className="text-[10px] md:text-xs text-[#888] font-medium">
            {t("tags.academy.subtitle")}
          </p>
          <div className="flex items-center gap-1 md:gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-300 shrink-0" />
            <p className="text-xs md:text-sm font-bold text-[#1a1a2e]">
              {t("tags.academy.title")}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "project",
      angle: 340,
      content: (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 min-w-22.5 md:px-4 md:py-2.5 md:min-w-27.5">
          <p className="text-[10px] md:text-xs text-[#888] font-medium">
            {t("tags.project.subtitle")}
          </p>
          <div className="flex items-center gap-1 md:gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary shrink-0" />
            <p className="text-xs md:text-sm font-bold text-[#1a1a2e]">
              {t("tags.project.title")}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guild",
      angle: 45,
      content: (
        <div className="bg-white rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5">
          <span className="text-base md:text-xl font-black text-brand-primary tracking-tight leading-none">
            purple<span className="text-[#1a1a2e]">.</span>
          </span>
          <p className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] text-brand-muted uppercase font-medium mt-0.5">
            {t("tags.guild.subtitle")}
          </p>
        </div>
      )
    },
    {
      id: "volunteers",
      angle: 310,
      content: (
        <div className="bg-[#f0faf4]/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5">
          <p className="text-base md:text-xl font-extrabold text-[#1a1a2e] leading-none">
            {t("tags.volunteers.number")}
          </p>
          <p className="text-[9px] md:text-[11px] text-[#888] mt-0.5 md:mt-1">
            {t("tags.volunteers.label")}
          </p>
        </div>
      )
    },
    {
      id: "trained",
      angle: 130,
      content: (
        <div className="bg-[#fff9f0]/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5">
          <p className="text-base md:text-xl font-extrabold text-[#1a1a2e] leading-none">
            {t("tags.trained.number")}
          </p>
          <p className="text-[9px] md:text-[11px] text-[#888] mt-0.5 md:mt-1">
            {t("tags.trained.label")}
          </p>
        </div>
      )
    },
    {
      id: "participation",
      angle: 240,
      content: (
        <div className="bg-[#fff9f0]/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5">
          <p className="text-base md:text-xl font-extrabold text-[#1a1a2e] leading-none">
            {t("tags.participation.number")}
          </p>
          <p className="text-[9px] md:text-[11px] text-[#888] mt-0.5 md:mt-1 max-w-20 md:max-w-none">
            {t("tags.participation.label")}
          </p>
        </div>
      )
    }
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fdf7ff] pb-0"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 mb-8 md:mb-16 pt-12 md:pt-20">
        <h1 className="text-[clamp(1.9rem,6vw,4rem)] font-extrabold leading-tight tracking-tight text-[#1a1a2e]">
          {t("headlinePart1")}
          <span className="text-brand-primary italic">
            {t("headlinePart2")}
          </span>
          <Image
            src={withBasePath("/scribble.svg")}
            alt=""
            width={84}
            height={84}
            className="inline-block -ml-2 md:-ml-3 mb-4 md:mb-6 w-12 h-12 md:w-20 md:h-20 align-middle"
            aria-hidden
            quality={85}
          />
          <br />
          {t("headlinePart3")}
        </h1>

        <p className="mt-4 md:mt-5 max-w-sm sm:max-w-xl text-[#555] text-sm md:text-base leading-relaxed">
          {t("subheadline")}
        </p>

        {/* <Link href="/ai-for-businesses" className="mt-6 md:mt-8">
          <Button
            variant="primary"
            size="lg"
            className="text-sm md:text-base px-6 md:px-8"
          >
            {t("cta")}
          </Button>
        </Link> */}

        <Link href="/projects/javascript-bootcamp" className="mt-6 md:mt-8">
          <Button
            variant="primary"
            size="lg"
            className="text-sm md:text-base px-6 md:px-8"
          >
            {t("cta")}
          </Button>
        </Link>
      </div>

      {/* Orbit stage - unchanged except using ALL_TAGS now defined inside */}
      <div
        className="relative mx-auto pb-16 sm:pb-10 md:pb-0 "
        style={{ width: "min(820px, 92vw)", aspectRatio: "1/1" }}
      >
        <div className="absolute inset-0">
          <Image
            src={withBasePath("/hero-image.png")}
            alt={t("heroImageAlt")}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ animation: "orbit-cw 20s linear infinite" }}
        >
          {ALL_TAGS.map((tag) => (
            <div
              key={tag.id}
              className="absolute"
              style={{
                ...polarToCSS(tag.angle, 48),
                transform: "translate(-50%, -50%)",
                animation: "orbit-ccw 20s linear infinite"
              }}
            >
              {tag.content}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @media (max-width: 640px) {
          .orbit-stage > div {
            animation-duration: 28s !important;
          }
        }
      `}</style>
    </section>
  );
}