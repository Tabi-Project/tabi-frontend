"use client";

import { useState, useEffect } from "react";
import { CMSEvent } from "@/lib/cms";
import FeaturedEventCard from "@/components/molecules/FeaturedEventCard";
import EventDetailDrawer from "@/components/molecules/EventDetailDrawer";

interface UpcomingEventsSliderProps {
  events?: CMSEvent[];
}

export default function UpcomingEventsSlider({
  events = []
}: UpcomingEventsSliderProps) {
  const slides = events.slice(0, 4);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<CMSEvent | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) {
    return (
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
          Upcoming Events
        </h2>
        <div className="flex flex-col items-center justify-center py-16 rounded-2xl border border-dashed border-[#E5E7EB] text-center">
          <div className="w-12 h-12 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4 text-xl">
            📅
          </div>
          <p className="text-sm font-semibold text-[#1a1a2e] mb-1">
            No upcoming events yet
          </p>
          <p className="text-xs text-[#888]">
            Check back soon — events are on the way.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
          Upcoming Events
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((event) => (
              <div key={event.slug} className="min-w-full">
                <FeaturedEventCard
                  event={event}
                  onClick={() => setSelected(event)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === active
                  ? "w-4 h-2.5 bg-brand-primary"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {selected && (
        <EventDetailDrawer event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
