"use client";

import { useState } from "react";
import type { CMSProject } from "@/lib/cms";
import { Button } from "@/components/atoms/Button";
import AcademyGrid from "@/components/molecules/AcademyGrid";
import AIBusinessGrid from "@/components/molecules/AIBusinessGrid";
import TabiProjectGrid from "@/components/molecules/TabiProjectGrid";
import PurpleGuildGrid from "@/components/molecules/PurpleGuildGrid";
import { motion, Variants } from "framer-motion";

function ProjectGrid({
  project,
  index
}: {
  project: CMSProject;
  index: number;
}) {
  switch (index) {
    case 0:
      return <AcademyGrid project={project} />;
    case 1:
      return <AIBusinessGrid project={project} />;
    case 2:
      return <TabiProjectGrid project={project} />;
    default:
      return <PurpleGuildGrid project={project} />;
  }
}

// Fixed & Animated Timeline Block
function ProjectBlock({
  project,
  index
}: {
  project: CMSProject;
  index: number;
}) {
  return (
    <motion.div
      className="flex gap-4 sm:gap-8 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      {/* Timeline graphical track */}
      <div className="flex flex-col items-center shrink-0 w-8">
        {/* The Numbered Node pops in */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 200, damping: 15 }
            }
          }}
          className="w-8 h-8 rounded-full border-2 border-[#555] bg-white flex items-center justify-center text-xs font-bold text-[#333] z-10 shrink-0"
        >
          {project.order}
        </motion.div>

        {/* The connecting line draws downwards */}
        <motion.div
          variants={{
            hidden: { scaleY: 0 },
            visible: {
              scaleY: 1,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          style={{ originY: 0 }}
          className="flex-1 w-px bg-[#ddd] mt-2"
        />
      </div>

      {/* The project card itself slides up smoothly */}
      <motion.div
        className="flex-1 pt-1"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }
        }}
      >
        <ProjectGrid project={project} index={index} />
      </motion.div>
    </motion.div>
  );
}

interface FeaturedProjectsProps {
  projects?: CMSProject[];
  testimonialSlot?: React.ReactNode;
}

// Reusable header variants to avoid standard inferring errors
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15
    }
  }
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function FeaturedProjects({
  projects = [],
  testimonialSlot
}: FeaturedProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center pt-20 pb-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
      >
        <motion.h2
          variants={headerItem}
          className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-[#1a1a2e] tracking-tight"
        >
          Our Flagship Projects
        </motion.h2>
        <motion.p
          variants={headerItem}
          className="mt-3 max-w-lg text-sm text-[#777] leading-relaxed"
        >
          Each project at Tabi Empowerment and Educational (TEE) Foundation is
          crafted to empower community and foster innovation. Discover how
          we&apos;re creating lasting change and brighter futures.
        </motion.p>

        {/* Animated the arrow indicator pointing down */}
        <motion.div
          variants={headerItem}
          className="mt-6"
          style={{
            width: 0,
            height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "24px solid #71286F"
          }}
        />
      </motion.div>

      {/* Projects */}
      {visible.length === 0 ? (
        <motion.div
          className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16 pb-20 flex flex-col items-center justify-center py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* ...SVG remains exactly the same... */}
          <svg
            width="160"
            height="140"
            viewBox="0 0 160 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-6"
          >
            <ellipse cx="80" cy="125" rx="55" ry="8" fill="#F3E8FF" />
            <path d="M62 125 L65 98 L95 98 L98 125 Z" fill="#EDE0F5" />
            <rect x="58" y="93" width="44" height="8" rx="4" fill="#D4B8E8" />
            <path
              d="M80 93 Q80 75 80 60"
              stroke="#71286F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M80 78 Q65 70 60 58 Q72 62 80 72"
              fill="#9B59B6"
              opacity="0.7"
            />
            <path
              d="M80 68 Q95 60 100 48 Q88 52 80 62"
              fill="#71286F"
              opacity="0.8"
            />
            <circle cx="80" cy="52" r="10" fill="#71286F" />
            <circle cx="96" cy="52" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="91" cy="63" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="80" cy="68" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="69" cy="63" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="64" cy="52" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="69" cy="41" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="80" cy="36" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="91" cy="41" r="6" fill="#C084E8" opacity="0.7" />
            <circle cx="80" cy="52" r="5" fill="#F3E8FF" />
            <path
              d="M30 40 L32 35 L34 40 L39 42 L34 44 L32 49 L30 44 L25 42 Z"
              fill="#71286F"
              opacity="0.4"
            />
            <path
              d="M125 55 L127 51 L129 55 L133 57 L129 59 L127 63 L125 59 L121 57 Z"
              fill="#9B59B6"
              opacity="0.35"
            />
            <circle cx="45" cy="65" r="3" fill="#71286F" opacity="0.3" />
            <circle cx="118" cy="38" r="2" fill="#C084E8" opacity="0.4" />
            <circle cx="135" cy="80" r="2.5" fill="#71286F" opacity="0.25" />
          </svg>
          <p className="text-base font-bold text-[#1a1a2e] mb-2">
            Something beautiful is growing
          </p>
          <p className="text-sm text-[#888] max-w-xs leading-relaxed">
            Our flagship projects will appear here soon. Check back shortly.
          </p>
        </motion.div>
      ) : (
        <>
          {visible.map((project, idx) => (
            <div key={project.slug}>
              <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
                <ProjectBlock project={project} index={idx} />
              </div>
              {project.hasTestimonial && testimonialSlot}
            </div>
          ))}
        </>
      )}

      {/* View all button */}
      {projects.length > 2 && (
        <div className="flex justify-center pb-20">
          <Button
            variant="outline"
            size="md"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show Less" : "View All Projects"}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            >
              <path
                d="M3 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      )}
    </section>
  );
}