import { EventMode } from "@/constants/events";

const MODE_STYLES: Record<EventMode, string> = {
  "In-Person": "bg-[#FFF3E8] text-[#E07A10]",
  Online: "bg-[#F0EBFF] text-brand-primary",
  Hybrid: "bg-[#E8F5FF] text-[#1070C0]"
};

interface EventTypeBadgeProps {
  mode: EventMode;
}

export default function EventTypeBadge({ mode }: EventTypeBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${MODE_STYLES[mode]}`}
    >
      {mode}
    </span>
  );
}
