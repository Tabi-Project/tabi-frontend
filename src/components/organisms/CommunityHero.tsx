"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Heart } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export default function CommunityHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#fdf7ff]"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      {/* Subtle Background Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#71286F 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── LEFT CONTENT: The Open Invitation ── */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white px-4 py-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
                  Join the Movement
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-[#1a1a2e] leading-[1.05] tracking-tight"
            >
              Building the{" "}
              <span className="relative inline-block text-brand-primary italic">
                Pathways
                {/* Custom SVG underline directly mapping to your code */}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 300 6"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 4 Q37.5 0 75 4 Q112.5 8 150 4 Q187.5 0 225 4 Q262.5 8 300 4"
                    stroke="#71286F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              for Women to Build, Create, and Lead.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-sm md:text-lg text-gray-600 font-light leading-relaxed max-w-xl"
            >
              More than a network. A{" "}
              <span className="font-bold text-[#1a1a2e]">sisterhood</span> of
              African women engineering sustainable impact and pushing the
              boundaries of tech. Don&apos;t just watch the future happen—help
              us write the code for it.
            </motion.p>

            {/* CTA & FOMO Mechanic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.hash = "join")}
                className="gap-2 text-sm md:text-base px-6 md:px-6"
              >
                Join Tabi <ArrowRight size={16} />
              </Button>

              {/* FOMO Pulse */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <p className="text-xs md:text-sm font-medium text-gray-700">
                  🔥 45+ women collaborating on active sprints.{" "}
                  <span className="text-gray-400 font-normal block sm:inline">
                    Join the queue.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT CONTENT: Advanced Grid with Orbit-style Floating Tags ── */}
          <div className="relative h-112.5 md:h-137.5 w-full">
            {/* Image 1: Main Focus (Woman Coding) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100"
            >
              {/* Dark gradient overlay to make the text pop */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30 z-10" />

              <Image
                src="/community/woman-teaching.jpg" 
                alt="A woman smiling while typing code during a Tabi event"
                fill 
                className="object-cover" 
                priority 
              />
            </motion.div>

            {/* Image 2: Group Shot (Learnable X Tabi) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-5 right-0 w-[55%] h-[45%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-100"
            >
              <Image
                src="/community/learnable-event.jpg" 
                alt="Women collaborating during the Learnable training"
                fill 
                className="object-cover" 
                priority 
              />
            </motion.div>

            {/* Floating Tag 1: Next Cohort */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[10%] right-[15%] z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-[#888] font-medium">
                  Next Cohort
                </p>
                <p className="text-xs md:text-sm font-bold text-[#1a1a2e]">
                  Starting Soon
                </p>
              </div>
            </motion.div>

            {/* Floating Tag 2: Dynamic Member Growth Card */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[20%] left-[-5%] md:left-[-10%] z-20 bg-[#f0faf4]/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 md:px-4 md:py-2.5 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Users size={16} />
              </div>
              <div>
                <p className="text-base md:text-xl font-extrabold text-[#1a1a2e] leading-none">
                  500+
                </p>
                <p className="text-[9px] md:text-[11px] text-[#888] mt-0.5">
                  Sisters connected
                </p>
              </div>
            </motion.div>

            {/* Floating Tag 3: Small Proof Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-[45%] left-[40%] z-20 bg-white rounded-full shadow-lg p-2 flex items-center justify-center"
            >
              <div className="bg-brand-surface text-brand-primary w-8 h-8 rounded-full flex items-center justify-center">
                <Heart size={16} fill="currentColor" />
              </div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute -z-10 top-[30%] left-[40%] w-60 h-60 rounded-full bg-brand-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
