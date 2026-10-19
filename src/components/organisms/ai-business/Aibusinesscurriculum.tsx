"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { ArrowRight, MousePointerClick } from "lucide-react";
import SectionHeading from "@/components/molecules/SectionHeading";

type Day = {
  day: string;
  tag: string;
  title: string;
  description: string;
  deliverableLabel: string;
  deliverable: string;
};

// Pastel versions of the Figma chip colours, used as accents on deep plum
const ACCENTS = [
  { accent: "#F3A6D9", glow: "rgba(243,166,217,0.35)" },
  { accent: "#E0C0A8", glow: "rgba(224,192,168,0.35)" },
  { accent: "#9FD8B0", glow: "rgba(159,216,176,0.3)" },
  { accent: "#D8B4F8", glow: "rgba(216,180,248,0.35)" }
];

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function DayCard({ day, index }: { day: Day; index: number }) {
  const { accent, glow } = ACCENTS[index % ACCENTS.length];
  return (
    <article
      className="group relative flex h-full w-[min(82vw,460px)] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[2rem] bg-tabi-night-2 p-8 ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-60"
        style={{ background: glow }}
      />
      <div className="relative flex items-start justify-between">
        <span className="select-none text-[4.25rem] font-bold leading-none" style={{ color: accent, opacity: 0.18 }}>
          0{index + 1}
        </span>
        <span
          className="rounded-full px-3.5 py-1.5 text-xs font-medium text-tabi-night"
          style={{ background: accent }}
        >
          {day.tag}
        </span>
      </div>

      <div className="relative mt-6">
        <p className="mb-3 text-sm font-medium" style={{ color: accent }}>
          {day.day}
        </p>
        <h3 className="text-2xl font-bold leading-snug text-white">{day.title}</h3>
        <p className="mt-4 text-sm leading-[1.8] text-white/65">{day.description}</p>
        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
          <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: accent }} />
          <p className="text-sm text-white/80">
            <span className="font-bold" style={{ color: accent }}>
              {day.deliverableLabel}
            </span>{" "}
            {day.deliverable}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AIBusinessCurriculum() {
  const t = useTranslations("AIBusiness.curriculum");
  const reduced = useReducedMotion();
  const days = ["day1", "day2", "day3", "day4"].map((k) => t.raw(`days.${k}`) as Day);

  /* ── Desktop: vertical scroll drives a horizontal track ── */
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  useIsoLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.35 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const bar = useTransform(smooth, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(days.length - 1, Math.round(v * (days.length - 1))));
  });

  /* ── Mobile: native swipe ── */
  const swipeRef = useRef<HTMLDivElement>(null);
  const [swipeActive, setSwipeActive] = useState(0);

  const heading = (
    <SectionHeading
      align="center"
      inverted
      eyebrow={t("badge")}
      title={t("heading")}
      description={t("description")}
    />
  );

  return (
    <section id="curriculum" className="relative w-full bg-tabi-night">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(60%_50%_at_50%_0%,rgba(208,96,176,0.25)_0%,transparent_70%)]"
      />

      {/* Desktop pinned version */}
      {
        <div
          ref={pinRef}
          className={`relative hidden ${reduced ? "" : "lg:block"}`}
          style={{ height: `calc(100vh + ${distance}px)` }}
        >
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-[var(--nav-height,80px)]">
            <div className="mx-auto mb-10 max-w-350 px-20">{heading}</div>

            <motion.div ref={trackRef} style={{ x }} className="flex h-[min(470px,calc(100vh-330px))] min-h-[430px] w-max gap-6 px-20">
              {days.map((day, i) => (
                <DayCard key={day.day} day={day} index={i} />
              ))}
              {/* breathing room at the end of the track */}
              <div className="w-[10vw] shrink-0" />
            </motion.div>

            <div className="mx-auto mt-10 flex w-full max-w-350 items-center gap-6 px-20">
              <div className="flex gap-2">
                {days.map((d, i) => (
                  <span
                    key={d.day}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                      i === active ? "bg-white text-tabi-night" : "bg-white/[0.07] text-white/50"
                    }`}
                  >
                    {d.day}
                  </span>
                ))}
              </div>
              <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.span className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-tabi-tan via-[#F3A6D9] to-[#D8B4F8]" style={{ width: bar }} />
              </div>
              <span className="flex items-center gap-2 text-xs text-white/50">
                <MousePointerClick size={14} />
                {t("progressLabel")}
              </span>
            </div>
          </div>
        </div>
      }

      {/* Mobile / reduced-motion version */}
      <div className={`relative py-20 ${reduced ? "" : "lg:hidden"}`}>
        <div className="mx-auto mb-12 max-w-350 px-6 sm:px-12">{heading}</div>
        <div
          ref={swipeRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] sm:px-12"
          onScroll={(e) => {
            const el = e.currentTarget;
            const card = el.scrollWidth / days.length;
            setSwipeActive(Math.min(days.length - 1, Math.round(el.scrollLeft / card)));
          }}
        >
          {days.map((day, i) => (
            <div key={day.day} className="min-h-[420px]">
              <DayCard day={day} index={i} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {days.map((d, i) => (
            <button
              key={d.day}
              type="button"
              aria-label={t("scrollHint", { day: d.day })}
              onClick={() => {
                const el = swipeRef.current;
                const child = el?.children[i] as HTMLElement | undefined;
                if (el && child) el.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
              }}
              className="h-1.5 cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: swipeActive === i ? 24 : 6,
                background: swipeActive === i ? ACCENTS[i].accent : "rgba(255,255,255,0.2)"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
