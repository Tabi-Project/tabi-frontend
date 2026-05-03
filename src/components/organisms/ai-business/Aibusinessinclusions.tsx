"use client";

import { useTranslations } from "next-intl";

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Training: { bg: "rgba(192,132,252,0.12)", text: "#a855f7" },
  Support: { bg: "rgba(251,191,36,0.12)", text: "#d97706" },
  Materials: { bg: "rgba(56,189,248,0.12)", text: "#0284c7" },
  Certification: { bg: "rgba(52,211,153,0.12)", text: "#059669" },
  Community: { bg: "rgba(244,114,182,0.12)", text: "#db2777" }
};

export default function AIBusinessInclusions() {
  const t = useTranslations("AIBusiness.inclusions");

  // Get items from translations
  const inclusions = t.raw("items") as Array<{
    text: string;
    category: string;
  }>;
  const categories = Object.keys(CATEGORY_COLORS);

  return (
    <section className="w-full bg-[#0d0d0d]">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/50 tracking-wide uppercase mb-6">
              {t("badge")}
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {t("headingLine1")}
              <br />
              {t("headingLine2")}
              <br />
              <span className="text-white/20">{t("headingLine3")}</span>
              <br />
              <span className="text-white/20">{t("headingLine4")}</span>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-10">
              {t("freeToolsNote")}
            </p>
            <div className="flex flex-col gap-2.5">
              {categories.map((cat) => {
                const c = CATEGORY_COLORS[cat];
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: c.text }}
                    />
                    <span className="text-xs font-medium text-white/40">
                      {t(`categories.${cat}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inclusions.map((item, i) => {
              const c = CATEGORY_COLORS[item.category];
              return (
                <div
                  key={i}
                  className="group flex items-start gap-4 rounded-2xl px-5 py-5 border border-white/5 hover:border-white/10 bg-white/3 hover:bg-white/6 transition-all duration-300"
                >
                  <span
                    className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: c.bg }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2 5l2 2 4-4"
                        stroke={c.text}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/70 leading-snug group-hover:text-white/90 transition-colors duration-200">
                      {item.text}
                    </p>
                    <span
                      className="inline-block mt-2 text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-md"
                      style={{ background: c.bg, color: c.text }}
                    >
                      {t(`categories.${item.category}`)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/5 bg-white/3 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(113,40,111,0.2)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 2l1.5 4h4l-3.2 2.3 1.2 4L9 10 5.5 12.3l1.2-4L3.5 6h4z"
                  fill="#c084fc"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {t("bottomBanner.title")}
              </p>
              <p className="text-xs text-white/40 mt-0.5">
                {t("bottomBanner.description")}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold text-white/30 border border-white/10 rounded-full px-4 py-2">
            {t("bottomBanner.badge")}
          </span>
        </div>
      </div>
    </section>
  );
}
