"use client";
import { motion } from "framer-motion";
import { C, GRAD, fadeUp } from "../shared";
import { Cta, SectionHead } from "../ui";
import { StepBar } from "../StepBar";

interface SuccessStepProps {
  onClose: () => void;
  firstName: string;
  refId: string;
}

export function SuccessStep({ onClose, firstName, refId }: SuccessStepProps) {
  return (
    <div className="text-center py-2">
      <StepBar step="success" />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
          delay: 0.05
        }}
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{
          background: GRAD,
          boxShadow: "0 12px 36px rgba(113,40,111,0.26)"
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <motion.path
            d="M6 15l6.5 6.5L24 8"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </svg>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        className="font-extrabold tracking-tight mb-2"
        style={{ fontSize: "1.4rem", color: C.ink }}
      >
        You're all in{firstName ? `, ${firstName}` : ""}! 🎉
      </motion.h2>
      <motion.p
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="show"
        className="text-sm leading-relaxed mb-1.5 max-w-xs mx-auto"
        style={{ color: C.body }}
      >
        Your application has been received and your spot is being held. We'll be
        in touch soon.
      </motion.p>
      <motion.p
        variants={fadeUp}
        custom={2}
        initial="hidden"
        animate="show"
        className="text-xs mb-7"
        style={{ color: C.subtle }}
      >
        Reference: <strong style={{ color: C.brand }}>{refId}</strong>
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="show"
        className="rounded-2xl p-5 mb-7 text-left"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <SectionHead>What happens next</SectionHead>
        <div className="space-y-4">
          {[
            {
              icon: "👀",
              text: "Our team reviews every application personally — no shortcuts."
            },
            {
              icon: "📩",
              text: "Accepted applicants hear back by June 3rd with onboarding details."
            },
            {
              icon: "🤝",
              text: "If it's not the right fit yet, we'll guide you toward the best next step."
            }
          ].map((it, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-base shrink-0 mt-0.5">{it.icon}</span>
              <p className="text-xs leading-relaxed" style={{ color: C.body }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show">
        <Cta onClick={onClose}>Close</Cta>
      </motion.div>
    </div>
  );
}
