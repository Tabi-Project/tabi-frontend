import { FocusArea } from "@/types/consultancy";

export default function FocusAreaCard({
  area,
  index
}: {
  area: FocusArea;
  index: number;
}) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
      {/* Number + accent bar row */}
      <div className="flex items-center justify-between mb-6">
        <div
          className="w-8 h-0.75 rounded-full transition-all duration-300 group-hover:w-14"
          style={{ background: "#71286F" }}
        />
        <span
          className="text-4xl font-extrabold leading-none select-none tabular-nums"
          style={{ color: "#F3E8FF" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-[#1a1a2e] mb-3 leading-snug">
        {area.title}
      </h3>
      <p className="text-sm text-[#666] leading-relaxed flex-1">
        {area.description}
      </p>
    </div>
  );
}
