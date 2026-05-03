"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  Linkedin,
  Globe,
  Instagram,
  X,
  SearchX,
  Facebook
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsSubstack, BsTwitterX } from "react-icons/bs";

// Define the member shape matching the JSON data
interface DirectoryMember {
  name: string;
  role: string;
  industry: string;
  city: string;
  focus: string[];
  bio: string;
  socials: {
    linkedin?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    substack?: string;
  };
  image: string;
}

export const TWNDirectory = () => {
  const t = useTranslations("TWN.directory");
  const members = t.raw("members") as DirectoryMember[];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filterIndustry, setFilterIndustry] = useState(t("filterIndustry"));
  const [filterCity, setFilterCity] = useState(t("filterCity"));
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Industry and city lists derived from translated members
  const industries = useMemo(() => {
    const unique = Array.from(new Set(members.map((m) => m.industry)));
    return [t("filterIndustry"), ...unique.sort()];
  }, [members, t]);

  const cities = useMemo(() => {
    const unique = Array.from(new Set(members.map((m) => m.city)));
    return [t("filterCity"), ...unique.sort()];
  }, [members, t]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const resetFilters = () => {
    setFilterIndustry(t("filterIndustry"));
    setFilterCity(t("filterCity"));
    setOpenDropdown(null);
  };

  // Filtering logic using translated members
  const filteredMembers = members.filter((member) => {
    const matchesIndustry =
      filterIndustry === t("filterIndustry") ||
      member.industry === filterIndustry;
    const matchesCity =
      filterCity === t("filterCity") || member.city === filterCity;
    return matchesIndustry && matchesCity;
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 bg-[#FDFCFE]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-[#2D102D] mb-4">
              {t("heading")}
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl">{t("description")}</p>
          </motion.div>

          <div
            className="flex flex-wrap items-center gap-4 mb-12"
            ref={dropdownRef}
          >
            {/* Industry Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "industry" ? null : "industry"
                  )
                }
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#ede8f5] rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  color:
                    openDropdown === "industry" ||
                    filterIndustry !== t("filterIndustry")
                      ? "#71286F"
                      : "#374151"
                }}
              >
                {filterIndustry}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${openDropdown === "industry" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === "industry" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50"
                  >
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => {
                          setFilterIndustry(ind);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150"
                      >
                        {ind}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "city" ? null : "city")
                }
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#ede8f5] rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  color:
                    openDropdown === "city" || filterCity !== t("filterCity")
                      ? "#71286F"
                      : "#374151"
                }}
              >
                {filterCity}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${openDropdown === "city" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === "city" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50"
                  >
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setFilterCity(city);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150"
                      >
                        {city}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {(filterIndustry !== t("filterIndustry") ||
              filterCity !== t("filterCity")) && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs font-bold text-brand-primary uppercase tracking-tighter ml-2"
              >
                <X size={14} /> {t("clearFilters")}
              </button>
            )}
          </div>
        </div>

        {/* DIRECTORY LIST */}
        <div className="space-y-4 min-h-75">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border border-[#ede8f5] rounded-tabi-card overflow-hidden transition-all duration-500 ${
                  expandedIndex === index
                    ? "bg-white shadow-2xl ring-1 ring-purple-50"
                    : "bg-white/60 hover:bg-white hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:px-10 md:py-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${expandedIndex === index ? "opacity-0 scale-50" : "opacity-100"}`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2D102D]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                        {member.industry} • {member.city}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full border border-[#ede8f5] flex items-center justify-center transition-all ${expandedIndex === index ? "rotate-180 bg-brand-primary text-white border-brand-primary" : "text-gray-400"}`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 md:px-10 pb-10 overflow-hidden"
                    >
                      <div className="grid lg:grid-cols-12 gap-10 pt-6 border-t border-gray-50">
                        <div className="lg:col-span-4">
                          <div className="relative aspect-4/5 rounded-4xl overflow-hidden border-4 border-white shadow-xl">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="lg:col-span-8 space-y-6 flex flex-col justify-center">
                          <p className="text-2xl italic text-gray-700 leading-relaxed">
                            &quot;{member.bio}&quot;
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">
                                {t("detailLabels.focusAreas")}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.focus.map((f) => (
                                  <span
                                    key={f}
                                    className="px-3 py-1 bg-purple-50 text-brand-primary rounded-lg text-[10px] font-bold"
                                  >
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">
                                {t("detailLabels.currentRole")}
                              </h4>
                              <p className="text-sm font-bold text-gray-900">
                                {member.role}
                              </p>
                            </div>
                          </div>

                          {/* Social links unchanged */}
                          <div className="pt-6 border-t border-gray-50 flex gap-4">
                            {member.socials.linkedin && (
                              <a
                                href={member.socials.linkedin}
                                className="social-link"
                              >
                                <Linkedin size={20} />
                              </a>
                            )}
                            {member.socials.website && (
                              <a
                                href={member.socials.website}
                                className="social-link"
                              >
                                <Globe size={20} />
                              </a>
                            )}
                            {member.socials.instagram && (
                              <a
                                href={member.socials.instagram}
                                className="social-link"
                              >
                                <Instagram size={20} />
                              </a>
                            )}
                            {member.socials.facebook && (
                              <a
                                href={member.socials.facebook}
                                className="social-link"
                              >
                                <Facebook size={20} />
                              </a>
                            )}
                            {member.socials.twitter && (
                              <a
                                href={member.socials.twitter}
                                className="social-link"
                              >
                                <BsTwitterX size={20} />
                              </a>
                            )}
                            {member.socials.substack && (
                              <a
                                href={member.socials.substack}
                                className="social-link"
                              >
                                <BsSubstack size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-brand-primary/40">
                <SearchX size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2D102D] mb-2">
                {t("emptyTitle")}
              </h3>
              <p className="text-gray-500 max-w-sm mb-8">{t("emptyMessage")}</p>
              <button
                onClick={resetFilters}
                className="px-8 py-3 bg-brand-primary text-white rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all"
              >
                {t("resetButton")}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};
