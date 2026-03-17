"use client";

import Image from "next/image";
import { Event } from "@/constants/events";
import { LuX, LuExternalLink, LuCalendarDays, LuClock } from "react-icons/lu";

const TAG_COLORS = [
  { bg: "#F3F4F6", text: "#374151" },
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#FCE7F3", text: "#9D174D" },
  { bg: "#FEF3C7", text: "#92400E" }
];

interface EventDetailDrawerProps {
  event: Event;
  onClose: () => void;
}

export default function EventDetailDrawer({
  event,
  onClose
}: EventDetailDrawerProps) {
  const tags = event.tags ?? [
    event.mode,
    "Students",
    event.category,
    "UNN",
    "Tech Law"
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.18)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 bg-white overflow-y-auto"
        style={{
          width: "min(816px, 100vw)",
          boxShadow: "-8px 0 48px rgba(0,0,0,0.10)"
        }}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className="relative flex items-center justify-center"
          style={{ padding: "20px 40px", borderBottom: "1px solid #E5E7EB" }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111827"
            }}
          >
            Event Details
          </span>

          <button
            onClick={onClose}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-[#555] hover:bg-[#f3e8ff] hover:text-brand-primary transition-colors duration-200"
            aria-label="Close"
          >
            <LuX size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Body ───────────────────────────────────────────────── */}
        <div className="px-6 sm:px-10 pt-8 pb-16">
          {/* Two-column layout: left content / right image */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mb-10">
            {/* ── Left ─────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              {/* Event link — clickable when url exists */}
              {event.eventUrl ? (
                <a
                  href={event.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold mb-4 hover:underline transition-all"
                >
                  Event Link
                  <LuExternalLink size={14} />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold mb-4 opacity-50 cursor-not-allowed">
                  Event Link
                  <LuExternalLink size={14} />
                </div>
              )}

              {/* Title */}
              <h2 className="font-semibold text-[#121212] mb-6 leading-12 text-[clamp(1.2rem,3.5vw,1.5rem)]">
                {event.title}
              </h2>

              {/* Date + time */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-[#444] mb-6">
                <span className="flex items-center gap-2">
                  <LuCalendarDays size={16} className="text-[#666] shrink-0" />
                  {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <LuClock size={16} className="text-[#666] shrink-0" />
                  {event.time}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => {
                  const c = TAG_COLORS[i % TAG_COLORS.length];
                  return (
                    <span
                      key={`${tag}-${i}`}
                      style={{
                        background: c.bg,
                        color: c.text,
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "5px 14px",
                        borderRadius: 9999,
                        whiteSpace: "nowrap"
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* ── Right: event image ────────────────────────────── */}
            <div className="relative w-full sm:w-[340px] lg:w-[380px] h-[220px] sm:h-auto aspect-square shrink-0 rounded-2xl overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Details section ──────────────────────────────────── */}
          <div>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 12
              }}
            >
              Details
            </h3>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#374151",
                lineHeight: 1.85,
                margin: 0
              }}
            >
              {event.description ??
                "Join us for an enlightening day dedicated to exploring the intersection of law and technology. This symposium aims to provide law students with insights into how technological advancements are transforming the legal landscape and to equip them with the knowledge and skills needed to thrive in this evolving field."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
