"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function AIBusinessCurriculum() {
  const t = useTranslations("AIBusiness.curriculum");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const days = [
    {
      ...t.raw("days.day1"),
      bg: "#1a0a2e",
      accent: "#c084fc",
      tagBg: "rgba(192,132,252,0.15)",
      number: "01"
    },
    {
      ...t.raw("days.day2"),
      bg: "#2d0a1e",
      accent: "#f472b6",
      tagBg: "rgba(244,114,182,0.15)",
      number: "02"
    },
    {
      ...t.raw("days.day3"),
      bg: "#0a1a2e",
      accent: "#38bdf8",
      tagBg: "rgba(56,189,248,0.15)",
      number: "03"
    },
    {
      ...t.raw("days.day4"),
      bg: "#0a2e1a",
      accent: "#34d399",
      tagBg: "rgba(52,211,153,0.15)",
      number: "04"
    }
  ];

  function scrollTo(index: number) {
    setActive(index);
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    child?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }

  return (
    <section className="w-full bg-[#0d0d0d] overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-20 lg:pt-28 pb-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/60 tracking-wide uppercase">
            {t("badge")}
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/50 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {days.map((d, i) => (
            <button
              key={d.day}
              onClick={() => scrollTo(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: active === i ? d.accent : "rgba(255,255,255,0.06)",
                color: active === i ? "#0d0d0d" : "rgba(255,255,255,0.4)"
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

      <div
        ref={scrollRef}
        className="flex gap-4 px-6 sm:px-12 lg:px-20 pb-20 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        onScroll={(e) => {
          const container = e.currentTarget;
          const scrollLeft = container.scrollLeft;
          const cardWidth = container.scrollWidth / days.length;
          setActive(Math.round(scrollLeft / cardWidth));
        }}
      >
        {days.map((day, i) => (
          <div
            key={day.day}
            className="snap-center shrink-0 flex flex-col justify-between rounded-3xl p-8 sm:p-10 cursor-pointer"
            style={{
              background: day.bg,
              width: "clamp(280px, 75vw, 480px)",
              minHeight: "400px",
              border: `1px solid ${day.accent}22`
            }}
            onClick={() => setActive(i)}
          >
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

            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: day.accent }}
              >
                {day.day}
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-4">
                {day.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {day.description}
              </p>
              <div
                className="inline-flex items-center gap-2.5 rounded-xl px-4 py-3"
                style={{ background: day.tagBg }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke={day.accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-xs font-semibold"
                  style={{ color: day.accent }}
                >
                  {day.deliverableLabel}
                </span>
                <span className="text-xs text-white/60">{day.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-12 gap-2">
        {days.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "24px" : "6px",
              background:
                active === i ? days[active].accent : "rgba(255,255,255,0.15)"
            }}
            aria-label={t("scrollHint", { day: days[i].day })}
          />
        ))}
      </div>
    </section>
  );
}
