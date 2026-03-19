import FocusAreaCard from "@/components/atoms/FocusAreaCard";
import { FOCUS_AREAS } from "@/constants/consultancy";

export default function WhatYouGet() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Section header — split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 items-end mb-16">
          <div>
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#F3E8FF" }}
            >
              What You Get
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1a1a2e] leading-snug">
              One session.{" "}
              <span className="text-brand-primary">Real impact.</span>
            </h2>
          </div>
          <p className="text-base text-[#666] leading-relaxed lg:pb-1">
            Your consultancy session is tailored to your specific needs. Our
            consultants cover four key areas that matter most to growing
            businesses — you choose what to focus on.
          </p>
        </div>

        {/* ── Cards — 2 col on tablet, 4 on desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOCUS_AREAS.map((area, i) => (
            <FocusAreaCard key={area.id} area={area} index={i} />
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div
          className="mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "#F3E8FF" }}
        >
          <p className="text-sm font-semibold text-[#1a1a2e] leading-snug max-w-lg">
            Not sure which area to focus on?{" "}
            <span className="text-brand-primary">
              Tell us your biggest challenge in the application form
            </span>{" "}
            and we&apos;ll match you with the right consultant.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            {["📊", "💻", "📣", "💰"].map((emoji, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-base shadow-sm"
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
