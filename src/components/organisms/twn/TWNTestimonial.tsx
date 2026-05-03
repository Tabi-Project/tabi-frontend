"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TWNTestimonial() {
  const t = useTranslations("TWN.testimonial");

  return (
    <section className="relative py-32 bg-[#0F0F10] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="w-12 h-12 md:w-16 md:h-16 text-brand-primary/40 mx-auto mb-10" />

          <h3 className="text-2xl md:text-4xl font-medium italic leading-relaxed md:leading-snug mb-12 text-gray-100">
            {t("quote")}
          </h3>

          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-brand-primary/30 mb-8" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="space-y-3"
            >
              <p className="font-bold text-brand-primary text-lg tracking-tight">
                {t("attribution")}
              </p>
              <p className="text-white/30 text-[10px] uppercase font-black tracking-[0.5em]">
                {t("footer")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
