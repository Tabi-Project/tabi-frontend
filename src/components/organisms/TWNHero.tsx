import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { MoveRight, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const TWNHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-32 pb-20 overflow-hidden border-b border-purple-100 bg-[#FDFCFE]"
    >
      {/* Background Grid Pattern – unchanged */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#5D255C 1px, transparent 1px), linear-gradient(90deg, #5D255C 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column with staggered children */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-surface text-brand-primary text-xs font-bold uppercase tracking-[0.2em]"
              >
                Tabi Women Network
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest"
              >
                <Globe size={12} /> Pan-African Series
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-6xl md:text-7xl font-bold text-[#2D102D] leading-[0.95] tracking-tighter mb-8"
            >
              A Table for <br />
              Women who <br />
              <span className="relative inline-block">
                Lead!
                <svg
                  className="absolute -inset-2 w-[120%] h-[120%] text-brand-primary/40 -rotate-3"
                  viewBox="0 0 100 40"
                  fill="none"
                >
                  <path
                    d="M5,20 Q15,5 50,5 Q85,5 95,20 Q85,35 50,35 Q15,35 5,20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed mb-10"
            >
              A Pan-African network of women Executives, Founders, and Senior
              Leaders to align, collaborate, and open doors for one another.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <Button
                size="lg"
                className="rounded-full px-12 shadow-lg shadow-brand-primary/20 font-semibold"
              >
                Join the Directory
              </Button>
              <button className="group flex items-center gap-3 font-bold text-gray-900 hover:text-brand-primary transition-colors border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50">
                View Enugu Report
                <MoveRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            {/* Social Proof Mini-badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image
                      src={`/members/avatar-${i}.jpg`}
                      alt="Member"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <p>Joined by 50+ Executives across Nigeria & Ghana</p>
            </motion.div>
          </motion.div>

          {/* Right side – image container with scale and fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-tabi-card overflow-hidden shadow-2xl border-12 border-white rotate-1">
              <Image
                src="/events/enugu-group-shot.jpeg"
                alt="Tabi Women Network Enugu Cohort"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-white">
                <p className="text-[10px] font-black text-brand-primary uppercase tracking-tighter">
                  Next Edition: Benin Republic 🇧🇯
                </p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-3xl text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">
                      Enugu Cohort
                    </h4>
                    <p className="text-xs text-white/80">
                      8 Multi-hyphenate Leaders • Mar 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-surface rounded-full -z-10 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
