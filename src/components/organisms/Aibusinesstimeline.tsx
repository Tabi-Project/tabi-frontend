"use client";

import { useState } from "react";

const PHASES = [
  {
    number: "01",
    tag: "Before Day 1",
    title: "Pre-Programme Onboarding",
    description:
      "Get set up, get excited, and arrive ready. You'll receive your welcome pack, participant agreement, full schedule, tool setup guides, and direct access to your cohort community — all before the first session begins.",
    highlights: [
      "Signed participant agreement",
      "Tool setup guide (6 free accounts)",
      "Full schedule + Google Calendar invites",
      "WhatsApp community access",
      "Pre-programme reflection worksheet"
    ],
    color: "#F3E8FF",
    accent: "#71286F"
  },
  {
    number: "02",
    tag: "4 Days · 4 Hours Each",
    title: "Week 1 · Live Training",
    description:
      "Four full-day live sessions covering AI fundamentals, design tools, app building, and automation. Every session follows a learn → demo → build → share cycle. You'll leave each day with something tangible.",
    highlights: [
      "Day 1 — AI Foundations & Business Strategy",
      "Day 2 — Design, Branding & Visual Content",
      "Day 3 — Build & Publish with AI",
      "Day 4 — Automation, AI Agents & Workflows"
    ],
    color: "#EDE8FF",
    accent: "#5B21B6"
  },
  {
    number: "03",
    tag: "Project + Presentation + Exam",
    title: "Week 2 · Capstone & Certification",
    description:
      "Apply everything you've learned to a real business challenge. Build your capstone project, present live to the cohort, and sit your certification exam. This is where it all comes together.",
    highlights: [
      "1:1 coaching slots available",
      "Wednesday mid-week group check-in",
      "Live 10-minute capstone presentation",
      "60-minute online certification exam",
      "Certificate issued within 5 business days"
    ],
    color: "#FFF0F9",
    accent: "#9D174D"
  },
  {
    number: "04",
    tag: "Ongoing Support & Access",
    title: "Post-Programme · Alumni Community",
    description:
      "Six months of access to all recordings and materials. Two weeks of dedicated post-programme support. And permanent membership in the Tabi Academy alumni community — a network that keeps giving.",
    highlights: [
      "2-week post-programme support window",
      "6-month access to all recordings & materials",
      "Permanent alumni community membership",
      "Priority access to future programmes",
      "Peer network across all cohorts"
    ],
    color: "#F0FFF4",
    accent: "#065F46"
  }
];

export default function AIBusinessTimeline() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
            The Experience
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
            From Enrolment to Graduate in Four Phases
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#666] leading-relaxed">
            Every stage is designed — not just the live sessions. From the
            moment you enrol to six months after graduation, you&apos;re supported,
            equipped, and part of something that lasts.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {PHASES.map((phase, i) => {
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
                {/* ── Accordion trigger ── */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-5 px-7 py-6 text-left group"
                >
                  {/* Number pill */}
                  <span
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold transition-colors duration-300"
                    style={{
                      background: isOpen ? phase.accent : "#f3e8ff",
                      color: isOpen ? "#fff" : phase.accent
                    }}
                  >
                    {phase.number}
                  </span>

                  {/* Title + tag */}
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

                  {/* Chevron */}
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

                {/* ── Accordion content ── */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "600px" : "0px" }}
                >
                  <div className="px-7 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    {/* Left: description */}
                    <p className="text-sm text-[#555] leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Right: highlights list */}
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
