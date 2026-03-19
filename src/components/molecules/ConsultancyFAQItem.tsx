"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { FAQItem } from "@/types/consultancy";

export default function ConsultancyFAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-semibold text-[#1a1a2e] leading-snug">
          {item.question}
        </span>
        <LuChevronDown
          size={18}
          className={`shrink-0 text-brand-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="text-sm text-[#666] leading-relaxed pb-5">
          {item.answer}
        </p>
      )}
    </div>
  );
}
