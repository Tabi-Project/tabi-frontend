"use client";

import { useTranslations } from "next-intl";

export default function BootcampCTA() {
  const t = useTranslations("Bootcamp.cta");

  return (
    <section
      id="cta-section" 
      className="relative py-28 overflow-hidden bg-[#fdf7ff]"
    >
         {/* decorative backgrounds unchanged */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-350 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-6">
            {t("badge")}
          </p>

          <h2 className="font-extrabold tracking-tight text-[clamp(2.2rem,4.5vw,3.5rem)] text-[#1a1a2e] leading-tight mb-6">
            {t("heading")}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
              }}
            >
              {t("highlight")}
            </span>
          </h2>

          <p className="text-base text-[#555] leading-relaxed mb-10 max-w-md mx-auto">
            {t("description")}
          </p>

          {/* Button + footnote stacked vertically */}
          <div className="flex flex-col items-center gap-11">
            <button
              className="px-12 py-5 rounded-xl font-bold text-sm tracking-wide text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #71286F, #c040a0)",
                boxShadow: "0 8px 36px rgba(113,40,111,0.35)"
              }}
            >
              {t("button")}
            </button>
            <p className="text-sm text-[#888]">{t("footnote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
