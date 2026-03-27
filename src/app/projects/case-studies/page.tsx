// "use client";

// import { motion } from "framer-motion";
// import { Github, ExternalLink, ArrowRight } from "lucide-react";
// import { CASE_STUDIES } from "@/constants/case-studies";
// import Image from "next/image";

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
// };

// export default function CaseStudiesPage() {
//   return (
//     <main className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
//       <style>{`
//         /* The Secret Sauce for the Hover Scroll */
//         .browser-container:hover .screenshot-img {
//           transform: translateY(calc(-100% + 440px)); /* 440px is the height of the aspect-video container */
//         }
//       `}</style>
//       {/* ── HERO ── */}
//       <section
//         className="relative w-full overflow-hidden bg-white"
//         style={{ paddingTop: "var(--nav-height, 96px)" }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           aria-hidden
//           style={{
//             backgroundImage:
//               "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(113,40,111,0.06) 0%, transparent 70%)"
//           }}
//         />

//         <div className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-20 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left: Content */}
//             <div className="flex flex-col items-start">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="mb-8"
//               >
//                 <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
//                   <span className="text-xs font-semibold text-brand-primary tracking-wide uppercase">
//                     Tabi Academy · Engineering Impact
//                   </span>
//                 </div>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#1a1a2e]"
//               >
//                 Building for{" "}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 text-brand-primary italic">
//                     The Community.
//                   </span>
//                   <svg
//                     className="absolute -bottom-2 left-0 w-full"
//                     height="6"
//                     viewBox="0 0 200 6"
//                     fill="none"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
//                       stroke="#71286F"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       opacity="0.4"
//                     />
//                   </svg>
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="mt-8 text-lg text-[#555] leading-relaxed max-w-xl font-light"
//               >
//                 Engineering scalable, open-source solutions to bridge the gap
//                 for women in Africa through technology and collaborative design.
//               </motion.p>
//             </div>

//             {/* Right: Hero Visual Card Stack (Mirroring AI Business) */}
//             <div className="relative hidden lg:flex items-center justify-center h-125">
//               {/* Main "Leader" Card */}
//               <div className="relative w-80 h-105 rounded-3xl overflow-hidden shadow-2xl border border-brand-primary/10 z-20 bg-gray-100">
//                 <Image
//                   src="/projects/case-hero.jpeg"
//                   alt="Open Source Projects"
//                   fill
//                   className="object-cover object-top"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-brand-primary/40 to-transparent" />
//               </div>

//               {/* Floating Small Card */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute -top-4 -right-4 z-30 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-52"
//               >
//                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
//                   Open Source
//                 </p>
//                 <p className="text-xl font-black text-[#1a1a2e]">
//                   3 Active MVPs
//                 </p>
//                 <div className="mt-3 flex -space-x-2">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       className="w-7 h-7 rounded-full border-2 border-white bg-brand-surface"
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ── PROJECTS ── */}
//       <section className="bg-white">
//         {CASE_STUDIES.map((project, index) => (
//           <article
//             key={project.id}
//             className={`py-24 lg:py-32 border-t border-gray-50 ${index % 2 !== 0 ? "bg-[#fafafa]" : "bg-white"}`}
//           >
//             <div
//               className={`mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
//             >
//               {/* Left — Browser Mockup with Fixed Hover Scroll */}
//               <motion.div
//                 {...fadeInUp}
//                 className="browser-container group cursor-pointer"
//               >
//                 <div
//                   className="relative rounded-2xl overflow-hidden border bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
//                   style={{ borderColor: "rgba(0,0,0,0.06)" }}
//                 >
//                   {/* Toolbar */}
//                   <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/50 relative z-20">
//                     <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
//                     <div className="flex-1 mx-4 h-5 rounded-full bg-gray-200/30" />
//                   </div>

//                   {/* Scrollable Area */}
//                   <div className="relative h-110 overflow-hidden bg-gray-50">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="screenshot-img w-full absolute top-0 left-0 transition-transform duration-[5000ms] ease-in-out"
//                     />
//                     <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent pointer-events-none" />
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Right — Content */}
//               <motion.div {...fadeInUp}>
//                 <div className="flex items-center gap-3 mb-6">
//                   <span
//                     className="w-8 h-0.5"
//                     style={{ background: project.themeColor }}
//                   />
//                   <span
//                     className="text-[10px] font-black uppercase tracking-[0.3em]"
//                     style={{ color: project.themeColor }}
//                   >
//                     Project 0{index + 1}
//                   </span>
//                 </div>

//                 <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
//                   {project.title}
//                 </h2>
//                 <p className="text-base text-[#666] leading-relaxed mb-8">
//                   {project.description}
//                 </p>

//                 <div className="grid grid-cols-2 gap-4 mb-8">
//                   {project.stats.map((s) => (
//                     <div
//                       key={s.label}
//                       className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
//                     >
//                       <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
//                         {s.label}
//                       </p>
//                       <p className="text-sm font-bold text-[#1a1a2e]">
//                         {s.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-10">
//                   {project.stack.map((t) => (
//                     <span
//                       key={t}
//                       className="px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 border border-gray-200 bg-white"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap items-center gap-4">
//                   <a
//                     href={project.links.live}
//                     target="_blank"
//                     className="px-8 py-3.5 rounded-full text-sm font-bold text-white shadow-lg transition-transform hover:scale-95"
//                     style={{ background: project.themeColor }}
//                   >
//                     Launch App
//                   </a>
//                   <a
//                     href={project.links.github}
//                     target="_blank"
//                     className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-primary transition-colors"
//                   >
//                     <Github size={18} /> Documentation
//                   </a>
//                 </div>
//               </motion.div>
//             </div>
//           </article>
//         ))}
//       </section>
//       { /* ── CLOSING CTA ── */}
//       <section
//         className="relative px-6 py-32 text-center"
//         style={{
//           background: "linear-gradient(160deg, #0f0a1a 0%, #71286F 100%)"
//         }}
//       >
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h2 className="font-black text-white text-5xl lg:text-7xl mb-8 tracking-tight">
//             Ready to <span className="opacity-40">Contribute?</span>
//           </h2>
//           <p className="text-white/60 mb-12 max-w-xl mx-auto">
//             These are open-source projects designed to help women. We are
//             looking for engineers to scale these into production-grade community
//             tools.
//           </p>
//           <a
//             href="https://github.com/tabi-project"
//             target="_blank"
//             className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold backdrop-blur-md hover:bg-white/20 transition-all"
//           >
//             <Github size={20} /> View the Projects on GitHub
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/constants/case-studies";
import Image from "next/image";

// Fixed Type Error: Using Variants type ensures [number, number, number, number] is recognized as a cubic-bezier
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <style>{`
        /* The Secret Sauce for the Hover Scroll */
        .browser-container:hover .screenshot-img {
          transform: translateY(calc(-100% + 440px)); 
        }
        
        /* Smooth transition for the screenshot */
        .screenshot-img {
          transition: transform 6000ms ease-in-out;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden bg-white"
        style={{ paddingTop: "var(--nav-height, 96px)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(113,40,111,0.06) 0%, transparent 70%)"
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-xs font-semibold text-brand-primary tracking-wide uppercase">
                    Tabi Academy · Engineering Impact
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#1a1a2e]"
              >
                Building for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-primary italic">
                    The Community.
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                      stroke="#71286F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-lg text-[#555] leading-relaxed max-w-xl font-light"
              >
                Engineering scalable, open-source solutions to bridge the gap
                for women in Africa through technology and collaborative design.
              </motion.p>
            </div>

            {/* Right: Hero Visual Card Stack */}
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full h-full z-20"
              >
                <Image
                  src="/projects/hero-composite.png" // Ensure this image is in your /public folder
                  alt="Open Source Projects Stack"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="bg-white">
        {CASE_STUDIES.map((project, index) => (
          <article
            key={project.id}
            className={`py-24 lg:py-32 border-t border-gray-50 ${index % 2 !== 0 ? "bg-[#fafafa]" : "bg-white"}`}
          >
            <div
              className={`mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Left — Browser Mockup */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                className="browser-container group cursor-pointer"
              >
                <div
                  className="relative rounded-2xl overflow-hidden border bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                  style={{ borderColor: "rgba(0,0,0,0.06)" }}
                >
                  {/* Toolbar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/50 relative z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                    <div className="flex-1 mx-4 h-5 rounded-full bg-gray-200/30" />
                  </div>

                  {/* Scrollable Area */}
                  <div className="relative h-[440px] overflow-hidden bg-gray-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="screenshot-img w-full absolute top-0 left-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Right — Content */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-8 h-0.5"
                    style={{ background: project.themeColor }}
                  />
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.3em]"
                    style={{ color: project.themeColor }}
                  >
                    Project 0{index + 1}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                  {project.title}
                </h2>
                <p className="text-base text-[#666] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                    >
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        {s.label}
                      </p>
                      <p className="text-sm font-bold text-[#1a1a2e]">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 border border-gray-200 bg-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="px-8 py-3.5 rounded-full text-sm font-bold text-white shadow-lg transition-transform hover:scale-95"
                    style={{ background: project.themeColor }}
                  >
                    Launch App
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    <Github size={18} /> Documentation
                  </a>
                </div>
              </motion.div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CLOSING CTA ── */}
      <section
        className="relative px-6 py-32 text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0f0a1a 0%, #71286F 100%)"
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-black text-white text-5xl lg:text-7xl mb-8 tracking-tight">
            Ready to <span className="opacity-40">Contribute?</span>
          </h2>
          <p className="text-white/60 mb-12 max-w-xl mx-auto">
            These are open-source projects designed to help women. We are
            looking for engineers to scale these into production-grade community
            tools.
          </p>
          <a
            href="https://github.com/tabi-project"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <Github size={20} /> View the Projects on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}