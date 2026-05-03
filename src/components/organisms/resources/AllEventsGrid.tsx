"use client";

import { useState, useRef, useEffect } from "react";
import { CMSEvent } from "@/lib/cms";
import EventCard from "@/components/molecules/EventCard";
import EventDetailDrawer from "@/components/molecules/EventDetailDrawer";
import Pagination from "@/components/atoms/Pagination";
import { LuChevronDown, LuSearch } from "react-icons/lu";

type EventMode = "In-Person" | "Online" | "Hybrid";

const EVENT_TYPES: EventMode[] = ["In-Person", "Online", "Hybrid"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const PER_PAGE = 6;

function CustomDropdown({
  value,
  placeholder,
  options,
  allLabel,
  onChange
}: {
  value: string;
  placeholder: string;
  options: string[];
  allLabel: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 pl-4 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-[#555] hover:border-gray-300 focus:outline-none focus:border-brand-primary transition-colors min-w-32.5 justify-between cursor-pointer"
      >
        <span className={value ? "text-[#1a1a2e] font-medium" : "text-[#888]"}>
          {value || placeholder}
        </span>
        <LuChevronDown
          size={14}
          className={`text-[#999] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 min-w-40 overflow-hidden">
          <button
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${value === "" ? "bg-gray-50 text-[#1a1a2e] font-medium" : "text-[#555] hover:bg-gray-50"}`}
          >
            {allLabel}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${value === opt ? "bg-gray-50 text-[#1a1a2e] font-medium" : "text-[#555] hover:bg-gray-50"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface AllEventsGridProps {
  events: CMSEvent[];
}

export default function AllEventsGrid({ events }: AllEventsGridProps) {
  const [typeFilter, setTypeFilter] = useState<EventMode | "">("");
  const [monthFilter, setMonthFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<CMSEvent | null>(null);

  const filtered = events.filter((e) => {
    const matchType = !typeFilter || e.mode === typeFilter;
    const matchMonth = !monthFilter || e.date.includes(monthFilter);
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchMonth && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <h2 className="text-2xl font-bold text-[#1a1a2e] shrink-0">
            All Events
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <CustomDropdown
              value={typeFilter}
              placeholder="Event Type"
              options={EVENT_TYPES}
              allLabel="All Event Type"
              onChange={(v) => {
                setTypeFilter(v as EventMode | "");
                setPage(1);
              }}
            />
            <CustomDropdown
              value={monthFilter}
              placeholder="Month"
              options={MONTHS}
              allLabel="All Months"
              onChange={(v) => {
                setMonthFilter(v);
                setPage(1);
              }}
            />
            <div className="relative flex items-center">
              <LuSearch
                size={14}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search Events & Webinars"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-brand-primary w-56 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {paginated.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
                onClick={() => setSelected(event)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-14 h-14 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="5"
                  width="22"
                  height="20"
                  rx="3"
                  stroke="#71286F"
                  strokeWidth="1.8"
                />
                <path
                  d="M3 11h22"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M9 3v4M19 3v4"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="9" cy="17" r="1.2" fill="#71286F" />
                <circle cx="14" cy="17" r="1.2" fill="#71286F" />
                <circle cx="19" cy="17" r="1.2" fill="#71286F" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">
              {search || typeFilter || monthFilter
                ? "No events match your filters"
                : "No events yet"}
            </p>
            <p className="text-xs text-[#888]">
              {search || typeFilter || monthFilter
                ? "Try adjusting your filters"
                : "Check back soon — events are coming."}
            </p>
          </div>
        )}

        {filtered.length > PER_PAGE && (
          <Pagination current={page} total={totalPages} onChange={setPage} />
        )}
      </section>

      {selected && (
        <EventDetailDrawer event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
