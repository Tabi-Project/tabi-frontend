"use client";

import { useState, useRef, useEffect } from "react";
import { ALL_EVENTS, Event, EventMode } from "@/constants/events";
import EventCard from "@/components/molecules/EventCard";
import EventDetailDrawer from "@/components/molecules/EventDetailDrawer";
import Pagination from "@/components/atoms/Pagination";
import { LuChevronDown, LuSearch } from "react-icons/lu";

const EVENT_TYPES: EventMode[] = ["In-Person", "Online", "Hybrid"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// ─── Reusable custom dropdown ──────────────────────────────────────────────────
function CustomDropdown({
  value,
  placeholder,
  options,
  allLabel,
  onChange,
}: {
  value: string;
  placeholder: string;
  options: string[];
  allLabel: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const label = value || placeholder;

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 pl-4 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-[#555] hover:border-gray-300 focus:outline-none focus:border-brand-primary transition-colors min-w-[130px] justify-between"
      >
        <span className={value ? "text-[#1a1a2e] font-medium" : "text-[#888]"}>
          {label}
        </span>
        <LuChevronDown
          size={14}
          className={`text-[#999] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full left-0 mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 min-w-[160px] overflow-hidden">
          {/* All / reset option */}
          <button
            onClick={() => { onChange(""); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
              value === ""
                ? "bg-gray-50 text-[#1a1a2e] font-medium"
                : "text-[#555] hover:bg-gray-50"
            }`}
          >
            {allLabel}
          </button>

          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt
                  ? "bg-gray-50 text-[#1a1a2e] font-medium"
                  : "text-[#555] hover:bg-gray-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main grid ─────────────────────────────────────────────────────────────────
export default function AllEventsGrid() {
  const [typeFilter, setTypeFilter] = useState<EventMode | "">("");
  const [monthFilter, setMonthFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Event | null>(null);

  const filtered = ALL_EVENTS.filter((e) => {
    const matchType = !typeFilter || e.mode === typeFilter;
    const matchMonth = !monthFilter || e.date.includes(monthFilter);
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchMonth && matchSearch;
  });

  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <h2 className="text-2xl font-bold text-[#1a1a2e] shrink-0">All Events</h2>

          <div className="flex flex-wrap items-center gap-3">
            {/* Event Type custom dropdown */}
            <CustomDropdown
              value={typeFilter}
              placeholder="Event Type"
              options={EVENT_TYPES}
              allLabel="All Event Type"
              onChange={(v) => { setTypeFilter(v as EventMode | ""); setPage(1); }}
            />

            {/* Month custom dropdown */}
            <CustomDropdown
              value={monthFilter}
              placeholder="Month"
              options={MONTHS}
              allLabel="All Months"
              onChange={(v) => { setMonthFilter(v); setPage(1); }}
            />

            {/* Search */}
            <div className="relative flex items-center">
              <LuSearch size={14} className="absolute left-3 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Events & Webinars"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-brand-primary w-56 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} onClick={() => setSelected(event)} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#999] py-16 text-center">
            No events match your filters.
          </p>
        )}

        <Pagination current={page} total={15} onChange={setPage} />
      </section>

      {selected && (
        <EventDetailDrawer event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}