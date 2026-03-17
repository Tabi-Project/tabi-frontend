interface PaginationProps {
  current: number;
  total: number;
  onChange: (p: number) => void;
}

export default function Pagination({
  current,
  total,
  onChange
}: PaginationProps) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
            p === current
              ? "border border-brand-primary text-brand-primary"
              : "text-[#878787] hover:text-[#121212]"
          }`}
        >
          {p}
        </button>
      ))}

      <span className="text-[#878787] text-sm px-1">...</span>

      <button
        onClick={() => onChange(total)}
        className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
          total === current
            ? "border border-brand-primary text-brand-primary"
            : "text-[#878787] hover:text-[#121212]"
        }`}
      >
        {total}
      </button>

      <div className="flex items-center gap-2 ml-3">
        <span className="text-sm font-medium text-[#121212]">Next Page</span>
        <button
          onClick={() => onChange(Math.min(current + 1, total))}
          className="w-8 h-8 rounded-full border border-[#E1E3EA] flex items-center justify-center text-[#121212] hover:border-brand-primary hover:text-brand-primary transition-all"
        >
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
  );
}
