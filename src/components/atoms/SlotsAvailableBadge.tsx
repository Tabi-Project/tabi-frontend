interface SlotsAvailableBadgeProps {
  remaining: number;
  total: number;
}

export default function SlotsAvailableBadge({
  remaining,
  total
}: SlotsAvailableBadgeProps) {
  const isFull = remaining === 0;

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
      style={{
        background: isFull ? "#FEF2F2" : "#F0FDF4",
        color: isFull ? "#DC2626" : "#16A34A",
        border: `1px solid ${isFull ? "#FECACA" : "#BBF7D0"}`
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ background: isFull ? "#DC2626" : "#16A34A" }}
      />
      {isFull
        ? "Slots full — applications open next month"
        : `${remaining} of ${total} slots available this month`}
    </div>
  );
}
