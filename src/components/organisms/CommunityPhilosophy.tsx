// "use client";

// import { useEffect, useRef } from "react";
// import {
//   motion,
//   useInView,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   animate
// } from "framer-motion";
// import { Zap, BookOpen, Heart, ArrowUpRight } from "lucide-react";

// // ── CUSTOM COUNTER COMPONENT ──
// function RollingCounter({ value }: { value: number }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) =>
//     Math.round(latest).toLocaleString()
//   );

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, value, {
//         duration: 2.5,
//         ease: [0.16, 1, 0.3, 1] // Premium quint ease
//       });
//       return controls.stop;
//     }
//   }, [isInView, count, value]);

//   return <motion.span ref={ref}>{rounded}</motion.span>;
// }

// const PILLARS = [
//   {
//     title: "Innovate & Engineer",
//     text: "We provide the resources and funding to implement solutions for real-world challenges. We don't just build temporary fixes; we engineer systems that empower the next generation.",
//     icon: Zap,
//     tag: "Innovate",
//     gradient: "from-blue-600/20 to-brand-primary/10"
//   },
//   {
//     title: "Sustainable Education",
//     text: "Bridging the gap in the ecosystem starts with access. We equip underprivileged, willing individuals with high-level digital skills and AI-driven business strategies.",
//     icon: BookOpen,
//     tag: "Educate & Empower",
//     gradient: "from-brand-primary/20 to-purple-600/10"
//   },
//   {
//     title: "Unite & Lead",
//     text: "We are on a mission to train 5,000 African women. We don't compete; we lift. Through active collaboration, we build the key, create the path, and lead the way.",
//     icon: Heart,
//     tag: "Unite",
//     gradient: "from-purple-600/20 to-pink-500/10"
//   }
// ];

// // ── ANIMATION VARIANTS ──
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
//   }
// };

// export default function CommunityPhilosophy() {
//   return (
//     <section
//       className="relative py-32 overflow-hidden"
//       style={{
//         background: "#0a0a1a",
//         backgroundImage: `
//           radial-gradient(circle at 0% 0%, rgba(113, 40, 111, 0.12) 0%, transparent 50%),
//           radial-gradient(circle at 100% 100%, rgba(113, 40, 111, 0.12) 0%, transparent 50%)
//         `
//       }}
//     >
//       {/* ── BACKGROUND VISUALS ── */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
//             backgroundSize: "40px 40px"
//           }}
//         />
//         {/* Animated Background Glows */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.05, 0.1, 0.05]
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
//         {/* Header Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24"
//         >
//           <motion.div variants={itemVariants}>
//             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
//               The TEEF Foundation
//             </span>
//             <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
//               Unlocking Potential <br />
//               <span className="text-white/40 italic">Through Technology.</span>
//             </h2>
//           </motion.div>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-white/50 font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-12"
//           >
//             We are a non-profit organization focused on tech education, R&D, and
//             open-source. Our goal is clear: equipping 5,000 African women to
//             lead and excel in the global tech landscape.
//           </motion.p>
//         </motion.div>

//         {/* ── 3-COLUMN DARK GRID ── */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {PILLARS.map((pillar, index) => {
//             const Icon = pillar.icon;
//             return (
//               <motion.div
//                 key={pillar.title}
//                 variants={itemVariants}
//                 whileHover={{ y: -10 }}
//                 className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-colors duration-500"
//               >
//                 {/* Background "Pop" Texture */}
//                 <div
//                   className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br ${pillar.gradient} rounded-[2.5rem]`}
//                 />

//                 <div className="relative z-10">
//                   <div className="flex justify-between items-start mb-12">
//                     <motion.div
//                       whileHover={{ rotate: [0, -10, 10, 0] }}
//                       className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500"
//                     >
//                       <Icon size={24} strokeWidth={1.5} />
//                     </motion.div>
//                     <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
//                       {pillar.tag}
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-4 italic">
//                     {pillar.title}
//                   </h3>

//                   <p className="text-white/60 font-light leading-relaxed text-sm lg:text-base mb-8">
//                     "{pillar.text}"
//                   </p>

//                   <div className="flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                     <span className="text-[10px] font-black uppercase tracking-tighter">
//                       View Our Impact
//                     </span>
//                     <ArrowUpRight size={14} />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* ── HIGH-IMPACT STAT BAR ── */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-20 p-12 rounded-[3rem] bg-linear-to-r from-brand-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
//         >
//           <div className="flex items-center gap-6">
//             <div className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
//               <RollingCounter value={5000} />
//             </div>
//             <div className="text-sm uppercase font-bold tracking-[0.2em] text-white/40 leading-tight">
//               African Women <br /> Equipped for Tech
//             </div>
//           </div>
//           <div className="h-px w-full md:w-24 bg-white/10" />
//           <div className="text-center md:text-right">
//             <p className="text-white/60 text-sm italic max-w-xs font-light">
//               "Creating a world where African women are at the forefront of
//               technological innovation."
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  // useSpring,
  useTransform,
  animate,
  Variants // 1. Imported the Variants type
} from "framer-motion";
import { Zap, BookOpen, Heart, ArrowUpRight } from "lucide-react";

// ── CUSTOM COUNTER COMPONENT ──
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
        ease: [0.16, 1, 0.3, 1] // Premium quint ease
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const PILLARS = [
  {
    title: "Innovate & Engineer",
    text: "We provide the resources and funding to implement solutions for real-world challenges. We don't just build temporary fixes; we engineer systems that empower the next generation.",
    icon: Zap,
    tag: "Innovate",
    gradient: "from-blue-600/20 to-brand-primary/10"
  },
  {
    title: "Sustainable Education",
    text: "Bridging the gap in the ecosystem starts with access. We equip underprivileged, willing individuals with high-level digital skills and AI-driven business strategies.",
    icon: BookOpen,
    tag: "Educate & Empower",
    gradient: "from-brand-primary/20 to-purple-600/10"
  },
  {
    title: "Unite & Lead",
    text: "We are on a mission to train 5,000 African women. We don't compete; we lift. Through active collaboration, we build the key, create the path, and lead the way.",
    icon: Heart,
    tag: "Unite",
    gradient: "from-purple-600/20 to-pink-500/10"
  }
];

// ── ANIMATION VARIANTS ──
// 2. Added explicit type declarations to fix the Netlify TypeScript error
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
      {/* ── BACKGROUND VISUALS ── */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px"
          }}
        />
        {/* Animated Background Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24"
        >
          <motion.div variants={itemVariants}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">
              The TEEF Foundation
            </span>
            <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Unlocking Potential <br />
              <span className="text-white/40 italic">Through Technology.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/50 font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-12"
          >
            We are a non-profit organization focused on tech education, R&D, and
            open-source. Our goal is clear: equipping 5,000 African women to
            lead and excel in the global tech landscape.
          </motion.p>
        </motion.div>

        {/* ── 3-COLUMN DARK GRID ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-tabi-card bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-colors duration-500"
              >
                {/* Background "Pop" Texture */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br ${pillar.gradient} rounded-tabi-card`}
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
                      View Our Impact
                    </span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── HIGH-IMPACT STAT BAR ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 p-12 rounded-[3rem] bg-linear-to-r from-brand-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
              <RollingCounter value={5000} />
            </div>
            <div className="text-sm uppercase font-bold tracking-[0.2em] text-white/40 leading-tight">
              African Women <br /> Equipped for Tech
            </div>
          </div>
          <div className="h-px w-full md:w-24 bg-white/10" />
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm italic max-w-xs font-light">
              &quot;Creating a world where African women are at the forefront of
              technological innovation.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}