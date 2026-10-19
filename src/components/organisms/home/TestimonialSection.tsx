"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type PanInfo
} from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import type { CMSTestimonial } from "@/lib/cms";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { Marquee } from "@/components/atoms/Marquee";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { WordReveal } from "@/components/atoms/WordReveal";

/* ══════════════════════════════════════════════════════════════════
  TYPES & PROPS
══════════════════════════════════════════════════════════════════ */
interface Props {
  testimonials: CMSTestimonial[];
  heading?: string;
  subheading?: string;
  eyebrow?: string;
}

const AUTOPLAY_MS = 8000;

/* ══════════════════════════════════════════════════════════════════
  HELPERS
══════════════════════════════════════════════════════════════════ */
function cleanQuote(q: string) {
  return q.replace(/^["“”]+|["“”]+$/g, "").trim();
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Short quotes get the big editorial treatment, long ones stay readable. */
function quoteSize(len: number) {
  if (len < 90) return "text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.25]";
  if (len < 220) return "text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.45]";
  return "text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.7]";
}

/** Highlights the last word of the heading with the brand gradient. */
function splitHeading(heading: string) {
  const words = heading.trim().split(/\s+/);
  if (words.length < 2) return { lead: "", last: heading };
  return { lead: words.slice(0, -1).join(" "), last: words[words.length - 1] };
}

/* ══════════════════════════════════════════════════════════════════
  AVATAR
══════════════════════════════════════════════════════════════════ */
function Avatar({
  src,
  name,
  sizes,
  className = "",
  textClassName = "text-base"
}: {
  src?: string;
  name: string;
  sizes: string;
  className?: string;
  textClassName?: string;
}) {
  const [err, setErr] = useState(false);

  if (src && !err) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover object-top"
          onError={() => setErr(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-brand font-bold text-white select-none ${className}`}
    >
      <span className={textClassName}>{initials(name)}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
  PORTRAIT — stadium frame from the Figma testimonial strip
══════════════════════════════════════════════════════════════════ */
function Portrait({ t, index }: { t: CMSTestimonial; index: number }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[300px] aspect-[189/264]">
      {/* Orbit ring with travelling dots — a true circle centred on the portrait */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 aspect-square w-[135%] sm:w-[150%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-full w-full rounded-full border border-dashed border-brand-primary/20 animate-spin-slow">
          <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-tabi-tan shadow-[0_0_0_5px_rgba(224,192,168,0.3)]" />
          <span className="absolute bottom-[14%] right-[2%] h-2.5 w-2.5 rounded-full bg-brand-orchid/70" />
          <span className="absolute left-[4%] top-[30%] h-2 w-2 rounded-full bg-[#9FD8B0]" />
        </div>
      </div>

      {/* Offset mauve shadow shape */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full bg-tabi-lilac"
        initial={false}
        animate={{ rotate: index % 2 === 0 ? 8 : -8, x: index % 2 === 0 ? 18 : -18, y: 10 }}
        transition={{ duration: 0.9, ease: EASE_TABI }}
      />

      {/* The portrait itself */}
      <div className="absolute inset-0 overflow-hidden rounded-full ring-[3px] ring-white shadow-[0_24px_60px_-20px_rgba(113,40,111,0.45)]">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={t.slug}
            className="absolute inset-0"
            initial={
              reduced
                ? { opacity: 0 }
                : { clipPath: "circle(0% at 50% 60%)", scale: 1.15 }
            }
            animate={
              reduced
                ? { opacity: 1 }
                : { clipPath: "circle(75% at 50% 50%)", scale: 1 }
            }
            exit={reduced ? { opacity: 0 } : { opacity: 0.6 }}
            transition={{ duration: 0.9, ease: EASE_TABI }}
          >
            <Avatar
              src={t.avatar}
              name={t.name}
              sizes="(max-width: 640px) 220px, 300px"
              className="h-full w-full"
              textClassName="text-5xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <Sparkle className="absolute -right-5 top-6 sm:-right-7" size={44} />
      <Sparkle className="absolute -left-3 bottom-16" size={20} delay={1.2} color="var(--color-brand-orchid)" />

      {/* Floating heart badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <motion.div
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_10px_30px_-8px_rgba(113,40,111,0.7)] ring-4 ring-white"
          animate={reduced ? undefined : { y: [0, -6, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={22} fill="currentColor" strokeWidth={0} />
        </motion.div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
  PROGRESS SEGMENTS — also drive autoplay via animationend
══════════════════════════════════════════════════════════════════ */
function ProgressSegments({
  count,
  active,
  paused,
  autoplay,
  onSelect,
  onDone
}: {
  count: number;
  active: number;
  paused: boolean;
  autoplay: boolean;
  onSelect: (i: number) => void;
  onDone: () => void;
}) {
  return (
    <div className="flex flex-1 items-center gap-2" role="tablist">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Testimonial ${i + 1} of ${count}`}
          onClick={() => onSelect(i)}
          className="group relative h-6 flex-1 cursor-pointer"
        >
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
            {i < active && <span className="absolute inset-0 bg-brand-primary/35" />}
            {i === active && (
              <span
                key={`${active}-${autoplay}`}
                className="absolute inset-0 origin-left bg-gradient-brand"
                style={
                  autoplay
                    ? {
                        animation: `tabi-progress ${AUTOPLAY_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running"
                      }
                    : undefined
                }
                onAnimationEnd={autoplay ? onDone : undefined}
              />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
  MAIN SECTION
══════════════════════════════════════════════════════════════════ */
export default function TestimonialsSection({
  testimonials,
  heading = "Voices from Our Community",
  subheading = "Real words from real people whose lives and work have been shaped by Tabi.",
  eyebrow = "Testimonials"
}: Props) {
  const count = testimonials.length;
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.35 });

  // Scroll-linked entrance + background parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const glyphY = useTransform(scrollYProgress, [0, 1], [120, -160]);
  const glyphRotate = useTransform(scrollYProgress, [0, 1], [-8, 6]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-60, 80]);
  const stageScale = useTransform(scrollYProgress, [0, 0.35], [0.94, 1]);

  const autoplay = count > 1 && !reduced;
  const paused = hovered || focused || !inView;

  const go = useCallback(
    (idx: number) => {
      if (!count) return;
      const next = (idx + count) % count;
      setDir(next > active || (active === count - 1 && next === 0) ? 1 : -1);
      setActive(next);
    },
    [active, count]
  );

  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  // Arrow keys while the carousel has focus
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!count) return null;

  const t = testimonials[active];
  const quote = cleanQuote(t.quote);
  const { lead, last } = splitHeading(heading);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) next();
    else if (info.offset.x > 60 || info.velocity.x > 400) prev();
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-tabi-blush"
      aria-labelledby="testimonials-heading"
    >
      {/* ── Ambient background ── */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: orbY }}
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-brand-orchid/20 blur-[110px] animate-blob"
      />
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: orbY }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-tabi-tan/40 blur-[110px] animate-blob [animation-delay:-6s]"
      />
      <motion.svg
        aria-hidden
        viewBox="0 0 24 24"
        style={reduced ? undefined : { y: glyphY, rotate: glyphRotate }}
        className="pointer-events-none absolute right-[4%] top-10 h-[340px] w-[340px] text-brand-primary/[0.05] lg:h-[460px] lg:w-[460px]"
        fill="currentColor"
      >
        <path d="M9.6 5C5.9 6.6 3.5 9.9 3.5 14.2c0 2.9 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3.1-3.2-.4 0-.8.1-1 .2.4-2.1 2.2-4.2 4.3-5.3L9.6 5Zm9.5 0c-3.7 1.6-6.1 4.9-6.1 9.2 0 2.9 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3.1-3.2-.4 0-.8.1-1 .2.4-2.1 2.2-4.2 4.3-5.3L19.1 5Z" />
      </motion.svg>

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Header ── */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center lg:mb-20">
          <Reveal y={12}>
            <Eyebrow tone="white" dot>
              {eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <h2
              id="testimonials-heading"
              className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.01em] text-tabi-ink"
            >
              {lead && <>{lead} </>}
              <GradientText>{last}</GradientText>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-base leading-[1.75] text-tabi-body">{subheading}</p>
          </Reveal>
        </div>

        {/* ── Stage ── */}
        <motion.div
          ref={stageRef}
          style={reduced ? undefined : { scale: stageScale }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={heading}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
          }}
          className="relative rounded-[2.5rem] bg-white/80 p-6 pb-8 shadow-[0_30px_80px_-40px_rgba(113,40,111,0.35)] ring-1 ring-brand-primary/[0.06] backdrop-blur-xl outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
            {/* Portrait */}
            <Reveal x={-30} y={0} className="pt-6 pb-8 lg:py-6">
              <Portrait t={t} index={active} />
            </Reveal>

            {/* Quote */}
            <motion.div
              drag={count > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={onDragEnd}
              className="relative flex min-h-[300px] cursor-grab flex-col active:cursor-grabbing lg:min-h-[340px]"
            >
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={t.slug}
                  custom={dir}
                  aria-live="polite"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.5, ease: EASE_TABI }}
                  className="flex flex-1 flex-col"
                >
                  <svg
                    aria-hidden
                    width="56"
                    height="44"
                    viewBox="0 0 56 44"
                    className="mb-6 shrink-0"
                  >
                    <defs>
                      <linearGradient id="tabi-quote-grad" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#71286F" />
                        <stop offset="100%" stopColor="#D060B0" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#tabi-quote-grad)"
                      d="M22 0C9.5 4.8 1 14.6 1 27.6 1 37 6.4 44 14 44c6.3 0 11-4.8 11-10.6 0-5.9-4.2-10-9.9-10-1.2 0-2.4.2-3.2.6 1.2-6.5 7-12.9 13.5-16.4L22 0Zm30 0C39.5 4.8 31 14.6 31 27.6 31 37 36.4 44 44 44c6.3 0 11-4.8 11-10.6 0-5.9-4.2-10-9.9-10-1.2 0-2.4.2-3.2.6 1.2-6.5 7-12.9 13.5-16.4L52 0Z"
                    />
                  </svg>

                  <blockquote className={`font-normal text-tabi-ink ${quoteSize(quote.length)}`}>
                    <WordReveal
                      key={t.slug}
                      text={quote}
                      animateOnMount
                      stagger={quote.length > 220 ? 0.012 : 0.035}
                    />
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-4 pt-10">
                    <span className="h-px w-10 bg-gradient-brand" />
                    <div className="min-w-0">
                      <p className="text-lg font-bold text-tabi-ink">{t.name}</p>
                      {t.role && <p className="text-sm text-tabi-body/80">{t.role}</p>}
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Controls */}
          {count > 1 && (
            <div className="mt-10 flex items-center gap-5 border-t border-brand-primary/10 pt-6 lg:ml-[calc(380px+4rem)]">
              <span className="shrink-0 text-sm font-semibold tabular-nums text-brand-primary">
                {String(active + 1).padStart(2, "0")}
                <span className="text-brand-primary/35"> / {String(count).padStart(2, "0")}</span>
              </span>

              <ProgressSegments
                count={count}
                active={active}
                paused={paused}
                autoplay={autoplay}
                onSelect={go}
                onDone={next}
              />

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-brand-primary/25 text-brand-primary transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_8px_20px_-8px_rgba(113,40,111,0.7)] transition-all duration-300 hover:translate-x-0.5 hover:bg-brand-secondary"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── People row ── */}
        {count > 1 && (
          <Reveal delay={0.1} className="mt-8">
            <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:justify-center">
              {testimonials.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => go(i)}
                    aria-pressed={isActive}
                    className={`group flex shrink-0 snap-start cursor-pointer items-center gap-3 rounded-full py-2 pl-2 pr-5 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-brand-primary text-white shadow-[0_10px_30px_-12px_rgba(113,40,111,0.8)]"
                        : "bg-white text-tabi-ink ring-1 ring-brand-primary/10 hover:-translate-y-0.5 hover:ring-brand-primary/30"
                    }`}
                  >
                    <Avatar
                      src={p.avatar}
                      name={p.name}
                      sizes="40px"
                      className={`h-10 w-10 shrink-0 rounded-full ring-2 transition-all ${isActive ? "ring-white/60" : "ring-transparent grayscale group-hover:grayscale-0"}`}
                      textClassName="text-xs"
                    />
                    <span className="min-w-0">
                      <span className="block max-w-[11rem] truncate text-sm font-bold">{p.name}</span>
                      {p.role && (
                        <span className={`block max-w-[11rem] truncate text-xs ${isActive ? "text-white/70" : "text-tabi-body/70"}`}>
                          {p.role}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>

      {/* ── Wall of love — appears once the CMS has enough voices ── */}
      {count >= 3 && (
        <div className="relative pb-20 lg:pb-28">
          <Marquee duration={Math.max(30, count * 9)}>
            {testimonials.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => {
                  go(i);
                  stageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="mx-3 flex w-[320px] cursor-pointer flex-col gap-4 rounded-3xl bg-white p-6 text-left ring-1 ring-brand-primary/[0.07] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(113,40,111,0.5)]"
              >
                <p className="line-clamp-3 text-sm leading-relaxed text-tabi-body">
                  &ldquo;{cleanQuote(p.quote)}&rdquo;
                </p>
                <span className="flex items-center gap-3">
                  <Avatar
                    src={p.avatar}
                    name={p.name}
                    sizes="32px"
                    className="h-8 w-8 shrink-0 rounded-full"
                    textClassName="text-[10px]"
                  />
                  <span className="truncate text-xs font-bold text-tabi-ink">{p.name}</span>
                </span>
              </button>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
}
