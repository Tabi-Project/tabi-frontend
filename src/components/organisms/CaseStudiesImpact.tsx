"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { IMPACT_STATS } from "@/constants/case-studies";
import { useEffect, useRef } from "react";

// --- Animated Number Component ---
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Strip non-numeric characters (like + or ,) for the animation logic
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, ""); // Keep the "+" or ","

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(
    spring,
    (current) => Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function CaseStudiesImpact() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* COLLABORATION HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Strategic Collaboration
            </span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-xs font-bold text-brand-primary">
              Rise Academy by Risevest × Tabi Academy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1]"
          >
            Engineering for{" "}
            <span className="text-brand-primary italic">
              Sustainable Change.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            By combining Risevest&apos;s commitment to financial growth with
            Tabi Academy&apos;s engineering excellence, we are building
            production-grade tools that solve real-world barriers for African
            women.
          </motion.p>
        </div>

        {/* IMPACT GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.21, 1.11, 0.81, 0.99] // Subtle spring-back feel
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-4xl bg-linear-to-b from-white/10 to-transparent border border-white/10 group hover:border-brand-primary/50 transition-all duration-500"
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tighter">
                <AnimatedNumber value={stat.value} />
              </div>

              <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-2">
                {stat.label}
              </p>

              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
