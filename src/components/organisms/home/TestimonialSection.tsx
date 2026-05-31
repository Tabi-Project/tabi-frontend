"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CMSTestimonial } from "@/lib/cms";

/* ══════════════════════════════════════════════════════════════════
  TYPES & PROPS
══════════════════════════════════════════════════════════════════ */
interface Props {
  testimonials: CMSTestimonial[];
  heading?: string;
  subheading?: string;
}

/* ══════════════════════════════════════════════════════════════════
  HELPERS
══════════════════════════════════════════════════════════════════ */
function cleanQuote(q: string) {
  return q.replace(/^[""\u201C\u201D]|[""\u201C\u201D]$/g, "").trim();
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ══════════════════════════════════════════════════════════════════
  AVATAR
══════════════════════════════════════════════════════════════════ */
function Avatar({
  src,
  name,
  size,
  className = ""
}: {
  src?: string;
  name: string;
  size: number;
  className?: string;
}) {
  const [err, setErr] = useState(false);
  if (src && !err) {
    return (
      <div
        className={`relative overflow-hidden rounded-full shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
          onError={() => setErr(true)}
        />
      </div>
    );
  }
  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 font-black select-none ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #71286F, #c040a0)",
        color: "white",
        fontSize: size * 0.32
      }}
    >
      {initials(name)}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CARD VARIANTS — three sizes / styles
══════════════════════════════════════════════════════════════════ */

/** Large featured card — full quote, prominent identity */
function FeaturedCard({
  t,
  direction
}: {
  t: CMSTestimonial;
  direction: 1 | -1;
}) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={t.slug}
        custom={direction}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl p-8 sm:p-10 h-full flex flex-col"
        style={{
          background:
            "linear-gradient(145deg, #fdf7ff 0%, #f7eeff 60%, #fdf0ff 100%)",
          border: "1px solid rgba(113,40,111,0.12)",
          boxShadow:
            "0 4px 32px rgba(113,40,111,0.08), 0 1px 0 rgba(255,255,255,0.9) inset"
        }}
      >
        {/* Decorative top-right orb */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse, rgba(192,64,160,0.12) 0%, transparent 70%)"
          }}
        />

        {/* Small inline quote mark — text not SVG shape */}
        <span
          className="block font-black mb-5 leading-none select-none"
          style={{
            fontSize: "2.5rem",
            color: "rgba(113,40,111,0.2)",
            fontFamily: "Georgia, serif"
          }}
          aria-hidden
        >
          &ldquo;
        </span>

        {/* The quote — this is the hero */}
        <blockquote
          className="font-medium leading-[1.72] text-[#2a1a2a] flex-1"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
        >
          {cleanQuote(t.quote)}
        </blockquote>

        {/* Identity footer */}
        <div className="mt-8 pt-6 border-t border-[rgba(113,40,111,0.1)] flex items-center gap-4">
          <Avatar src={t.avatar} name={t.name} size={44} />
          <div className="min-w-0">
            <p className="font-bold text-sm text-[#1a0e1a] leading-snug truncate">
              {t.name}
            </p>
            <p className="text-xs mt-0.5 truncate" style={{ color: "#9a7a9a" }}>
              {t.role}
            </p>
          </div>
          {/* Stars */}
          <div className="ml-auto flex gap-0.5 shrink-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="#71286F"
              >
                <path d="M6 1l1.236 2.472L10 3.91l-2 1.96.472 2.764L6 7.4l-2.472 1.234L4 5.87 2 3.91l2.764-.438z" />
              </svg>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/** Compact supporting card */
function CompactCard({
  t,
  active,
  onClick
}: {
  t: CMSTestimonial;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={
        active ? {} : { y: -2, boxShadow: "0 8px 24px rgba(113,40,111,0.1)" }
      }
      whileTap={{ scale: 0.98 }}
      className="text-left w-full rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col"
      style={{
        background: active
          ? "linear-gradient(135deg, rgba(113,40,111,0.06), rgba(192,64,160,0.04))"
          : "white",
        border: `1.5px solid ${active ? "rgba(113,40,111,0.22)" : "#f0e8f0"}`,
        boxShadow: active
          ? "0 4px 16px rgba(113,40,111,0.09)"
          : "0 1px 4px rgba(0,0,0,0.03)"
      }}
    >
      {/* Header: avatar + name */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar src={t.avatar} name={t.name} size={34} />
        <div className="min-w-0 flex-1">
          <p
            className="font-bold text-sm truncate"
            style={{ color: active ? "#71286F" : "#1a0e1a" }}
          >
            {t.name}
          </p>
          <p className="text-[10px] truncate" style={{ color: "#b090b0" }}>
            {t.role}
          </p>
        </div>
        <motion.div
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.5 }}
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: "#71286F" }}
        />
      </div>
      {/* Excerpt */}
      <p
        className="text-xs leading-relaxed line-clamp-2"
        style={{ color: active ? "#5a3a5a" : "#9a7a9a" }}
      >
        &quot;{cleanQuote(t.quote).slice(0, 100)}
        {t.quote.length > 100 ? "…" : ""}&quot;
      </p>
    </motion.button>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════════════════════════ */
export default function TestimonialsSection({
  testimonials,
  heading = "What Our Community Says",
  subheading = "Real words from the people whose lives and work have been shaped by Tabi."
}: Props) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = testimonials.length;

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    if (count <= 1) return;
    timer.current = setInterval(() => {
      setDir(1);
      setActive((i) => (i + 1) % count);
    }, 7000);
  }, [count]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startTimer]);

  function go(idx: number) {
    if (idx === active) return;
    setDir(idx > active ? 1 : -1);
    setActive(idx);
    startTimer();
  }

  if (!testimonials.length) return null;

  const featured = testimonials[active];
  const supporting = testimonials.filter((_, i) => i !== active).slice(0, 3);

  return (
    <section className="w-full bg-[#fdf7ff]">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#71286F" }} />
            <span
              className="text-[10px] font-black uppercase tracking-[0.28em]"
              style={{ color: "#71286F" }}
            >
              Testimonials
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e] leading-tight">
                {heading}
              </h2>
              <p className="mt-3 text-base text-[#666] max-w-xl leading-relaxed">
                {subheading}
              </p>
            </div>
            {/* Counter + arrows — desktop only */}
            {count > 1 && (
              <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => go((active - 1 + count) % count)}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-150 hover:border-brand-primary hover:text-brand-primary cursor-pointer"
                  style={{ borderColor: "#e8d8e8", color: "#c0a8c0" }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M8.5 2L3.5 6.5 8.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span
                  className="text-xs font-semibold tabular-nums"
                  style={{ color: "#c0a8c0" }}
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </span>
                <button
                  onClick={() => go((active + 1) % count)}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-150 hover:border-brand-primary hover:text-brand-primary cursor-pointer"
                  style={{ borderColor: "#e8d8e8", color: "#c0a8c0" }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M4.5 2L9.5 6.5 4.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Main layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5 items-stretch"
        >
          {/* Featured card — left, tall */}
          <div className="min-h-75">
            <FeaturedCard t={featured} direction={dir} />
          </div>

          {/* Supporting + dots — right column */}
          {count > 1 && (
            <div className="flex flex-col gap-3">
              {supporting.map((s, i) => {
                const realIdx = testimonials.findIndex(
                  (t) => t.slug === s.slug
                );
                return (
                  <CompactCard
                    key={s.slug}
                    t={s}
                    active={realIdx === active}
                    onClick={() => go(realIdx)}
                  />
                );
              })}

              {/* Progress pills */}
              <div className="flex items-center gap-1.5 px-0.5 mt-auto pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      height: 5,
                      width: i === active ? 22 : 6,
                      background:
                        i === active
                          ? "linear-gradient(90deg, #71286F, #c040a0)"
                          : "#e8d8e8"
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Mobile nav */}
        {count > 1 && (
          <div className="flex sm:hidden items-center justify-between mt-6">
            <button
              onClick={() => go((active - 1 + count) % count)}
              className="w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer"
              style={{ borderColor: "#e8d8e8", color: "#c0a8c0" }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M8.5 2L3.5 6.5 8.5 11"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: 5,
                    width: i === active ? 18 : 5,
                    background: i === active ? "#71286F" : "#e8d8e8"
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => go((active + 1) % count)}
              className="w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer"
              style={{ borderColor: "#e8d8e8", color: "#c0a8c0" }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M4.5 2L9.5 6.5 4.5 11"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
