"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "@/components/atoms/CountUp";
import { Marquee } from "@/components/atoms/Marquee";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { withBasePath } from "@/constants/paths";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.73.44 3.4 1.28 4.88L2 22l5.22-1.28A9.91 9.91 0 0012.004 22c5.52 0 10-4.48 10-10S17.524 2 12.004 2zM12 20.35a8.31 8.31 0 01-4.24-1.15l-.3-.18-3.14.77.79-3.07-.2-.31a8.332 8.332 0 01-1.21-4.4c0-4.61 3.75-8.36 8.36-8.36 4.61 0 8.36 3.75 8.36 8.36s-3.75 8.35-8.36 8.35zm4.61-6.31c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.5-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.58.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );
}

// Partner logos – same as used in the Partners component
const PARTNERS = [
  { id: "yip", src: withBasePath("/partners/yip.png"), alt: "YIP – Yebox Internship Program" },
  { id: "gutsy", src: withBasePath("/partners/gutsy-woman.png"), alt: "GIV The Gutsy Woman" },
  { id: "yebox", src: withBasePath("/partners/yebox.png"), alt: "Yebox Technologies" },
  { id: "genesys", src: withBasePath("/partners/genesys.png"), alt: "Genesys" },
  { id: "risevest", src: withBasePath("/partners/rise.png"), alt: "Rise Academy" },
  { id: "cchub", src: withBasePath("/partners/cchub.jpeg"), alt: "Co-creation HUB Africa" }
];

const STAT_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function CommunityCTA() {
  const t = useTranslations("Community.cta");
  const stats = t.raw("stats") as Array<{ label: string; value: string }>;

  return (
    <section id="join" className="scroll-mt-24 bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Stagger className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.08}>
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label} hoverLift={4}>
              <div className={`rounded-[1.75rem] p-6 sm:p-7 ${STAT_TINTS[i % STAT_TINTS.length]}`}>
                <p className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-none text-tabi-ink">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm text-tabi-body">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal scale={0.97} y={40}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary px-6 py-14 text-center text-white sm:px-12 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_100%_0%,rgba(208,96,176,0.55)_0%,transparent_60%),radial-gradient(60%_60%_at_0%_100%,rgba(42,13,41,0.85)_0%,transparent_60%)]"
            />
            <Sparkle className="absolute left-[10%] top-12" size={34} />
            <Sparkle className="absolute bottom-14 right-[12%]" size={20} delay={1.2} color="#fff" />

            {/* Partner logos on a white strip so they stay legible */}
            <div className="relative mx-auto mb-14 max-w-4xl rounded-full bg-white py-4">
              <Marquee duration={24}>
                {PARTNERS.map((partner) => (
                  <div key={partner.id} className="relative mx-8 h-9 w-24 shrink-0 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <Image src={partner.src} alt={partner.alt} fill sizes="96px" className="object-contain" />
                  </div>
                ))}
              </Marquee>
            </div>

            <h2 className="relative mx-auto max-w-3xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.08]">
              {t("headingLine1")}{" "}
              <span className="bg-gradient-to-r from-[#F9C8EE] via-white to-tabi-tan bg-clip-text text-transparent">
                {t("headingHighlight")}
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/75 md:text-lg">{t("description")}</p>

            <motion.a
              href="https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: EASE_TABI }}
              className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-lg font-bold text-brand-primary animate-pulse-ring transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              {t("joinButton")}
              <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}




// "use client";

// import { useTranslations } from "next-intl";
// import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";

// function WhatsAppIcon({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.73.44 3.4 1.28 4.88L2 22l5.22-1.28A9.91 9.91 0 0012.004 22c5.52 0 10-4.48 10-10S17.524 2 12.004 2zM12 20.35a8.31 8.31 0 01-4.24-1.15l-.3-.18-3.14.77.79-3.07-.2-.31a8.332 8.332 0 01-1.21-4.4c0-4.61 3.75-8.36 8.36-8.36 4.61 0 8.36 3.75 8.36 8.36s-3.75 8.35-8.36 8.35zm4.61-6.31c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.5-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.58.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3z" />
//     </svg>
//   );
// }

// // Rolling counter – unchanged logic
// function RollingCounter({ value }: { value: string }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => {
//     const formatted = Math.round(latest).toLocaleString();
//     return value.includes("+") ? `${formatted}+` : formatted;
//   });

//   useEffect(() => {
//     if (isInView) {
//       animate(count, numericValue, { duration: 2, ease: [0.16, 1, 0.3, 1] });
//     }
//   }, [isInView, count, numericValue]);

//   return <motion.span ref={ref}>{rounded}</motion.span>;
// }

// // Partners list – keep static (proper nouns)
// const PARTNERS = [
//   { id: "yip", name: "YIP", alt: "YIP – Yebox Internship Program" },
//   { id: "gutsy", name: "GUTSY WOMAN", alt: "GIV The Gutsy Woman" },
//   { id: "yebox", name: "YEBOX", alt: "Yebox Technologies" },
//   { id: "genesys", name: "GENESYS", alt: "Genesys" },
//   { id: "risevest", name: "RISEVEST", alt: "Rise Academy" },
//   { id: "cchub", name: "CCHUB", alt: "Co-creation HUB Africa" }
// ];

// export default function CommunityCTA() {
//   const t = useTranslations("Community.cta");
//   const stats = t.raw("stats") as Array<{ label: string; value: string }>;

//   return (
//     <section id="join" className="pb-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-20">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden mb-8">
//           {stats.map((stat, i) => (
//             <div key={i} className="bg-white p-8 text-center">
//               <p className="text-3xl font-black text-tabi-ink mb-1">
//                 <RollingCounter value={stat.value} />
//               </p>
//               <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 text-center text-white"
//           style={{
//             background: "linear-gradient(160deg, #0f0a1a 0%, #71286F 100%)"
//           }}
//         >
//           <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

//           {/* Partner banner */}
//           <div className="relative mb-14 overflow-hidden py-3">
//             <motion.div
//               className="flex gap-16 items-center whitespace-nowrap"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
//             >
//               {[...PARTNERS, ...PARTNERS].map((partner, index) => (
//                 <div
//                   key={`${partner.id}-${index}`}
//                   className="flex items-center"
//                 >
//                   <span className="text-lg font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
//                     {partner.name}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             <h2 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight">
//               {t("headingLine1")} <br />
//               <span className="text-white/40 italic">
//                 {t("headingHighlight")}
//               </span>
//             </h2>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="max-w-2xl mx-auto text-white/70 text-base md:text-lg font-light mb-12"
//           >
//             {t("description")}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//             className="flex flex-col items-center gap-6"
//           >
//             <motion.a
//               href="https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo"
//               target="_blank"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-primary rounded-full font-bold text-lg transition-colors"
//             >
//               {t("joinButton")}{" "}
//               <WhatsAppIcon className="w-6 h-6 fill-current" />
//             </motion.a>

//             {/* Uncomment if you want the next cohort indicator back
//             <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
//               <Star size={12} className="text-yellow-400 fill-current" />
//               {t("nextCohort")}
//             </div>
//             */}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }