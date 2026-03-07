"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need a technical background?",
    a: "No. This programme is designed specifically for business owners and professionals — not developers. If you can use a smartphone and a laptop, you have everything you need to start.",
    tag: "Getting Started"
  },
  {
    q: "What tools will I use?",
    a: "ChatGPT, Canva, Uizard, GitHub, Zapier, and Vercel or Netlify — plus additional platforms introduced per session. Every tool has a free tier. No paid subscriptions are required.",
    tag: "Tools"
  },
  {
    q: "How many people are in each cohort?",
    a: "A maximum of 25 participants per cohort. This isn't a webinar — it's a live, interactive learning environment where the facilitators know your name and your business.",
    tag: "Programme"
  },
  {
    q: "What if I miss a session?",
    a: "Recordings are made available within 24 hours. Missing one session keeps you within the 80% attendance threshold. Missing two or more makes you ineligible for certification. Notify the team in advance if you need to miss a session.",
    tag: "Attendance"
  },
  {
    q: "Is this programme fully virtual?",
    a: "Yes. All sessions are delivered live via Google Meet. You'll need a laptop or desktop, a stable internet connection, a working webcam, and a quiet environment.",
    tag: "Delivery"
  },
  {
    q: "What happens after the programme ends?",
    a: "You get two weeks of dedicated post-programme support, six months of access to all recordings and materials, and permanent membership in the Tabi Academy alumni community.",
    tag: "Post-Programme"
  },
  {
    q: "What is the refund policy?",
    a: "Full refund for cancellations more than 14 days before the start date. 50% refund between 7–14 days. No refund within 7 days or after the programme has commenced. A one-time deferral to the next cohort is available if requested at least 5 days before the start date.",
    tag: "Payment"
  },
  {
    q: "Can I defer to a future cohort?",
    a: "Yes — once. If you notify the team at least 5 days before the programme start date, you can defer your place to the next available cohort.",
    tag: "Payment"
  }
];

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: sticky label + heading */}
          <div className="lg:sticky lg:top-28">
            <span className="mb-5 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              Questions
            </span>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-[#1a1a2e] leading-tight mt-4 mb-6">
              Everything
              <br />
              You&apos;ve Been
              <br />
              <span className="text-brand-primary">Wondering</span>
            </h2>
            <p className="text-sm text-[#888] leading-relaxed max-w-xs mb-10">
              Can&apos;t find your answer here? Reach out directly — the team
              responds within one business day.
            </p>
            <a
              href="mailto:academy@teefoundation.org"
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
              academy@teefoundation.org
            </a>
          </div>

          {/* Right: accordion list */}
          <div className="flex flex-col divide-y divide-[#f0ebf8]">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              const color = TAG_COLORS[faq.tag];
              return (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 py-6 text-left"
                  >
                    {/* Number */}
                    <span className="shrink-0 text-xs font-bold text-[#ccc] mt-0.5 w-6 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question + tag */}
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
                          {faq.tag}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
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

                  {/* Answer */}
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
