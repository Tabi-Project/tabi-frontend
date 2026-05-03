"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  Variants
} from "framer-motion";
import { Zap, BookOpen, Heart, ArrowUpRight } from "lucide-react";

function RollingCounter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CommunityPhilosophy() {
  const t = useTranslations("Community.philosophy");
  // Get pillars from translations
  const pillarsData = t.raw("pillars") as Array<{
    title: string;
    text: string;
    tag: string;
  }>;

  // Map icons and gradients (cannot be stored in JSON)
  const icons = [Zap, BookOpen, Heart];
  const gradients = [
    "from-blue-600/20 to-brand-primary/10",
    "from-brand-primary/20 to-purple-600/10",
    "from-purple-600/20 to-pink-500/10"
  ];

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "#0a0a1a",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(113, 40, 111, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(113, 40, 111, 0.12) 0%, transparent 50%)
        `
      }}
    >
      {/* Background visuals unchanged */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px"
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24"
        >
          <motion.div variants={itemVariants}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
              {t("badge")}
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              {t("headingLine1")} <br />
              <span className="text-white/40 italic">
                {t("headingHighlight")}
              </span>
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/50 font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-12"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillarsData.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-tabi-card bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-colors duration-500"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br ${gradients[index]} rounded-tabi-card`}
                />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 italic">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed text-sm lg:text-base mb-8">
                    &quot;{pillar.text}&quot;
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {t("viewImpact")}
                    </span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stat Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 p-12 rounded-[3rem] bg-linear-to-r from-brand-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
              <RollingCounter value={Number(t("statValue"))} />
            </div>
            <div className="text-sm uppercase font-bold tracking-[0.2em] text-white/40 leading-tight whitespace-pre-line">
              {t("statLabel")}
            </div>
          </div>
          <div className="h-px w-full md:w-24 bg-white/10" />
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm italic max-w-xs font-light">
              {t("statQuote")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
