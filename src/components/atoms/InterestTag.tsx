import { LuX } from "react-icons/lu";

interface InterestTagProps {
  label: string;
  onRemove: () => void;
}

export default function InterestTag({ label, onRemove }: InterestTagProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-brand-primary"
      style={{ background: "#f3e8ff" }}
    >
      {label}
      <button
        onClick={onRemove}
        className="hover:opacity-70 transition-opacity"
        aria-label={`Remove ${label}`}
      >
        <LuX size={11} strokeWidth={2.5} />
      </button>
    </span>
  );
}
