"use client";
import { motion } from "framer-motion";
import { STEPS, STEP_META, C, GRAD } from "./shared";
import type { Step } from "./shared";

export function StepBar({ step }: { step: Step }) {
  const idx = STEPS.indexOf(step);
  const pct = (idx / (STEPS.length - 1)) * 100;

  return (
    <div className="mb-7">
      <div
        className="relative h-1 rounded-full mb-3"
        style={{ background: C.border }}
      >
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: GRAD }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 flex items-center justify-between px-0">
          {STEPS.map((s, i) => {
            const done = i < idx;
            const active = i === idx;
            return (
              <motion.div
                key={s}
                animate={{
                  width: active ? 10 : 8,
                  height: active ? 10 : 8,
                  background: done || active ? C.brand : "white",
                  borderColor: done || active ? C.brand : C.border,
                  boxShadow: active ? `0 0 0 3px rgba(113,40,111,0.18)` : "none"
                }}
                transition={{ duration: 0.25 }}
                className="rounded-full border-2 -translate-y-0"
                style={{ minWidth: active ? 10 : 8 }}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between">
        {STEPS.map((s, i) => {
          const active = i === idx;
          const done = i < idx;
          return (
            <span
              key={s}
              className="text-[9px] font-semibold uppercase tracking-wide transition-colors duration-200"
              style={{ color: active ? C.brand : done ? C.muted : C.subtle }}
            >
              {STEP_META[s].short}
            </span>
          );
        })}
      </div>
    </div>
  );
}
