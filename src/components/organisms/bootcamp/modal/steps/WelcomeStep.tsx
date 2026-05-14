"use client";
import { motion } from "framer-motion";
import { C, GRAD, fadeUp } from "../shared";
import { X, Tag, Cta } from "../ui";
import { StepBar } from "../StepBar";

const PROCESS = [
  {
    icon: "📋",
    n: "01",
    title: "Tell us about yourself",
    body: "A short form so we can get to know your background and goals."
  },
  {
    icon: "💳",
    n: "02",
    title: "Reserve your place",
    body: "A ₦5,000 commitment fee confirms your spot after you've applied."
  },
  {
    icon: "💬",
    n: "03",
    title: "Send your payment receipt",
    body: "Drop it in our WhatsApp and we'll confirm your place right away."
  }
];

export function WelcomeStep({
  onNext,
  onClose
}: {
  onNext: () => void;
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col gap-1.5">
          <Tag>Cohort 1 · June 2026</Tag>
        </div>
        <X onClose={onClose} />
      </div>
      <StepBar step="welcome" />

      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        className="mb-6"
      >
        <h2
          className="font-extrabold leading-[1.15] tracking-tight mb-2.5"
          style={{ fontSize: "clamp(1.35rem, 4vw, 1.55rem)", color: C.ink }}
        >
          You're one step away from
          <br />
          <span
            style={{
              background: GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            building something real.
          </span>
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: C.body }}>
          The Full-Stack JS Bootcamp is a 4-week live programme for developers
          ready to go from consuming tutorials to shipping real products.
        </p>
      </motion.div>

      <div className="space-y-2.5 mb-6">
        {PROCESS.map((p, i) => (
          <motion.div
            key={p.n}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            animate="show"
            className="flex items-start gap-3.5 px-4 py-3.5 rounded-2xl"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
              style={{
                background: "white",
                border: `1px solid ${C.border}`,
                boxShadow: "0 1px 6px rgba(113,40,111,0.07)"
              }}
            >
              {p.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-sm leading-snug mb-0.5"
                style={{ color: C.ink }}
              >
                {p.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                {p.body}
              </p>
            </div>
            <span
              className="text-[10px] font-black shrink-0 pt-0.5"
              style={{ color: C.subtle }}
            >
              {p.n}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <span className="shrink-0 text-base">🛡️</span>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Every application is reviewed personally by the Tabi team. No bots, no
          automated filtering.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show">
        <Cta onClick={onNext}>Let's get started →</Cta>
        <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
          About 5 minutes · No payment needed to start
        </p>
      </motion.div>
    </div>
  );
}
