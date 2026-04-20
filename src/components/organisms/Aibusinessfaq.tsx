"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  "Getting Started": { bg: "rgba(168,85,247,0.1)", text: "#a855f7" },
  Tools: { bg: "rgba(56,189,248,0.1)", text: "#0284c7" },
  Programme: { bg: "rgba(251,191,36,0.1)", text: "#d97706" },
  Attendance: { bg: "rgba(244,114,182,0.1)", text: "#db2777" },
  Delivery: { bg: "rgba(52,211,153,0.1)", text: "#059669" },
  "Post-Programme": { bg: "rgba(99,102,241,0.1)", text: "#4f46e5" },
  Payment: { bg: "rgba(239,68,68,0.1)", text: "#dc2626" }
};

export default function AIBusinessFAQ() {
  const t = useTranslations("AIBusiness.faq");
  const [open, setOpen] = useState<number | null>(null);

  const faqs = t.raw("items") as Array<{ q: string; a: string; tag: string }>;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="mb-5 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              {t("badge")}
            </span>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-[#1a1a2e] leading-tight mt-4 mb-6">
              {t("headingLine1")}
              <br />
              {t("headingLine2")}
              <br />
              <span className="text-brand-primary">
                {t("headingHighlight")}
              </span>
            </h2>
            <p className="text-sm text-[#888] leading-relaxed max-w-xs mb-10">
              {t("contactMessage")}
            </p>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline underline-offset-4"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4l6 5 6-5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="3"
                  width="14"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              {t("contactEmail")}
            </a>
          </div>

          <div className="flex flex-col divide-y divide-[#f0ebf8]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const color = TAG_COLORS[faq.tag];
              return (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 py-6 text-left"
                  >
                    <span className="shrink-0 text-xs font-bold text-[#ccc] mt-0.5 w-6 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p
                          className="text-base font-bold text-[#1a1a2e] group-hover:text-brand-primary transition-colors duration-200 leading-snug"
                          style={{ color: isOpen ? "#71286F" : undefined }}
                        >
                          {faq.q}
                        </p>
                        <span
                          className="shrink-0 text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                          style={{ background: color.bg, color: color.text }}
                        >
                          {t(`tags.${faq.tag}`)}
                        </span>
                      </div>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5"
                      style={{
                        borderColor: isOpen ? "#71286F" : "#e5e5e5",
                        background: isOpen ? "#71286F" : "transparent",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6 2v8M2 6h8"
                          stroke={isOpen ? "white" : "#aaa"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isOpen ? "300px" : "0px" }}
                  >
                    <div className="pl-10 pb-6 pr-12">
                      <p className="text-sm text-[#666] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
