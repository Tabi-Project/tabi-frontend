"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Linkedin, Globe, Instagram, X, SearchX } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Full data from the Enugu Report
const directoryMembers = [
  {
    name: "Sophia Ahuoyiza",
    role: "Software Engineer & Founder, Tabi",
    industry: "Technology",
    city: "Lagos",
    focus: ["Product Management", "AI Automation", "Empowerment"],
    bio: "Focused on making practical technology education accessible to women in tech and business across Africa.",
    socials: {
      linkedin: "#",
      website: "https://tabiproject.com",
      instagram: "#"
    },
    image: "/directory/sophia.jpg"
  },
  {
    name: "Lady Benedeth Maduka",
    role: "Executive Director, Benedeth Maduka Foundation",
    industry: "Policy",
    city: "Enugu",
    focus: ["GBV Specialist", "Leadership", "Spanish/French Advocacy"],
    bio: "A retired Senior Police Officer advocating for the belief that impact has no retirement age.",
    socials: { linkedin: "#", instagram: "#" },
    image: "/directory/benedeth.jpg"
  },
  {
    name: "Barrister Sylvia Agbana",
    role: "Chairperson, League of Women Voters Nigeria (Enugu)",
    industry: "Governance",
    city: "Enugu",
    focus: ["FIDA Enugu", "Legal Advocacy", "Women Voters"],
    bio: "Dedicated to creating safe spaces for women to connect, collaborate, and thrive in governance.",
    socials: { linkedin: "#", website: "#" },
    image: "/directory/sylvia.jpg"
  },
  {
    name: "Augusta Nneka Nnadi",
    role: "Special Assistant on Strategy & Communications (SEDC)",
    industry: "Governance",
    city: "Enugu",
    focus: ["Policy Specialist", "Communications", "Strategy"],
    bio: "Pushing for qualified women with 'proof of work' to take up space in political systems.",
    socials: { linkedin: "#", twitter: "#" },
    image: "/directory/augusta.jpg"
  },
  {
    name: "Betty Agbo",
    role: "Creative Director at Betscents",
    industry: "Creative",
    city: "Enugu",
    focus: ["Filmmaking", "Acting", "Entrepreneurship"],
    bio: "Leading through storytelling and creative vision, encouraging women to take bold actions.",
    socials: { instagram: "#", website: "#" },
    image: "/directory/betty.jpg"
  }
];

export const TWNDirectory = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("All Industries");
  const [filterCity, setFilterCity] = useState("All Cities");

  // Custom dropdown state (aligns with Navbar logic)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const industries = ["All Industries", "Technology", "Policy", "Governance", "Creative"];
  const cities = ["All Cities", "Enugu", "Lagos", "Accra", "Benin Republic"];

  // Click outside listener
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const resetFilters = () => {
    setFilterIndustry("All Industries");
    setFilterCity("All Cities");
    setOpenDropdown(null);
  };

  const filteredMembers = directoryMembers.filter((member) => {
    const matchesIndustry = filterIndustry === "All Industries" || member.industry === filterIndustry;
    const matchesCity = filterCity === "All Cities" || member.city === filterCity;
    return matchesIndustry && matchesCity;
  });

  return (
    <section className="py-24 bg-[#FDFCFE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#2D102D] mb-4">The Living Directory</h2>
          <p className="text-gray-500 mb-10">
            A curated map of influence featuring the multi-hyphenate leaders within the Tabi Women Network. This directory is a living document, evolving as our network grows and diversifies.
          </p>

          {/* TABI CUSTOM FILTER BAR */}
          <div className="flex flex-wrap items-center gap-4 mb-12" ref={dropdownRef}>
            {/* Industry Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "industry" ? null : "industry")}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#ede8f5] rounded-full text-sm font-medium transition-colors duration-200"
                style={{ color: openDropdown === "industry" || filterIndustry !== "All Industries" ? "#71286F" : "#374151" }}
              >
                {filterIndustry}
                <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === "industry" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openDropdown === "industry" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50">
                    {industries.map((ind) => (
                      <button key={ind} onClick={() => { setFilterIndustry(ind); setOpenDropdown(null); }} className="block w-full text-left px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150">
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
                onClick={() => setOpenDropdown(openDropdown === "city" ? null : "city")}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#ede8f5] rounded-full text-sm font-medium transition-colors duration-200"
                style={{ color: openDropdown === "city" || filterCity !== "All Cities" ? "#71286F" : "#374151" }}
              >
                {filterCity}
                <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === "city" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openDropdown === "city" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50">
                    {cities.map((city) => (
                      <button key={city} onClick={() => { setFilterCity(city); setOpenDropdown(null); }} className="block w-full text-left px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150">
                        {city}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clear All */}
            {(filterIndustry !== "All Industries" || filterCity !== "All Cities") && (
              <button onClick={resetFilters} className="flex items-center gap-1 text-xs font-bold text-brand-primary uppercase tracking-tighter ml-2">
                <X size={14} /> Clear
              </button>
            )}
          </div>
        </div>

        {/* DIRECTORY LIST / EMPTY STATE */}
        <div className="space-y-4 min-h-75">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <div key={index} className={`border border-[#ede8f5] rounded-tabi-card overflow-hidden transition-all duration-500 ${expandedIndex === index ? "bg-white shadow-2xl ring-1 ring-purple-50" : "bg-white/60 hover:bg-white hover:shadow-lg"}`}>
                <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 md:px-10 md:py-8 text-left">
                  <div className="flex items-center gap-6">
                    <div className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${expandedIndex === index ? "opacity-0 scale-50" : "opacity-100"}`}>
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2D102D]">{member.name}</h3>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">{member.industry} • {member.city}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-[#ede8f5] flex items-center justify-center transition-all ${expandedIndex === index ? "rotate-180 bg-brand-primary text-white border-brand-primary" : "text-gray-400"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 md:px-10 pb-10 overflow-hidden">
                      <div className="grid lg:grid-cols-12 gap-10 pt-6 border-t border-gray-50">
                        <div className="lg:col-span-4">
                          <div className="relative aspect-4/5 rounded-4xl overflow-hidden border-4 border-white shadow-xl">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                          </div>
                        </div>
                        <div className="lg:col-span-8 space-y-6 flex flex-col justify-center">
                          <p className="text-2xl italic text-gray-700 leading-relaxed">&quot;{member.bio}&quot;</p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Focus Areas</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.focus.map((f) => <span key={f} className="px-3 py-1 bg-purple-50 text-brand-primary rounded-lg text-[10px] font-bold">{f}</span>)}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Current Role</h4>
                              <p className="text-sm font-bold text-gray-900">{member.role}</p>
                            </div>
                          </div>
                          <div className="pt-6 border-t border-gray-50 flex gap-4">
                            {member.socials.linkedin && <a href={member.socials.linkedin} className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"><Linkedin size={20} /></a>}
                            {member.socials.website && <a href={member.socials.website} className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"><Globe size={20} /></a>}
                            {member.socials.instagram && <a href={member.socials.instagram} className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"><Instagram size={20} /></a>}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            /* EMPTY STATE SECTION */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center justify-center py-20 bg-white/40 border-2 border-dashed border-[#ede8f5] rounded-[3rem] text-center px-6"
            >
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-brand-primary/40">
                <SearchX size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2D102D] mb-2">No matching leaders found</h3>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                We couldn&apos;t find any members matching the &quot;{filterIndustry}&quot; category in {filterCity}. Try expanding your search or resetting the filters.
              </p>
              <button 
                onClick={resetFilters}
                className="px-8 py-3 bg-brand-primary text-white rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};