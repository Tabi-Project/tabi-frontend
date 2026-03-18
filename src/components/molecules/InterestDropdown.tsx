import { RefObject } from "react";
import { LuChevronDown } from "react-icons/lu";
import { INTERESTS, MAX_INTERESTS } from "@/constants/community";
import InterestTag from "@/components/atoms/InterestTag";

interface InterestDropdownProps {
  selected: string[];
  othersText: string;
  dropdownOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement | null>; // ← accept null
  atMax: boolean;
  disabled?: boolean;
  onToggle: (item: string) => void;
  onDropdownToggle: () => void;
  onOthersTextChange: (val: string) => void;
}

function CheckIcon() {
  return (
    <span className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path
          d="M1.5 4.5l2 2 4-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function InterestDropdown({
  selected,
  othersText,
  dropdownOpen,
  dropdownRef,
  atMax,
  disabled,
  onToggle,
  onDropdownToggle,
  onOthersTextChange
}: InterestDropdownProps) {
  const othersSelected = selected.includes("Others"); // derived internally

  return (
    <div>
      {/* Label row */}
      <div className="flex items-center justify-between mb-2">
        <label className="block text-xs font-semibold text-[#444444]">
          Area of Interest
        </label>
        <span
          className={`text-xs font-medium ${atMax ? "text-brand-primary" : "text-[#aaa]"}`}
        >
          {selected.length}/{MAX_INTERESTS} selected
        </span>
      </div>

      {/* Selected tags */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {selected.map((item) => (
            <InterestTag
              key={item}
              label={item === "Others" && othersText ? othersText : item}
              onRemove={() => onToggle(item)}
            />
          ))}
        </div>
      )}

      {/* Trigger + panel */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={onDropdownToggle}
          disabled={disabled}
          className="w-full flex items-center justify-between rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm text-left focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
          style={{ color: selected.length ? "#333" : "#bbb" }}
        >
          <span>{atMax ? "Maximum reached" : "Select up to 2 interests"}</span>
          <LuChevronDown
            size={15}
            className={`text-[#999] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-2xl shadow-lg z-50 py-1 max-h-56 overflow-y-auto">
            {INTERESTS.map((item) => {
              const isSelected = selected.includes(item);
              const isDisabled = atMax && !isSelected;

              if (item === "Others") {
                return (
                  <div key={item}>
                    <button
                      onClick={() => !isDisabled && onToggle(item)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                        isDisabled
                          ? "opacity-40 cursor-not-allowed"
                          : isSelected
                            ? "text-brand-primary font-medium"
                            : "text-[#555] hover:bg-gray-50"
                      }`}
                    >
                      Others
                      {isSelected && <CheckIcon />}
                    </button>
                    {isSelected && (
                      <div className="px-4 pb-3">
                        <input
                          type="text"
                          placeholder="Describe your interest..."
                          value={othersText}
                          onChange={(e) => onOthersTextChange(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          autoFocus
                          className="w-full rounded-lg border border-[#e5e5e5] px-3 py-2 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item}
                  onClick={() => !isDisabled && onToggle(item)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                    isDisabled
                      ? "opacity-40 cursor-not-allowed"
                      : isSelected
                        ? "text-brand-primary font-medium"
                        : "text-[#555] hover:bg-gray-50"
                  }`}
                >
                  {item}
                  {isSelected && <CheckIcon />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
