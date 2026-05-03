"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Code2, Users, HeartHandshake, ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HowWeThrive() {
  const t = useTranslations("Community.howWeThrive");
  const pillarsData = t.raw("pillars") as Array<{
    title: string;
    desc: string;
  }>;

  // Map icons and gradients (cannot be stored in JSON)
  const icons = [Code2, Users, HeartHandshake];
  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-500",
    "from-brand-primary to-orange-400"
  ];

  return (
    <section className="relative py-32 bg-[#fcfcfd] overflow-hidden">
      {/* Background visuals unchanged */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
              {t("badge")}
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-[#1a1a2e] tracking-tight leading-none">
              {t("headingPart1")}{" "}
              <span className="text-brand-primary italic">
                {t("headingHighlight")}
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-gray-500 text-sm md:text-base font-light border-l-2 border-brand-primary/30 pl-6"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillarsData.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -12 }}
                className="group relative bg-white/60 backdrop-blur-xl border border-white hover:border-brand-primary/20 rounded-tabi-card p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(113,40,111,0.05)] transition-all duration-500 flex flex-col justify-between min-h-100"
              >
                <div className="absolute inset-0 rounded-tabi-card bg-linear-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div>
                  <div className="relative w-14 h-14 mb-8">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${gradients[i]} rounded-2xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500`}
                    />
                    <div className="relative w-full h-full bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-700 group-hover:text-brand-primary transition-colors duration-500">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-brand-primary transition-colors duration-500">
                  <span>{t("exploreText")}</span>
                  <ArrowUpRight
                    size={14}
                    className="translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </div>
                <span className="absolute -top-6 -right-2 text-[7rem] font-black text-[#1a1a2e]/2 group-hover:text-[#1a1a2e]/5 transition-colors duration-500 select-none font-sans">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
