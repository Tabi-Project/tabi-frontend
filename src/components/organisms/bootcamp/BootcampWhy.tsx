// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import { useTranslations } from "next-intl";

// export default function BootcampWhy() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   const t = useTranslations("Bootcamp.whyThisExists");
//   const problems = t.raw("problems") as string[];
//   const solutions = t.raw("solutions") as string[];

//   return (
//     <section className="w-full bg-[#fdf7ff] relative overflow-hidden py-24 md:py-32">
//       {/* ... stripe accent unchanged ... */}
//       <div
//         className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(45deg, #71286F, #71286F 2px, transparent 2px, transparent 24px)"
//         }}
//       />
//       <div
//         className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto relative z-10"
//         ref={ref}
//       >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-5"
//         >
//           {t("badge")}
//         </motion.p>

//         <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
//           {/* Left */}
//           <div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.1 }}
//               className="font-bold text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight text-tabi-ink leading-tight mb-6"
//             >
//               {t("heading")}{" "}
//               <span
//                 className="bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
//                 }}
//               >
//                 {t("headingHighlight")}
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.18 }}
//               className="text-base text-[#666] leading-relaxed mb-8 max-w-sm"
//             >
//               {t("description")}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3 }}
//               className="relative rounded-2xl overflow-hidden"
//               style={{ height: "280px" }}
//             >
//               <Image
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80"
//                 alt="Developer learning"
//                 fill
//                 className="object-cover"
//               />
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to top, rgba(26,26,46,0.85) 0%, transparent 60%)"
//                 }}
//               />
//               <div className="absolute bottom-0 left-0 p-6">
//                 {/* Quote text with <br/> handled by t.rich */}
//                 <p className="text-white font-bold text-lg leading-tight">
//                   {t.rich("quoteText", {
//                     br: () => <br />
//                   })}
//                 </p>
//                 <p className="text-white/60 text-xs mt-1">
//                   {t("quoteCaption")}
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right */}
//           <div className="flex flex-col gap-5">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.28 }}
//               className="rounded-2xl border border-red-100 bg-white p-7"
//               style={{ boxShadow: "0 4px 24px rgba(239,68,68,0.06)" }}
//             >
//               <p className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-5">
//                 {t("problemCardTitle")}
//               </p>
//               <div className="space-y-4">
//                 {problems.map((p, i) => (
//                   <motion.div
//                     key={p}
//                     initial={{ opacity: 0, x: 10 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.36 + i * 0.07 }}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="text-red-400 shrink-0 mt-0.5 text-sm">
//                       ✕
//                     </span>
//                     <p className="text-sm text-[#555] leading-relaxed">{p}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.38 }}
//               className="rounded-2xl border p-7"
//               style={{
//                 borderColor: "rgba(113,40,111,0.18)",
//                 background:
//                   "linear-gradient(135deg, rgba(113,40,111,0.04), rgba(192,64,160,0.04))",
//                 boxShadow: "0 4px 24px rgba(113,40,111,0.07)"
//               }}
//             >
//               <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-5">
//                 {t("solutionCardTitle")}
//               </p>
//               <div className="space-y-4">
//                 {solutions.map((s, i) => (
//                   <motion.div
//                     key={s}
//                     initial={{ opacity: 0, x: 10 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.46 + i * 0.07 }}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="shrink-0 mt-0.5 text-sm font-bold text-brand-primary">
//                       ✓
//                     </span>
//                     <p className="text-sm text-[#555] leading-relaxed">{s}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.7 }}
//               className="rounded-xl px-5 py-3 flex items-center gap-3"
//               style={{
//                 background: "rgba(113,40,111,0.06)",
//                 border: "1px solid rgba(113,40,111,0.12)"
//               }}
//             >
//               <span className="text-xl text-brand-primary">✦</span>
//               {/* bottomQuote with <strong> handled by t.rich */}
//               <p className="text-sm text-[#444] leading-relaxed">
//                 {t.rich("bottomQuote", {
//                   strong: (chunks) => <strong>{chunks}</strong>
//                 })}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, X } from "lucide-react";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

export default function BootcampWhy() {
  const t = useTranslations("Bootcamp.whyThisExists");
  const problems = t.raw("problems") as string[];
  const solutions = t.raw("solutions") as string[];
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();
  // next-intl rich text can't parse self-closing <br/>, so split it ourselves
  const quoteLines = (t.raw("quoteText") as string).split(/<br\s*\/?>/i).map((s) => s.trim());

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              title={
                <>
                  {t("heading")} <GradientText>{t("headingHighlight")}</GradientText>
                </>
              }
              description={t("description")}
            />

            <Parallax offset={30} className="mt-10">
              <Reveal scale={0.95}>
                <div className="relative h-[300px] overflow-hidden rounded-[2rem] border-[3px] border-brand-primary">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tabi-night/90 via-tabi-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-7">
                    <p className="text-2xl font-bold leading-tight text-white">
                      {quoteLines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{t("quoteCaption")}</p>
                  </div>
                  <Sparkle className="absolute right-6 top-6" size={30} />
                </div>
              </Reveal>
            </Parallax>
          </div>

          {/* Right — problems get struck out, then the fixes check in */}
          <div className="flex flex-col gap-5">
            <Reveal x={30} y={0}>
              <div className="rounded-[2rem] bg-tabi-card/80 p-7 sm:p-8">
                <p className="mb-5 text-sm font-medium text-tabi-body">{t("problemCardTitle")}</p>
                <ul className="space-y-4">
                  {problems.map((p, i) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#C2416B]">
                        <X size={13} strokeWidth={3} />
                      </span>
                      <span className="relative text-base text-tabi-body">
                        {p}
                        <motion.span
                          aria-hidden
                          className="absolute left-0 top-1/2 h-px w-full origin-left bg-[#C2416B]/60"
                          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.22, ease: EASE_TABI }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal x={30} y={0} delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] bg-tabi-pink p-7 sm:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-brand-orchid/20 blur-2xl" />
                <p className="relative mb-5 text-sm font-medium text-brand-primary">{t("solutionCardTitle")}</p>
                <ul className="relative space-y-4">
                  {solutions.map((s, i) => (
                    <motion.li
                      key={s}
                      className="flex items-start gap-3"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.15, ease: EASE_TABI }}
                    >
                      <motion.span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, damping: 14, delay: 1.25 + i * 0.15 }}
                      >
                        <Check size={13} strokeWidth={3} />
                      </motion.span>
                      <span className="text-base text-tabi-ink">{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2} y={16}>
              <div className="flex items-center gap-3 rounded-2xl bg-tabi-cream px-5 py-4">
                <Sparkle size={20} still />
                <p className="text-sm leading-relaxed text-tabi-ink">
                  {t.rich("bottomQuote", { strong: (chunks) => <strong>{chunks}</strong> })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 text-center" y={16}>
          <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
            {t("ctaButton")}
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Reveal>
      </div>

      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
