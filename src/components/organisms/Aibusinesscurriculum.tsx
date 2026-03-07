"use client";

import { useRef, useState } from "react";

const DAYS = [
  {
    day: "Day 1",
    title: "AI Foundations & Business Strategy",
    description:
      "Understand what AI tools actually are, how they work, and where they create the most leverage in a business. Map your own biggest challenges to AI solutions. Leave with a strategic AI roadmap for your business.",
    deliverable: "AI opportunity map for your business",
    tag: "Foundations",
    bg: "#1a0a2e",
    accent: "#c084fc",
    tagBg: "rgba(192,132,252,0.15)",
    number: "01",
  },
  {
    day: "Day 2",
    title: "Design, Branding & Visual Content",
    description:
      "Use AI design tools to create professional graphics, a complete brand kit, and UI wireframes or mockups. No design experience needed — just your vision.",
    deliverable: "Brand kit + UI mockup or wireframe",
    tag: "Design",
    bg: "#2d0a1e",
    accent: "#f472b6",
    tagBg: "rgba(244,114,182,0.15)",
    number: "02",
  },
  {
    day: "Day 3",
    title: "Build & Publish with AI",
    description:
      "Build a fully functional landing page or simple application using AI-powered development tools. Publish it live. Walk away with a real URL.",
    deliverable: "Live published landing page or app",
    tag: "Build",
    bg: "#0a1a2e",
    accent: "#38bdf8",
    tagBg: "rgba(56,189,248,0.15)",
    number: "03",
  },
  {
    day: "Day 4",
    title: "Automation, AI Agents & Workflows",
    description:
      "Create an AI agent or automation workflow running a real task for your business. From lead capture to content scheduling — this is where AI works for you, not the other way around.",
    deliverable: "Deployed automation or AI agent workflow",
    tag: "Automate",
    bg: "#0a2e1a",
    accent: "#34d399",
    tagBg: "rgba(52,211,153,0.15)",
    number: "04",
  },
];

export default function AIBusinessCurriculum() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollTo(index: number) {
    setActive(index);
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <section className="w-full bg-[#0d0d0d] overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-20 lg:pt-28 pb-10">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/60 tracking-wide uppercase">
            The Curriculum
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            Four Days That Change How You Work
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/50 leading-relaxed">
            Each day is structured around a core AI capability — and each one
            builds on the last. By Day 4, you&apos;ll have gone from AI foundations
            to deploying autonomous agents for your business.
          </p>
        </div>

        {/* ── Dot nav ── */}
        <div className="flex justify-center gap-3 mb-10">
          {DAYS.map((d, i) => (
            <button
              key={d.day}
              onClick={() => scrollTo(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: active === i ? d.accent : "rgba(255,255,255,0.06)",
                color: active === i ? "#0d0d0d" : "rgba(255,255,255,0.4)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: active === i ? "#0d0d0d" : d.accent }}
              />
              {d.day}
            </button>
          ))}
        </div>
      </div>

      {/* ── Horizontal scroll panels ── */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-6 sm:px-12 lg:px-20 pb-20 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        onScroll={(e) => {
          const container = e.currentTarget;
          const scrollLeft = container.scrollLeft;
          const cardWidth = container.scrollWidth / DAYS.length;
          setActive(Math.round(scrollLeft / cardWidth));
        }}
      >
        {DAYS.map((day, i) => (
          <div
            key={day.day}
            className="snap-center shrink-0 flex flex-col justify-between rounded-3xl p-8 sm:p-10 cursor-pointer"
            style={{
              background: day.bg,
              width: "clamp(280px, 75vw, 480px)",
              minHeight: "400px",
              border: `1px solid ${day.accent}22`,
            }}
            onClick={() => setActive(i)}
          >
            {/* Top row: number + tag */}
            <div className="flex items-start justify-between mb-8">
              <span
                className="text-[80px] font-black leading-none select-none"
                style={{ color: day.accent + "18" }}
              >
                {day.number}
              </span>
              <span
                className="text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
                style={{ background: day.tagBg, color: day.accent }}
              >
                {day.tag}
              </span>
            </div>

            {/* Day label */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: day.accent }}
              >
                {day.day}
              </p>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-4">
                {day.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {day.description}
              </p>

              {/* Deliverable pill */}
              <div
                className="inline-flex items-center gap-2.5 rounded-xl px-4 py-3"
                style={{ background: day.tagBg }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke={day.accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-semibold" style={{ color: day.accent }}>
                  Lab deliverable:
                </span>
                <span className="text-xs text-white/60">{day.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Scroll hint ── */}
      <div className="flex justify-center pb-12 gap-2">
        {DAYS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "24px" : "6px",
              background: active === i ? DAYS[active].accent : "rgba(255,255,255,0.15)",
            }}
            aria-label={`Go to ${DAYS[i].day}`}
          />
        ))}
      </div>
    </section>
  );
}