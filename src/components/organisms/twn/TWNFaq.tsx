"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({
  faq,
  isOpen,
  onClick
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isOpen ? "ring-1 ring-brand-primary/10" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer text-left focus:outline-none"
      >
        <span
          className={`font-bold transition-colors duration-300 ${isOpen ? "text-brand-primary" : "text-[#1a1a2e]"} pr-4`}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-brand-primary shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TWNFaq() {
  const t = useTranslations("TWN.faq");
  const faqs = t.raw("items") as Array<{ q: string; a: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
            {t("badge")}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1a1a2e]">
            {t("heading")}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            {t("contactText")}{" "}
            <a
              href={`mailto:${t("contactEmail")}`}
              className="text-brand-primary font-bold hover:underline"
            >
              {t("contactEmail")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
