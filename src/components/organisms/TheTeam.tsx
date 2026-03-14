"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/constants/paths";

const TEAM = [
  {
    id: 1,
    name: "Sophia Ahuoyiza Abubakar",
    role: "DIRECTOR",
    image: withBasePath("/about/team-1.png"),
    bgColor: "#f0f0f0",
    bio: "Sophia is a passionate advocate for education and technological advancement. She is the visionary leader behind Tabi Empowerment and Educational (TEE) Foundation. With a deep-rooted commitment to bridging the gender gap in technology, she has dedicated their career to empowering African women through innovative tech education and development programs.\n\nUnder Sophia's leadership, TEE Foundation has grown into a transformative force, fostering an inclusive tech ecosystem where women are equipped to lead and innovate. With a background in [mention relevant background or experience], [CEO's Name] brings a wealth of knowledge and a unique perspective to the foundation, driving its mission forward with unwavering dedication and a visionary outlook. Her leadership inspires not only the organization but also the countless women who benefit from TEEF's programs, helping to pave the way for a brighter, more inclusive future in technology.\n\nShe enjoys meeting people and making new friends. She is fluent in Spanish and is currently French",
    hobbies: ["Traveling", "Reading", "Swimming", "Playing Golf", "Dancing"]
  },
  {
    id: 2,
    name: "Ihuoma Favor Agbaru",
    role: "PRODUCT MANAGER",
    image: withBasePath("/about/team-2.png"),
    bgColor: "#F5A623",
    bio: "Ihuoma is a passionate advocate for education and technological advancement. She brings a unique perspective to the foundation with her background in tech and community building.\n\nShe enjoys meeting people and making new friends.",
    hobbies: ["Reading", "Mentoring", "Coding"]
  },
  {
    id: 3,
    name: "Glory Chinemerem Okafor",
    role: "FRONTEND LEAD",
    image: withBasePath("/about/team-3.png"),
    bgColor: "#e8e0d0",
    bio: "A dedicated professional committed to bridging the gender gap in technology through education and community programs.",
    hobbies: ["Teaching", "Research", "Networking"]
  },
  {
    id: 4,
    name: "Sophia Ahuoyiza Abubakar",
    role: "CEO & FOUNDER",
    image: withBasePath("/about/team-4.png"),
    bgColor: "#f0f0f0",
    bio: "A dedicated professional committed to bridging the gender gap in technology through education and community programs.",
    hobbies: ["Innovation", "Writing", "Traveling"]
  },
  {
    id: 5,
    name: "Sophia Ahuoyiza Abubakar",
    role: "CEO & FOUNDER",
    image: withBasePath("/about/team-2.png"),
    bgColor: "#e8e0d0",
    bio: "A dedicated professional committed to bridging the gender gap in technology through education and community programs.",
    hobbies: ["Design", "Photography", "Yoga"]
  },
  {
    id: 6,
    name: "Sophia Ahuoyiza Abubakar",
    role: "CEO & FOUNDER",
    image: withBasePath("/about/team-1.png"),
    bgColor: "#F5A623",
    bio: "A dedicated professional committed to bridging the gender gap in technology through education and community programs.",
    hobbies: ["Coding", "Mentoring", "Swimming"]
  }
];

type TeamMember = (typeof TEAM)[0];

const HOBBY_COLORS = [
  { bg: "#EDE9FE", text: "#5B21B6" },
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#FCE7F3", text: "#9D174D" },
  { bg: "#FEF3C7", text: "#92400E" },
  { bg: "#F0FDF4", text: "#166534" }
];

function BiographyModal({
  member,
  onClose
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.18)" }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 right-0 h-full z-50 bg-white overflow-y-auto"
        style={{
          width: "min(816px, 100vw)",
          boxShadow: "-8px 0 48px rgba(0,0,0,0.10)"
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid #E5E7EB"
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111827"
            }}
          >
            Biography
          </span>

          <button
            onClick={onClose}
            className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-[#555] hover:bg-[#f3e8ff] hover:text-brand-primary transition-colors duration-200"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-5 sm:px-10 pt-8 sm:pt-13 pb-16 sm:pb-18">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-10 mb-10 sm:mb-13">
            <div className="flex-1 min-w-0 sm:pt-3">
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.15,
                  margin: "0 0 14px 0"
                }}
              >
                {member.name}
              </h2>

              <div className="flex items-center gap-2 mb-7 sm:mb-9">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#71286F",
                    display: "inline-block",
                    flexShrink: 0
                  }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111827",
                    letterSpacing: "0.03em"
                  }}
                >
                  {member.role}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {member.hobbies.map((hobby, i) => {
                  const c = HOBBY_COLORS[i % HOBBY_COLORS.length];
                  return (
                    <span
                      key={hobby}
                      style={{
                        background: c.bg,
                        color: c.text,
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "7px 18px",
                        borderRadius: 9999,
                        whiteSpace: "nowrap"
                      }}
                    >
                      {hobby}
                    </span>
                  );
                })}
              </div>
            </div>

            <div
              className="mx-auto sm:mx-0 rounded-full overflow-hidden relative shrink-0"
              style={{
                width: "clamp(160px, 42vw, 383px)",
                height: "clamp(160px, 42vw, 383px)",
                background: member.bgColor
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 480px) 160px, (max-width: 816px) 42vw, 383px"
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {member.bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#374151",
                  lineHeight: 1.85,
                  margin: 0
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TeamCard({
  member,
  onClick
}: {
  member: TeamMember;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center text-center w-full"
    >
      <div
        className="relative rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "clamp(160px, 42vw, 282px)",
          height: "clamp(160px, 42vw, 282px)",
          background: member.bgColor
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 480px) 160px, (max-width: 816px) 42vw, 282px"
        />
      </div>
      <p className="text-2xl font-bold text-[#121212] leading-snug mb-1 group-hover:text-brand-primary transition-colors duration-200">
        {member.name}
      </p>
      <p className="text-base font-normal leading-loose tracking-normal uppercase text-[#444444]">
        {member.role}
      </p>
    </button>
  );
}

export default function TheTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="w-full bg-white">
        <div className="flex mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="mb-12">
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary"
              style={{ background: "#F3E8FF" }}
            >
              The Team
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
            {TEAM.map((member, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const totalRows = Math.ceil(TEAM.length / 3);
              return (
                <div
                  key={member.id}
                  className="flex flex-col items-center pt-2 pb-12 px-6"
                  style={{
                    borderRight: col !== 2 ? "1px solid #E5E7EB" : "none",
                    borderBottom:
                      row < totalRows - 1 ? "1px solid #E5E7EB" : "none"
                  }}
                >
                  <TeamCard
                    member={member}
                    onClick={() => setSelected(member)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <BiographyModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
