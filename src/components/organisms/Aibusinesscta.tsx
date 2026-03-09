"use client";

import { useState } from "react";
import Link from "next/link";

const TRUST_SIGNALS = [
  "No technical background required",
  "Live, expert-facilitated",
  "Fully virtual",
  "Certified on completion"
];

function RegistrationModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          style={{ maxWidth: 680, maxHeight: "90vh" }}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0ebf8] shrink-0">
            <div>
              <h3 className="text-base font-extrabold text-[#1a1a2e]">
                Apply for the Next Cohort
              </h3>
              <p className="text-xs text-[#888] mt-0.5">
                AI for Businesses Programme — Limited to 25 participants
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f3e8ff] text-[#888] hover:text-[#71286F] transition-colors duration-200 shrink-0"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Google Form iframe */}
          <div className="flex-1 overflow-y-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKTfMAkANZmZdJZ8aAS7-FCXl6skZ6uK84uWdDhpCH0F3lAw/viewform?embedded=true"
              width="100%"
              height="2434"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="AI for Businesses Registration Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AIBusinessCTA() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section id="register" className="w-full bg-[#0d0d0d] overflow-hidden">
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
              <span className="text-white font-semibold">25 participants</span>{" "}
              — so every seat matters and fills fast. Apply today to secure your
              place and begin your onboarding.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <button
                onClick={() => setFormOpen(true)}
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

      {/* Registration form modal */}
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
