"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function AIBusinessTimeline() {
  const t = useTranslations("AIBusiness.timeline");
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Build phases array from translations
  const phases = [
    {
      number: "01",
      tag: t("phases.onboarding.tag"),
      title: t("phases.onboarding.title"),
      description: t("phases.onboarding.description"),
      highlights: t.raw("phases.onboarding.highlights") as string[],
      color: "#F3E8FF",
      accent: "#71286F"
    },
    {
      number: "02",
      tag: t("phases.week1.tag"),
      title: t("phases.week1.title"),
      description: t("phases.week1.description"),
      highlights: t.raw("phases.week1.highlights") as string[],
      color: "#EDE8FF",
      accent: "#5B21B6"
    },
    {
      number: "03",
      tag: t("phases.week2.tag"),
      title: t("phases.week2.title"),
      description: t("phases.week2.description"),
      highlights: t.raw("phases.week2.highlights") as string[],
      color: "#FFF0F9",
      accent: "#9D174D"
    },
    {
      number: "04",
      tag: t("phases.postProgramme.tag"),
      title: t("phases.postProgramme.title"),
      description: t("phases.postProgramme.description"),
      highlights: t.raw("phases.postProgramme.highlights") as string[],
      color: "#F0FFF4",
      accent: "#065F46"
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
            {t("badge")}
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#666] leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {phases.map((phase, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={phase.number}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? phase.accent + "33" : "#ede8f5",
                  background: isOpen ? phase.color : "#ffffff"
                }}
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-5 px-7 py-6 text-left group"
                >
                  <span
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold transition-colors duration-300"
                    style={{
                      background: isOpen ? phase.accent : "#f3e8ff",
                      color: isOpen ? "#fff" : phase.accent
                    }}
                  >
                    {phase.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-base sm:text-lg font-bold leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? phase.accent : "#1a1a2e" }}
                    >
                      {phase.title}
                    </p>
                    <p className="text-xs text-[#888] mt-0.5 font-medium">
                      {phase.tag}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                    aria-hidden
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke={isOpen ? phase.accent : "#aaa"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "600px" : "0px" }}
                >
                  <div className="px-7 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    <p className="text-sm text-[#555] leading-relaxed">
                      {phase.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {phase.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: phase.accent + "20" }}
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M1.5 4l1.8 1.8 3.2-3.6"
                                stroke={phase.accent}
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="text-sm text-[#444] leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
