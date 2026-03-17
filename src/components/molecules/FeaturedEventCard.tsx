import Image from "next/image";
import { Event } from "@/constants/events";
import EventTypeBadge from "@/components/atoms/Eventtypebadge";

interface FeaturedEventCardProps {
  event: Event;
  onClick: () => void;
}

export default function FeaturedEventCard({
  event,
  onClick
}: FeaturedEventCardProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-[#F5F5F5] rounded-2xl overflow-hidden">
      <div className="relative w-full sm:w-[280px] h-[200px] sm:h-auto shrink-0 m-3 sm:m-4 rounded-xl overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 px-6 py-6 lg:px-8 lg:py-8 justify-between min-w-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-[#555] font-medium">
            {event.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#aaa]" />
          <EventTypeBadge mode={event.mode} />
        </div>

        <h3 className="text-lg font-bold text-[#1a1a2e] leading-snug mb-5">
          {event.title}
        </h3>

        {event.address && (
          <div className="flex items-start gap-2 text-xs text-[#666] mb-3">
            <svg
              className="shrink-0 mt-0.5"
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="8"
                cy="6"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
            <span>{event.address}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-5 text-xs text-[#666] mb-6">
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="3"
                width="12"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M5 1.5v3M11 1.5v3M2 7h12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M8 5v3.5l2.5 1.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            {event.time}
          </span>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#1a1a2e] hover:text-brand-primary transition-colors"
          >
            {event.ctaLabel ?? "Register"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
