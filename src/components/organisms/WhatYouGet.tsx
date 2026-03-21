import { FOCUS_AREAS } from "@/constants/consultancy";

const ICONS: Record<string, string> = {
  Marketing: "📣",
  Finance: "💰",
  Tech: "💻",
  Strategy: "♟️",
  Sales: "🤝"
};

export default function WhatYouGet() {
  return (
    <section className="w-full" style={{ background: "#FDF4FF" }}>
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#EED9F7" }}
            >
              We Will Help Solve Challenges In
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a2e] leading-snug">
              One session.{" "}
              <span className="text-brand-primary">Real solutions.</span>
            </h2>
          </div>
          <p className="text-base text-[#666] leading-relaxed max-w-sm lg:text-right">
            Tell us your biggest challenge — we&apos;ll match you with the right
            expert for your session.
          </p>
        </div>

        {/* Cards — 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {FOCUS_AREAS.map((area, i) => (
            <div
              key={area.id}
              className="group flex flex-col bg-white rounded-2xl p-6 border border-[#EDD9F5] hover:border-brand-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number + accent bar */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-8 h-0.75 rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ background: "#71286F" }}
                />
                <span
                  className="text-4xl font-extrabold select-none tabular-nums"
                  style={{ color: "#F3E8FF" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Icon */}
              <span className="text-2xl mb-3">{ICONS[area.title] ?? "✦"}</span>
              <h3 className="text-base font-extrabold text-[#1a1a2e] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed flex-1">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-8 py-5 bg-white border border-[#EDD9F5]">
          <p className="text-sm text-[#555] leading-relaxed">
            <span className="font-bold text-[#1a1a2e]">
              Not sure which area?
            </span>{" "}
            Just describe your challenge in the application form — we&apos;ll figure
            out the best fit for you.
          </p>
          <a
            href="#apply"
            className="shrink-0 text-sm font-bold text-brand-primary underline underline-offset-4 hover:no-underline transition-all"
          >
            Apply now →
          </a>
        </div>
      </div>
    </section>
  );
}
