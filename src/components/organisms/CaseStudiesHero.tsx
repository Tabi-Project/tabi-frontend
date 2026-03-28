// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function CaseStudiesHero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white pt-24 lg:pt-32">
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(113,40,111,0.06) 0%, transparent 70%)"
//         }}
//       />
//       <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="mb-8"
//             >
//               <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
//                 <span className="text-xs font-semibold text-brand-primary uppercase">
//                   Engineering Impact
//                 </span>
//               </div>
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-5xl lg:text-7xl font-extrabold text-[#1a1a2e] leading-tight"
//             >
//               Building for{" "}
//               <span className="italic text-brand-primary">Women.</span>
//             </motion.h1>
//             <p className="mt-8 text-lg text-gray-600 max-w-xl font-light">
//               A collaborative IWD sprint with Rise Academy by Risevest X Tabi
//               Academy, engineering scalable solutions to bridge the gap for
//               women in Africa.
//             </p>
//           </div>
//           <div className="relative hidden lg:block h-125">
//             <Image
//               src="/projects/hero-composite.png"
//               alt="Hero"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudiesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 lg:pt-20">
      {/* ── BACKGROUND ELEMENTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#71286F 0.5px, transparent 0.5px)`,
            backgroundSize: "24px 24px"
          }}
        />

        {/* Large Faded Accent Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap">
          <h2 className="text-[20rem] font-black leading-none">
            IMPACT IMPACT IMPACT
          </h2>
        </div>

        {/* Animated Blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[10%] w-100 h-100 rounded-full bg-brand-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[5%] w-75 h-75 rounded-full bg-blue-500/5 blur-[80px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT CONTENT ── */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-primary/20 bg-brand-surface px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  Engineering Impact · 2026
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-[5.5rem] font-extrabold text-[#1a1a2e] leading-[0.95] tracking-tight"
            >
              Building for{" "}
              <span className="relative inline-block italic text-brand-primary">
                Women.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3 overflow-visible"
                >
                  <path
                    d="M0 5 Q50 0 100 5 T200 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  {/* Mini badges for the partners */}
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    R
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-primary border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                    T
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Rise Academy <span className="mx-1 text-gray-300">×</span>{" "}
                  Tabi Academy
                </p>
              </div>

              <p className="text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                A collaborative IWD sprint with Rise Academy by Risevest X Tabi
                Academy, engineering scalable solutions to bridge the gap for
                women in Africa.
              </p>

              <div className="mt-10 flex items-center gap-6">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-px h-12 bg-linear-to-b from-brand-primary to-transparent" />
                  <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold rotate-180 [writing-mode:vertical-lr]">
                    Scroll
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT VISUAL ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-150 group"
          >
            {/* Outer Decorative Ring */}
            <div className="absolute inset-0 rounded-full border border-brand-primary/5 scale-110 group-hover:scale-125 transition-transform duration-1000" />

            <Image
              src="/projects/hero-composite.png"
              alt="Hero Composite"
              fill
              className="object-contain relative z-10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}