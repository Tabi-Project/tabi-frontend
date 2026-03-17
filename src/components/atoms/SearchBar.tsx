interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({
  placeholder,
  value,
  onChange
}: SearchBarProps) {
  return (
    <div className="relative flex items-center">
      <svg
        className="absolute left-3 text-gray-400 pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M13.5 13.5L17 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-white focus:outline-none focus:border-brand-primary w-52 placeholder:text-gray-400"
      />
    </div>
  );
}
