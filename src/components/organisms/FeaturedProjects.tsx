import Image from "next/image";
import { Button } from "@/components/atoms/Button";

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
    title: "Tabi Project",
    description:
      "Each project at Tabi Empowerment and Educational (TEE) Foundation is crafted to empower community and foster innovation. Discover how we're creating lasting change and brighter futures.",
    hasTestimonial: false
  },
  {
    id: 3,
    number: "3",
    title: "Purple Guild",
    description:
      "Empowering dreamers with dedicated mentorship resources, and a supportive community. Achieve excellence and resources growth through personalised guidance and focused programs.",
    hasTestimonial: true
  }
];

const TESTIMONIAL = {
  avatar: "/testimonial-image.png",
  quote:
    '"Tabi Empowerment and Educational Foundation transformed my perspective on learning. Their dedication to innovative education initiatives is truly inspiring! I feel empowered and inspired every day, knowing that I\'m part of a community that truly cares about making a positive impact."',
  name: "John Doe",
  role: "Head of Operations at Yebox"
};

/* ─────────────────────────────────────────────
  TESTIMONIAL STRIP
───────────────────────────────────────────── */
function Testimonial() {
  return (
    <div className="w-full bg-[#FFF5FF] py-10 sm:py-14 px-6 sm:px-16 lg:px-24 my-6">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start gap-6">
        <div className="shrink-0 w-16 h-64 sm:w-20 sm:h-32 rounded-full overflow-hidden relative border border-brand-primary/20">
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

/**
 * Academy — self-contained 2×2 grid (spans full content width):
 *
 *   col 1                   col 2
 *   ┌─────────────────┐  ┌─────────────────┐
 *   │ title + text +  │  │    image 1      │  row 1
 *   │ button          │  │                 │
 *   ├─────────────────┤  ├─────────────────┤
 *   │    image 2      │  │    image 3      │  row 2
 *   └─────────────────┘  └─────────────────┘
 */
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
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </div>
      </div>

      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src="/projects/academy-1.png"
          alt="Students collaborating"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src="/projects/academy-2.png"
          alt="Women in tech meeting"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src="/projects/academy-3.png"
          alt="Graduation ceremony"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** Tabi Project — matches design exactly:
 *
 *   col 1 (text)        col 2 (diamond collage)
 *   ┌──────────────┐   ┌──────────────────────┐
 *   │ title + desc │   │  ◇  ◇  ◇  ◇  ◇      │  row 1
 *   │ + button     │   │    diagonal collage   │
 *   └──────────────┘   └──────────────────────┘
 *   ┌─────────────────────────────────────────┐
 *   │         full-width video                │  row 2
 *   └─────────────────────────────────────────┘
 */
function ProjectGrid({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
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
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative h-50 sm:h-60 rounded-2xl overflow-hidden">
          <Image
            src="/projects/project-collage.png"
            alt="Project collage"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-[#e5e5e5]">
        <Image
          src="/projects/project-video.png"
          alt="Video thumbnail"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a2e">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Purple Guild — self-contained 2×2 grid (same structure as Academy):
 *
 *   col 1                   col 2
 *   ┌─────────────────┐  ┌─────────────────┐
 *   │ title + text +  │  │  guild logo img │  row 1
 *   │ button          │  │                 │
 *   ├─────────────────┤  ├─────────────────┤
 *   │    image 1      │  │    image 2      │  row 2
 *   └─────────────────┘  └─────────────────┘
 */
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
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </div>
      </div>

      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden">
        <Image
          src="/projects/purple-guild-logo.png"
          alt="Purple Guild"
          fill
          className="object-contain p-6"
        />
      </div>

      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src="/projects/academy-1.png"
          alt="Guild meeting"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src="/projects/academy-2.png"
          alt="Guild graduation"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
    INDIVIDUAL PROJECT BLOCK
    Each block has its OWN short timeline segment.
    fullWidth=true → imageGrid spans entire content
    area (no separate left text col) — used for
    Academy where text lives inside the grid itself.
───────────────────────────────────────────── */
function ProjectBlock({
  project,
  imageGrid,
  fullWidth = false
}: {
  project: (typeof PROJECTS)[number];
  imageGrid: React.ReactNode;
  fullWidth?: boolean;
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
        {fullWidth ? (
          <div className="pt-1 pb-10">{imageGrid}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-1 pb-10">
            <div className="flex flex-col justify-start">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-8">
                {project.description}
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            <div>{imageGrid}</div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
  MAIN SECTION
───────────────────────────────────────────── */
export default function FeaturedProjects() {
  return (
    <section className="w-full bg-white">
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

      <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16 pb-20 flex flex-col gap-0">
        {PROJECTS.map((project, idx) => (
          <div key={project.id}>
            <ProjectBlock
              project={project}
              fullWidth={idx === 0 || idx === 1 || idx === 2}
              imageGrid={
                idx === 0 ? (
                  <AcademyGrid project={project} />
                ) : idx === 1 ? (
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
    </section>
  );
}
