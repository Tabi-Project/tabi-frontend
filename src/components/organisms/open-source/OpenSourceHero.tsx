"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, GitMerge, Github } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

type Project = {
  id: string;
  title: string;
  tagline?: string;
  image: string;
  themeColor: string;
  contributors?: { github: string; avatar: string }[];
};

const CYCLE_MS = 4200;

// Resting pose for each depth in the deck (0 = front)
const POSES = [
  { x: "0%", y: "0%", rotate: -2, scale: 1, zIndex: 30, opacity: 1 },
  { x: "-15%", y: "-13%", rotate: -9, scale: 0.88, zIndex: 20, opacity: 1 },
  { x: "15%", y: "-22%", rotate: 7, scale: 0.8, zIndex: 10, opacity: 0.95 }
];

/* ── One browser window in the deck ───────────────────────────── */
function WindowCard({
  project,
  depth,
  liveLabel,
  onSelect
}: {
  project: Project;
  depth: number;
  liveLabel: string;
  onSelect: () => void;
}) {
  const reduced = useReducedMotion();
  const pose = POSES[depth] ?? POSES[POSES.length - 1];
  const front = depth === 0;
  const slug = project.title.toLowerCase().replace(/\s+/g, "");

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={project.title}
      aria-pressed={front}
      className="absolute inset-x-[11%] top-[24%] cursor-pointer text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-orchid/40 rounded-[1.6rem]"
      initial={false}
      animate={reduced ? { ...pose, x: 0, y: 0, rotate: 0 } : pose}
      transition={{ type: "spring", stiffness: 170, damping: 22, mass: 0.9 }}
      style={{ zIndex: pose.zIndex }}
      whileHover={front || reduced ? undefined : { y: `calc(${pose.y} - 14px)` }}
    >
      <div
        className={`overflow-hidden rounded-[1.6rem] bg-white transition-shadow duration-500 ${
          front
            ? "shadow-[0_40px_80px_-30px_rgba(113,40,111,0.6)] ring-[3px] ring-brand-primary"
            : "shadow-[0_20px_40px_-24px_rgba(42,13,41,0.45)] ring-1 ring-black/5"
        }`}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-brand-primary/10 bg-tabi-blush px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F3A6D9]" />
          <span className="h-2.5 w-2.5 rounded-full bg-tabi-tan" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9FD8B0]" />
          <span className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-full bg-white px-3 text-[11px] text-tabi-body">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.themeColor }} />
            {slug}.tabiproject.com
          </span>
        </div>

        {/* Screenshot — the front window slowly scrolls through the live site */}
        <div className="relative aspect-[16/11] overflow-hidden bg-tabi-card">
          <motion.img
            src={project.image}
            alt=""
            className="absolute left-0 top-0 w-full"
            initial={false}
            animate={front && !reduced ? { y: ["0%", "-38%"] } : { y: "0%" }}
            transition={
              front && !reduced
                ? { duration: CYCLE_MS / 1000 + 0.4, ease: [0.45, 0, 0.55, 1] }
                : { duration: 0.6, ease: EASE_TABI }
            }
          />
          {/* Caption bar */}
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-2.5 backdrop-blur-md">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-tabi-ink">{project.title}</p>
              {project.tagline && <p className="truncate text-[11px] text-tabi-body">{project.tagline}</p>}
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-tabi-green px-2.5 py-1 text-[11px] font-medium text-[#2F8F5B]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3CB371] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3CB371]" />
              </span>
              {liveLabel}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ── GitHub-style contribution grid (deterministic, so SSR == client) ── */
const GRID_COLS = 12;
const GRID_ROWS = 5;
const SHADES = ["bg-tabi-lilac/60", "bg-[#F3A6D9]", "bg-brand-orchid", "bg-brand-primary"];

function ActivityGrid() {
  const reduced = useReducedMotion();
  const cells = useMemo(
    () =>
      Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => {
        const col = i % GRID_COLS;
        // busier towards the end of the sprint
        const v = ((i * 37 + col * 11) % 7) + col * 0.45;
        return v > 8 ? 3 : v > 6 ? 2 : v > 3.5 ? 1 : 0;
      }),
    []
  );

  return (
    <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))` }}>
      {cells.map((level, i) => (
        <motion.span
          key={i}
          className={`aspect-square w-2.5 rounded-[3px] ${SHADES[level]}`}
          initial={reduced ? undefined : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.1 + (i % GRID_COLS) * 0.06 + Math.floor(i / GRID_COLS) * 0.02 }}
        />
      ))}
    </div>
  );
}

export default function OpenSourceHero() {
  const t = useTranslations("OpenSource.hero");
  const tList = useTranslations("OpenSource.list");
  const projects = tList.raw("items") as Project[];
  const reduced = useReducedMotion();

  // Unique contributors across every project
  const contributors = useMemo(() => {
    const seen = new Map<string, { github: string; avatar: string }>();
    projects.forEach((p) => p.contributors?.forEach((c) => !seen.has(c.github) && seen.set(c.github, c)));
    return Array.from(seen.values());
  }, [projects]);

  /* Deck order: order[0] is the front window */
  const [order, setOrder] = useState(() => projects.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced || paused || projects.length < 2) return;
    timer.current = setTimeout(() => setOrder((o) => [...o.slice(1), o[0]]), CYCLE_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [order, paused, reduced, projects.length]);

  const bringToFront = (projectIndex: number) =>
    setOrder((o) => [projectIndex, ...o.filter((i) => i !== projectIndex)]);

  /* Scroll: the whole deck drifts and tilts as the hero leaves */
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const deckY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const deckRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const front = projects[order[0]];

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE_TABI }
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-tabi-blush"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_75%_45%,#000,transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute right-[10%] top-[18%] h-[420px] w-[420px] rounded-full bg-brand-orchid/20 blur-[110px] animate-blob" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-tabi-tan/30 blur-[90px]" />

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid min-h-[82vh] grid-cols-1 items-center gap-14 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-20">
          {/* ── Copy ── */}
          <motion.div style={reduced ? undefined : { y: copyY }} className="relative z-10">
            <motion.div {...rise(0)}>
              <Eyebrow tone="white" dot>
                {t("badge")}
              </Eyebrow>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-7 text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1] tracking-[-0.02em] text-tabi-ink"
            >
              {t("headlinePart1")}{" "}
              <span className="relative inline-block">
                <GradientText>{t("headlineHighlight")}</GradientText>
                <svg aria-hidden viewBox="0 0 220 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full">
                  <motion.path
                    d="M3 9C40 3 80 2 120 5s70 5 97 1"
                    fill="none"
                    stroke="#D060B0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.7, ease: EASE_TABI }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.div {...rise(0.16)} className="mt-9 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5">
              <span className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-tabi-cream text-xs font-bold text-[#9A5B1E]">R</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-primary text-xs font-bold text-white">T</span>
              </span>
              <span className="text-sm text-tabi-body">
                {t("partnerText")} <span className="mx-1 text-tabi-body/40">×</span>
                <span className="font-medium text-tabi-ink">Tabi Academy</span>
              </span>
            </motion.div>

            <motion.p {...rise(0.24)} className="mt-6 max-w-xl text-lg leading-[1.8] text-tabi-body">
              {t("collabText")}
            </motion.p>

            <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
              >
                {t("ctaExplore")}
                <ArrowDown size={18} className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
              </Button>
              <a href="https://github.com/tabi-project" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="bg-white">
                  <Github size={18} />
                  {t("ctaGithub")}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </Button>
              </a>
            </motion.div>

            {/* Real contributors */}
            {contributors.length > 0 && (
              <motion.div {...rise(0.4)} className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {contributors.slice(0, 7).map((c, i) => (
                    <motion.a
                      key={c.github}
                      href={`https://github.com/${c.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`@${c.github}`}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-tabi-lilac"
                      initial={{ opacity: 0, x: -10, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.7 + i * 0.06, ease: EASE_TABI }}
                      whileHover={{ y: -4, zIndex: 10 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.avatar} alt={c.github} className="h-full w-full object-cover" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-tabi-body">
                  <span className="font-bold text-tabi-ink">{contributors.length}+</span> {t("contributorsLabel")}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* ── Visual: deck of live product windows ── */}
          <motion.div
            style={reduced ? undefined : { y: deckY, rotate: deckRotate }}
            className="relative mx-auto aspect-[1/1.02] w-full max-w-[600px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE_TABI }}
            >
              {projects.map((project, i) => (
                <WindowCard
                  key={project.id}
                  project={project}
                  depth={order.indexOf(i)}
                  liveLabel={t("liveLabel")}
                  onSelect={() => bringToFront(i)}
                />
              ))}
            </motion.div>

            {/* PR merged chip — re-pops every time the deck shuffles */}
            <motion.div
              className="absolute -right-2 top-[4%] z-40 sm:-right-6"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.9 }}
            >
              <div className="animate-float flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.45)]">
                <motion.span
                  key={front?.id}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white"
                  initial={reduced ? undefined : { scale: 0.4, rotate: -40 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                >
                  <GitMerge size={16} />
                </motion.span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-tabi-ink">{t("prMerged")}</span>
                  <motion.span
                    key={`pr-${front?.id}`}
                    className="block max-w-[11rem] truncate font-mono text-[11px] text-tabi-body"
                    initial={reduced ? undefined : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    main ← {front?.title.toLowerCase().replace(/\s+/g, "-")}
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Activity grid chip */}
            <motion.div
              className="absolute -bottom-10 left-0 z-40 origin-bottom-left scale-90 sm:bottom-[-5%] sm:-left-10 sm:scale-100"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16, delay: 1.05 }}
            >
              <div className="animate-float rounded-2xl bg-white p-4 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.45)] [animation-delay:-3s]">
                <p className="mb-2.5 text-[11px] font-medium text-tabi-body">{t("activityLabel")}</p>
                <ActivityGrid />
              </div>
            </motion.div>

            <Sparkle className="absolute left-[10%] top-[4%] z-40" size={40} />
            <Sparkle className="absolute bottom-[12%] right-[2%] z-40" size={20} delay={1.4} color="var(--color-brand-orchid)" />

            {/* Deck position dots */}
            <div className="absolute bottom-[3%] right-[4%] z-40 flex items-center gap-2" title={t("deckHint")}>
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={p.title}
                  onClick={() => bringToFront(i)}
                  className="h-1.5 cursor-pointer rounded-full transition-all duration-500"
                  style={{
                    width: order[0] === i ? 26 : 8,
                    background: order[0] === i ? "var(--color-brand-primary)" : "rgb(113 40 111 / 0.2)"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
