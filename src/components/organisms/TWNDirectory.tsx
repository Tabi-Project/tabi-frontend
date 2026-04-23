"use client";

import { useState, useRef, useEffect } from "react";
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

// Full data from the Enugu Report
const directoryMembers = [
  {
    name: "Sophia Ahuoyiza",
    role: "Software Engineer & Executive Director, Tabi",
    industry: "Technology",
    city: "Enugu",
    focus: ["Product Management", "Yelobyte Studios", "AI Automation"],
    bio: "Software Engineer and Co-founder of Yelobyte Studios, focused on making technology education accessible to women across Africa.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sophia-abubakar/",
      website: "https://tabiproject.com",
      instagram:
        "https://www.instagram.com/sophiaoyiza?igsh=MWg5eXV2d2RhZ28xcA=="
    },
    image: "/directory/sophia-ahuoyiza.png"
  },
  {
    name: "Lady Benedeth Maduka",
    role: "Executive Director, Benedeth Maduka Foundation",
    industry: "Policy",
    city: "Enugu",
    focus: ["GBV Specialist", "Security Advocacy", "Leadership"],
    bio: "A retired Senior Police Officer and GBV specialist advocating for the belief that impact has no retirement age.",
    socials: {
      facebook: "https://www.facebook.com/share/1E84b1pQwJ/"
    },
    image: "/directory/benedeth.png"
  },
  {
    name: "Barrister Sylvia Agbana",
    role: "Chairperson, League of Women Voters Nigeria (Enugu)",
    industry: "Governance",
    city: "Enugu",
    focus: ["FIDA Enugu", "Legal Advocacy", "Women Rights"],
    bio: "Former Chairperson of FIDA Enugu, dedicated to creating safe spaces for women to lead and thrive in governance.",
    socials: { linkedin: "#", website: "#" },
    image: "/directory/image.png"
  },
  {
    name: "Augusta Nneka Nnadi",
    role: "SA on Strategy & Communications (SEDC)",
    industry: "Governance",
    city: "Enugu",
    focus: ["Politics", "Policy Specialist", "Strategic Comms"],
    bio: "Politics and Policy specialist pushing for qualified women with 'proof of work' to take up space in political systems.",
    socials: {
      linkedin: "https://www.linkedin.com/in/augusta-nneka-b32b981b4/",
      twitter: "https://twitter.com/nneka_augusta",
      instagram: "https://www.instagram.com/n.n.e.k.a/?hl=en",
      facebook: "https://www.facebook.com/augusta.nneka.7?mibextid=LQQJ4d",
      substack: "https://augustanneka.substack.com/"
    },
    image: "/directory/augusta.jpeg"
  },
  {
    name: "Betty Agbo",
    role: "Creative Director, Betscents",
    industry: "Creative",
    city: "Enugu",
    focus: ["Filmmaking", "Acting", "Creative Branding"],
    bio: "Filmmaker and Actor leading through storytelling, encouraging women to take bold actions in the creative economy.",
    socials: {
      linkedin: "https://www.linkedin.com/in/betty-agbo-080617170/",
      instagram:
        "https://www.instagram.com/officialbettyagbo?igsh=MWwxa3czbXAweGg4eA=="
    },
    image: "/directory/betty.png"
  },
  {
    name: "Amarachi Okeke",
    role: "Product Manager & NGO Lead",
    industry: "Technology",
    city: "Enugu",
    focus: ["Sustainability", "Product Strategy", "Social Initiatives"],
    bio: "Product Manager co-running Sustainable Initiatives NGO, bridging the gap between tech efficiency and social good.",
    socials: {
      linkedin: "https://www.linkedin.com/in/amarachi-okeke-b4b486236/"
    },
    image: "/directory/amara.png"
  },
  {
    name: "Tracy Jerry Ugwu",
    role: "Product Marketing Lead & Co-founder",
    industry: "Education",
    city: "Enugu",
    focus: ["Special Needs Education", "Inclusive Learning", "PMM"],
    bio: "Co-founder of an inclusive school for special needs children and a seasoned lead in Product Marketing.",
    socials: {
      linkedin: "https://www.linkedin.com/in/tracy-jerry-ugwu/",
      instagram: "https://www.instagram.com/tracy_ug?igsh=MTk3eDlsejFxOGw1dQ=="
    },
    image: "/directory/tracy.png"
  },
  {
    name: "Ijeoma Achu",
    role: "Program’s Manager, Tabi",
    industry: "Management",
    city: "Enugu",
    focus: ["Program Strategy", "Operational Excellence", "Community"],
    bio: "Orchestrating the framework and delivery of Tabi’s missions to ensure impactful results for every cohort.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ijeoma-achu/"
    },
    image: "/directory/ijeoma.png"
  }
];

export const TWNDirectory = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("All Industries");
  const [filterCity, setFilterCity] = useState("All Cities");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const industries = [
    "All Industries",
    "Technology",
    "Policy",
    "Governance",
    "Creative",
    "Management",
    "Education"
  ];
  const cities = ["All Cities", "Enugu", "Enugu", "Accra", "Benin Republic"];

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
    setFilterIndustry("All Industries");
    setFilterCity("All Cities");
    setOpenDropdown(null);
  };

  const filteredMembers = directoryMembers.filter((member) => {
    const matchesIndustry =
      filterIndustry === "All Industries" || member.industry === filterIndustry;
    const matchesCity =
      filterCity === "All Cities" || member.city === filterCity;
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
              The Living Directory
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl">
              A living resource for women who lead. Find collaborators, build
              partnerships, and access opportunities across Africa. Every
              attendee is added to this growing pan‑African directory.
            </p>
          </motion.div>

          {/* Filter Bar (no animation needed – stays interactive) */}
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
                    filterIndustry !== "All Industries"
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
                    openDropdown === "city" || filterCity !== "All Cities"
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

            {/* Clear All */}
            {(filterIndustry !== "All Industries" ||
              filterCity !== "All Cities") && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs font-bold text-brand-primary uppercase tracking-tighter ml-2"
              >
                <X size={14} /> Clear
              </button>
            )}
          </div>
        </div>

        {/* DIRECTORY LIST / EMPTY STATE */}
        <div className="space-y-4 min-h-75">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <motion.div
                key={index}
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
                      className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                        expandedIndex === index
                          ? "opacity-0 scale-50"
                          : "opacity-100"
                      }`}
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
                    className={`w-10 h-10 rounded-full border border-[#ede8f5] flex items-center justify-center transition-all ${
                      expandedIndex === index
                        ? "rotate-180 bg-brand-primary text-white border-brand-primary"
                        : "text-gray-400"
                    }`}
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
                                Focus Areas
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
                                Current Role
                              </h4>
                              <p className="text-sm font-bold text-gray-900">
                                {member.role}
                              </p>
                            </div>
                          </div>
                          <div className="pt-6 border-t border-gray-50 flex gap-4">
                            {member.socials.linkedin && (
                              <a
                                href={member.socials.linkedin}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
                              >
                                <Linkedin size={20} />
                              </a>
                            )}
                            {member.socials.website && (
                              <a
                                href={member.socials.website}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
                              >
                                <Globe size={20} />
                              </a>
                            )}
                            {member.socials.instagram && (
                              <a
                                href={member.socials.instagram}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
                              >
                                <Instagram size={20} />
                              </a>
                            )}
                            {member.socials.facebook && (
                              <a
                                href={member.socials.facebook}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
                              >
                                <Facebook size={20} />
                              </a>
                            )}
                            {member.socials.twitter && (
                              <a
                                href={member.socials.twitter}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
                              >
                                <BsTwitterX size={20} />
                              </a>
                            )}
                            {member.socials.substack && (
                              <a
                                href={member.socials.substack}
                                className="p-2.5 bg-gray-50 rounded-full hover:bg-brand-surface text-gray-600 hover:text-brand-primary transition-all"
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-20 bg-white/40 border-2 border-dashed border-[#ede8f5] rounded-[3rem] text-center px-6"
            >
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-brand-primary/40">
                <SearchX size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2D102D] mb-2">
                No matching leaders found
              </h3>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                We couldn&apos;t find any members matching the &quot;
                {filterIndustry}&quot; category in {filterCity}. Try expanding
                your search or resetting the filters.
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
    </motion.section>
  );
};
