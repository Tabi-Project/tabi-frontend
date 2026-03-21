import { CMSEvent } from "@/lib/cms";
import EventTypeBadge from "@/components/atoms/Eventtypebadge";
import EventDateBlock from "@/components/atoms/EventDateBlock";

interface EventCardProps {
  event: CMSEvent;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 bg-[#F5F5F5] rounded-2xl p-4 hover:-translate-y-0.5 transition-all duration-300 text-left w-full cursor-pointer"
    >
      <EventDateBlock
        month={event.month}
        day={event.day}
        image={event.image ?? ""}
        alt={event.title}
        size="md"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="self-start">
          <EventTypeBadge mode={event.mode} />
        </div>
        <h3 className="text-sm font-bold text-[#1a1a2e] mt-1.5 mb-0.5 leading-snug line-clamp-1">
          {event.title}
        </h3>
        <p className="text-xs text-[#666] mb-1">{event.location}</p>
        <div className="flex items-center gap-1 text-xs text-[#888]">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8"
              cy="8"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M8 5v3.5l2.5 1.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <span>
            {event.time} <span className="text-[#aaa]">({event.timezone})</span>
          </span>
        </div>
      </div>
      <span className="flex items-center gap-1 text-xs font-semibold text-[#1a1a2e] shrink-0 ml-2">
        {event.ctaLabel ?? "More Info"}
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
