"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";
import {
  APPLICATION_DEADLINE,
  SLOTS_REMAINING,
  TOTAL_SLOTS
} from "@/constants/consultancy";

export default function ConsultancyHero() {
const t = useTranslations("Consultancy.ConsultancyHero");

  const areas = t.raw("areas") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section
      className="w-full bg-white overflow-hidden"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      {/* Top urgency bar */}
      <div
        className="w-full py-3 px-6 text-center text-sm font-semibold text-white"
        style={{ background: "#71286F" }}
      >
        {t("urgentBar", { totalSlots: TOTAL_SLOTS })}
      </div>

      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center pb-20 lg:pb-28">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-7">
              <span
                className="text-xs font-extrabold tracking-widest uppercase px-4 py-2 rounded-full border-2"
                style={{
                  borderColor: "#71286F",
                  color: "#71286F",
                  background: "#FDF4FF"
                }}
              >
                {t("freeBadge")}
              </span>
              <span className="text-xs text-[#888] font-medium">
                {t("freeSubtext")}
              </span>
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold text-[#1a1a2e] leading-[1.1] mb-6 tracking-tight">
              {t("headline1")}
              <br />
              {t("headline2")}{" "}
              <span
                className="relative inline-block"
                style={{ color: "#71286F" }}
              >
                {t("headlineHighlight")}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 300 6"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 4 Q37.5 0 75 4 Q112.5 8 150 4 Q187.5 0 225 4 Q262.5 8 300 4"
                    stroke="#71286F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              {t("headline3")}
            </h1>

            <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-8 max-w-lg">
              {t("description")}
            </p>

            {/* Focus area pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {areas.map((area) => (
                <span
                  key={area}
                  className="text-xs font-bold px-4 py-2 rounded-full"
                  style={{ background: "#F3E8FF", color: "#71286F" }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-[#F0E8F5]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-brand-primary leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#888] font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="#apply">
                <Button variant="primary" size="lg">
                  {t("cta")}
                </Button>
              </Link>
              <p className="text-xs text-[#999] leading-snug">
                {t("terms", { remaining: SLOTS_REMAINING, total: TOTAL_SLOTS })}
              </p>
            </div>
          </div>

          {/* Right — image + floating cards */}
          <div className="relative hidden lg:block">
            <div
              className="absolute -top-8 -right-8 w-48 h-48 opacity-20 -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #71286F 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px"
              }}
              aria-hidden
            />

            <div className="relative rounded-4xl overflow-hidden aspect-3/4 shadow-2xl">
              <Image
                src={withBasePath("/consultancy/hero-2.jpg")}
                alt={t("imageAlt")}
                fill
                className="object-cover"
                priority
                quality={85}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(113,40,111,0.5) 0%, transparent 50%)"
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                  {t("deadlineLabel")}
                </p>
                <p className="text-white text-sm font-bold leading-snug">
                  {t("applicationDeadline")}
                </p>
              </div>
            </div>

            {/* Floating — top left */}
            <div className="absolute -left-8 top-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#F0E8F5]">
              <p className="text-xs text-[#aaa] font-medium mb-1">
                {t("openSlotsLabel")}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-brand-primary">
                  {SLOTS_REMAINING}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: i < SLOTS_REMAINING ? "#71286F" : "#E5E7EB"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating — bottom right */}
            <div
              className="absolute -right-6 bottom-24 rounded-2xl shadow-xl px-5 py-4"
              style={{ background: "#71286F" }}
            >
              <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">
                {t("areasCoveredLabel")}
              </p>
              <p className="text-white text-sm font-bold">
                Marketing · Finance · Tech
              </p>
              <p className="text-white text-sm font-bold">Strategy · Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
