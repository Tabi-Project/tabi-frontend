"use client";

import { useTranslations } from "next-intl";

export default function AIBusinessCertification() {
  const t = useTranslations("AIBusiness.certification");

  const REQUIREMENTS = [
    {
      step: "01",
      title: t("steps.attendance.title"),
      detail: t("steps.attendance.detail"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="2"
            y="3"
            width="16"
            height="15"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 3V1M14 3V1M2 8h16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      step: "02",
      title: t("steps.assignments.title"),
      detail: t("steps.assignments.detail"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 7h6M7 10h6M7 13h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    },
    {
      step: "03",
      title: t("steps.capstone.title"),
      detail: t("steps.capstone.detail"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      step: "04",
      title: t("steps.exam.title"),
      detail: t("steps.exam.detail"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 6v4l3 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    },
    {
      step: "05",
      title: t("steps.score.title"),
      detail: t("steps.score.detail"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 14l4-4 3 3 5-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="2"
            y="2"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#fdf7ff] overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side – requirements */}
          <div>
            <span className="mb-5 inline-flex items-center rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              {t("badge")}
            </span>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] leading-tight mb-5">
              {t("headingLine1")}
              <br />
              {t("headingLine2")}
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-12 max-w-md">
              {t("description")}
            </p>

            <div className="flex flex-col gap-0">
              {REQUIREMENTS.map((req, i) => (
                <div key={req.step} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm shrink-0 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                      {req.icon}
                    </div>
                    {i < REQUIREMENTS.length - 1 && (
                      <div className="w-px flex-1 bg-brand-primary/10 my-1.5" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-brand-primary/40 tracking-[0.2em] uppercase">
                        Step {req.step}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-[#1a1a2e] mb-1">
                      {req.title}
                    </p>
                    <p className="text-sm text-[#888] leading-relaxed">
                      {req.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side – certificate mockup + retake note */}
          <div className="flex flex-col gap-5">
            {/* Certificate mockup */}
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-10 border border-brand-primary/20"
              style={{
                background:
                  "linear-gradient(135deg, #1a0a2e 0%, #2d1045 60%, #3d1560 100%)",
                boxShadow: "0 32px 80px rgba(113,40,111,0.35)"
              }}
            >
              {/* Decorative background glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%)"
                }}
              />

              {/* Subtle inner border */}
              <div className="absolute inset-4 rounded-2xl border border-white/5 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase text-brand-primary-light/80 mb-1">
                    Tabi Academy · TEE Foundation
                  </p>
                  <p className="text-base font-semibold text-white/90">
                    {t("certificate.subtitle")}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/30 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z"
                      fill="#c084fc"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-2">
                  {t("certificate.awardedTo")}
                </p>
                <div className="h-px w-56 bg-linear-to-r from-brand-primary/50 to-transparent mb-4" />
                <p className="text-2xl sm:text-3xl font-bold text-white italic leading-tight">
                  {t("certificate.placeholderName")}
                </p>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mt-4 mb-8 max-w-xs">
                {t("certificate.description")}
              </p>

              {/* Score breakdown */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  {
                    label: t("certificate.capstone"),
                    weight: "60%",
                    score: "—"
                  },
                  { label: t("certificate.exam"), weight: "40%", score: "—" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl px-5 py-4"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      {item.label} · {item.weight}
                    </p>
                    <p className="text-xl font-extrabold text-white/80">
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verification bar */}
              <div
                className="flex items-center gap-3 rounded-xl px-5 py-3"
                style={{
                  background: "rgba(192,132,252,0.15)",
                  border: "1px solid rgba(192,132,252,0.25)"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="#c084fc"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 7l2 2 4-4"
                    stroke="#c084fc"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs text-white/60 font-medium">
                  {t("certificate.verification")}
                </p>
              </div>
            </div>

            {/* Retake note */}
            <div
              className="flex items-start gap-4 bg-white rounded-2xl border border-[#ede8f5] px-6 py-5"
              style={{ boxShadow: "0px 4px 12px 2px #3737371F" }}
            >
              <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center shrink-0 text-brand-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 3v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.5 10A6 6 0 109 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a2e] mb-0.5">
                  {t("retake.title")}
                </p>
                <p className="text-xs text-[#888] leading-relaxed">
                  {t("retake.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
