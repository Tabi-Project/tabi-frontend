"use client";

import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("Consultancy.HowItWorks");
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="w-full" style={{ background: "#1a1a2e" }}>
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold mb-5"
            style={{ background: "rgba(113,40,111,0.3)", color: "#D4A8F0" }}
          >
            {t("badge")}
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white leading-snug">
            {t("heading")}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Connector — desktop */}
          <div
            className="hidden sm:block absolute top-8 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px"
            style={{ background: "rgba(113,40,111,0.4)" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative"
            >
              {/* Number circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10 shadow-lg"
                style={{ background: "#71286F" }}
              >
                <span className="text-xl font-extrabold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white mb-3">
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
