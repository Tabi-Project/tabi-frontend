"use client";

import { useState, useEffect } from "react";
import { EVENTS, Event } from "@/constants/events";
import FeaturedEventCard from "@/components/molecules/FeaturedEventCard";
import EventDetailDrawer from "@/components/molecules/EventDetailDrawer";

const SLIDES = EVENTS.slice(0, 4);

export default function UpcomingEventsSlider() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Event | null>(null);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
            {SLIDES.map((event) => (
              <div key={event.id} className="min-w-full">
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
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
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
