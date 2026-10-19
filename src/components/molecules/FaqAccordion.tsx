"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE_TABI } from "@/components/atoms/Reveal";

export type FaqItem = {
  q: string;
  a: ReactNode;
  tag?: string;
};

const TAG_TINTS = [
  "bg-tabi-pink text-brand-primary",
  "bg-tabi-mint text-[#2F8F5B]",
  "bg-tabi-cream text-[#9A5B1E]",
  "bg-tabi-lilac/70 text-brand-primary",
  "bg-tabi-peach text-tabi-brown"
];

type FaqAccordionProps = {
  items: FaqItem[];
  /** Optional mapper for the visible tag label (e.g. a translation). */
  tagLabel?: (tag: string) => string;
  defaultOpen?: number | null;
  /** Render on a dark (plum) surface. */
  inverted?: boolean;
  numbered?: boolean;
};

/** Numbered FAQ list with smooth height animation and brand-tinted topic chips. */
export default function FaqAccordion({
  items,
  tagLabel,
  defaultOpen = 0,
  inverted = false,
  numbered = true
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduced = useReducedMotion();

  // Stable tint per distinct tag
  const tags = Array.from(new Set(items.map((i) => i.tag).filter(Boolean))) as string[];
  const tintFor = (tag: string) => TAG_TINTS[tags.indexOf(tag) % TAG_TINTS.length];

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        // Derived from the question so server and client always agree (no useId drift)
        const slug = item.q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32);
        const panelId = `faq-${i}-${slug}-panel`;
        const buttonId = `faq-${i}-${slug}-button`;
        return (
          <motion.li
            key={item.q}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE_TABI }}
            className={`overflow-hidden rounded-[1.5rem] transition-colors duration-300 ${
              inverted
                ? isOpen
                  ? "bg-white/[0.09] ring-1 ring-white/15"
                  : "bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07]"
                : isOpen
                  ? "bg-tabi-blush ring-1 ring-brand-primary/15"
                  : "bg-tabi-card/70 hover:bg-tabi-blush"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-start gap-4 px-6 py-5 text-left sm:px-7"
            >
              {numbered && (
                <span
                  className={`mt-0.5 w-7 shrink-0 text-sm font-bold tabular-nums transition-colors ${
                    isOpen ? (inverted ? "text-tabi-tan" : "text-brand-primary") : inverted ? "text-white/30" : "text-tabi-body/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2">
                <span className={`text-base font-bold leading-snug sm:text-lg ${inverted ? "text-white" : "text-tabi-ink"}`}>
                  {item.q}
                </span>
                {item.tag && (
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tintFor(item.tag)}`}>
                    {tagLabel ? tagLabel(item.tag) : item.tag}
                  </span>
                )}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: EASE_TABI }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen
                    ? "bg-brand-primary text-white"
                    : inverted
                      ? "bg-white/10 text-white"
                      : "bg-white text-brand-primary shadow-sm"
                }`}
              >
                <Plus size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE_TABI }}
                >
                  <div
                    className={`pb-6 pr-6 text-sm leading-[1.8] sm:text-base sm:pr-16 ${numbered ? "pl-[4.25rem] sm:pl-[4.75rem]" : "pl-6 sm:pl-7"} ${
                      inverted ? "text-white/70" : "text-tabi-body"
                    }`}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
