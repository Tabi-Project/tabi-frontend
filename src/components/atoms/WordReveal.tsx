"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_TABI } from "./Reveal";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Class applied to every word (e.g. "text-gradient-brand"). */
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** Re-run when the key changes (use for carousels). */
  animateOnMount?: boolean;
};

/**
 * Splits text into words that rise out of a mask one after another.
 * Screen readers get the plain sentence via aria-label.
 */
export function WordReveal({
  text,
  className,
  wordClassName = "",
  delay = 0,
  stagger = 0.045,
  animateOnMount = false
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  const trigger = animateOnMount
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.4 }
      };

  return (
    <motion.span
      aria-label={text}
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: reduced ? { opacity: 0 } : { y: "105%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: EASE_TABI }
              }
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
