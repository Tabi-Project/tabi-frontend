"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";
import { LuX } from "react-icons/lu";

/* ─────────────────────────────────────────────
  DATA
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    number: "1",
    title: "Tabi Academy",
    description:
      "Tabi Academy offers free technology training, builds community connections, and documents women's progress in tech. Our goal is to empower individuals with digital skills and celebrate women's achievements in technology.",
    hasTestimonial: true
  },
  {
    id: 2,
    number: "2",
    title: "AI for Business",
    description:
      "A hands-on, live two-week training programme equipping women in business with real AI skills — no technical background required. Build faster, work smarter, and grow with confidence using the tools reshaping the world of business.",
    hasTestimonial: false
  },
  {
    id: 3,
    number: "3",
    title: "Tabi Project",
    description:
      "Each project at Tabi Empowerment and Educational (TEE) Foundation is crafted to empower community and foster innovation. Discover how we're creating lasting change and brighter futures.",
    hasTestimonial: false
  },
  {
    id: 4,
    number: "4",
    title: "Purple Guild",
    description:
      "Empowering dreamers with dedicated mentorship resources, and a supportive community. Achieve excellence and resources growth through personalised guidance and focused programs.",
    hasTestimonial: true
  }
];

const TESTIMONIAL = {
  avatar: withBasePath("/testimonial-image.png"),
  quote:
    '"Tabi Empowerment and Educational Foundation transformed my perspective on learning. Their dedication to innovative education initiatives is truly inspiring! I feel empowered and inspired every day, knowing that I\'m part of a community that truly cares about making a positive impact."',
  name: "John Doe",
  role: "Head of Operations at Yebox"
};

/* ─────────────────────────────────────────────
  VIDEO MODAL
───────────────────────────────────────────── */
function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close video"
        >
          <LuX size={18} />
        </button>
        {/* Native video player — works with local mp4 files */}
        <video
          src={src}
          controls
          autoPlay
          className="w-full"
          style={{ display: "block", maxHeight: "80vh" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  TESTIMONIAL STRIP
───────────────────────────────────────────── */
function Testimonial() {
  return (
    <div className="w-full bg-[#FFF5FF] py-10 sm:py-14 px-6 sm:px-16 lg:px-24 my-6">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start gap-6">
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative border border-brand-primary/20">
          <Image
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm sm:text-base text-[#333] leading-relaxed">
            {TESTIMONIAL.quote}
          </p>
          <p className="mt-4 text-sm font-bold text-[#1a1a2e]">
            {TESTIMONIAL.name},{" "}
            <span className="font-normal text-[#555]">{TESTIMONIAL.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  IMAGE GRIDS
───────────────────────────────────────────── */
function AcademyGrid({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <div className="flex flex-col justify-start py-2 pr-4">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex justify-start">
          <Link href="/projects/academy">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={withBasePath("/projects/academy-1.png")}
          alt="Students collaborating"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={withBasePath("/projects/academy-2.png")}
          alt="Women in tech meeting"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={withBasePath("/projects/academy-3.png")}
          alt="Graduation ceremony"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function AIBusinessGrid({ project }: { project: (typeof PROJECTS)[number] }) {
  const [videoOpen, setVideoOpen] = useState(false);

  const VIDEO_SRC = withBasePath("/videos/ai-business.mp4");

  return (
    <>
      <div className="w-full">
        {/* Top row: text + image */}
        <div className="grid grid-cols-2 gap-6 items-start mb-6">
          <div className="flex flex-col justify-start py-2">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
              {project.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex justify-start">
              <Link href="/ai-for-businesses">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-50 sm:h-60 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
            <Image
              src={withBasePath("/ai-business-hero-3.png")}
              alt="AI for Business training"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom: full-width clickable video */}
        <button
          onClick={() => setVideoOpen(true)}
          className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-[#e5e5e5] group cursor-pointer"
        >
          <Image
            src={withBasePath("/projects/ai-business-video-thumb.png")}
            alt="Watch programme video"
            fill
            className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#71286F">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Watch Programme Overview
          </div>
        </button>
      </div>

      {videoOpen && (
        <VideoModal src={VIDEO_SRC} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}

function ProjectGrid({ project }: { project: (typeof PROJECTS)[number] }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const VIDEO_SRC = withBasePath("/videos/ai-business.mp4");

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 items-start mb-6">
          <div className="flex flex-col justify-start py-2">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
              {project.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex justify-start">
              <Link href="/projects/project">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-50 sm:h-60 rounded-2xl overflow-hidden">
            <Image
              src={withBasePath("/projects/project-collage.png")}
              alt="Project collage"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Full-width clickable video */}
        <button
          onClick={() => setVideoOpen(true)}
          className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-[#e5e5e5] group cursor-pointer"
        >
          <Image
            src={withBasePath("/projects/project-video.png")}
            alt="Watch Tabi Project video"
            fill
            className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a2e">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Watch Project Overview
          </div>
        </button>
      </div>

      {videoOpen && (
        <VideoModal src={VIDEO_SRC} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}

function GuildGrid({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <div className="flex flex-col justify-start py-2 pr-4">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex justify-start">
          <Link href="/projects/purple-guild">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden">
        <Image
          src={withBasePath("/projects/purple-guild-logo.png")}
          alt="Purple Guild"
          fill
          className="object-contain p-6"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={withBasePath("/projects/academy-1.png")}
          alt="Guild meeting"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={withBasePath("/projects/academy-2.png")}
          alt="Guild graduation"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  PROJECT BLOCK
───────────────────────────────────────────── */
function ProjectBlock({
  project,
  imageGrid
}: {
  project: (typeof PROJECTS)[number];
  imageGrid: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 sm:gap-8">
      <div className="flex flex-col items-center shrink-0 w-8">
        <div className="w-8 h-8 rounded-full border-2 border-[#555] bg-white flex items-center justify-center text-xs font-bold text-[#333] z-10 shrink-0">
          {project.number}
        </div>
        <div className="flex-1 w-px bg-[#ddd] mt-2" />
      </div>
      <div className="flex-1 pb-4">
        <div className="pt-1 pb-10">{imageGrid}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  MAIN SECTION
───────────────────────────────────────────── */
export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="flex flex-col items-center text-center pt-20 pb-10 px-6">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-[#1a1a2e] tracking-tight">
          Our Flagship Projects
        </h2>
        <p className="mt-3 max-w-lg text-sm text-[#777] leading-relaxed">
          Each project at Tabi Empowerment and Educational (TEE) Foundation is
          crafted to empower community and foster innovation. Discover how
          we&apos;re creating lasting change and brighter futures.
        </p>
        <div
          className="mt-6"
          style={{
            width: 0,
            height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "24px solid #71286F"
          }}
        />
      </div>

      {/* Projects */}
      <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16 pb-10 flex flex-col gap-0">
        {visibleProjects.map((project, idx) => (
          <div key={project.id}>
            <ProjectBlock
              project={project}
              imageGrid={
                idx === 0 ? (
                  <AcademyGrid project={project} />
                ) : idx === 1 ? (
                  <AIBusinessGrid project={project} />
                ) : idx === 2 ? (
                  <ProjectGrid project={project} />
                ) : (
                  <GuildGrid project={project} />
                )
              }
            />
            {project.hasTestimonial && (
              <div className="-mx-6 sm:-mx-12 lg:-mx-16">
                <Testimonial />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All toggle */}
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
    </section>
  );
}
