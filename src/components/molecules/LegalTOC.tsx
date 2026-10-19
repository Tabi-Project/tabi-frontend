"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LegalSection } from "@/types/legal";

/** Sticky table of contents that highlights the section currently in view. */
export default function LegalTOC({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState<string | number | null>(sections[0]?.number ?? null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(`section-${s.number}`))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id.replace("section-", ""));
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-32 rounded-[1.75rem] bg-tabi-blush p-6">
        <p className="mb-4 text-sm font-medium text-tabi-body">Contents</p>
        <nav className="relative space-y-0.5">
          {sections.map((s) => {
            const isActive = String(active) === String(s.number);
            return (
              <a
                key={s.number}
                href={`#section-${s.number}`}
                className={`relative flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-brand-primary" : "text-tabi-body hover:text-brand-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="legal-toc-active"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative mt-0.5 w-5 shrink-0 text-xs font-bold">{s.number}.</span>
                <span className="relative leading-snug">{s.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
