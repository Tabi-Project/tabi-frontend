import { Button } from "@/components/atoms/Button";
import Link from "next/link";

const TRUST_SIGNALS = [
  "No technical background required",
  "Live, expert-facilitated",
  "Fully virtual",
  "Certified on completion"
];

export default function AIBusinessCTA() {
  return (
    <section className="w-full bg-[#0d0d0d] overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        {/* ── Background decorations ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(113,40,111,0.18) 0%, transparent 70%)"
          }}
        />
        {/* Top-left corner grid lines */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-[0.04]"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          {[0, 40, 80, 120, 160, 200].map((v) => (
            <g key={v}>
              <line
                x1={v}
                y1="0"
                x2={v}
                y2="200"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1={v}
                x2="200"
                y2={v}
                stroke="white"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
        {/* Bottom-right mirror */}
        <svg
          className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.04] rotate-180"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          {[0, 40, 80, 120, 160, 200].map((v) => (
            <g key={v}>
              <line
                x1={v}
                y1="0"
                x2={v}
                y2="200"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1={v}
                x2="200"
                y2={v}
                stroke="white"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>

        {/* ── Content ── */}
        <div className="relative flex flex-col items-center text-center">
          {/* Label pill */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/50 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
            Apply
          </span>

          {/* Heading */}
          <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.05] text-white max-w-3xl mb-6">
            Ready to Build
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c084fc, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              with AI?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg mb-10">
            The next cohort is forming now. Places are limited to{" "}
            <span className="text-white font-semibold">25 participants</span> —
            so every seat matters and fills fast. Apply today to secure your
            place and begin your onboarding.
          </p>

          {/* CTA button */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <button
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #71286F, #a855f7)",
                boxShadow: "0 0 40px rgba(113,40,111,0.4)"
              }}
            >
              Apply for the Next Cohort
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 9h10M10 5l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Already enrolled */}
            <p className="text-sm text-white/30">
              Already enrolled?{" "}
              <Link
                href="#"
                className="text-white/60 hover:text-white underline underline-offset-4 transition-colors duration-200 font-medium"
              >
                Access your participant portal →
              </Link>
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {TRUST_SIGNALS.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs text-white/30"
              >
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />
                )}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5.5"
                    stroke="#c084fc"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M3.5 6l1.7 1.7 3.3-3.4"
                    stroke="#c084fc"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
