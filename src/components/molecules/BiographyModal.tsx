"use client";

import Image from "next/image";
import { CMSTeamMember } from "@/lib/cms";

const HOBBY_COLORS = [
  { bg: "#EDE9FE", text: "#5B21B6" },
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#FCE7F3", text: "#9D174D" },
  { bg: "#FEF3C7", text: "#92400E" },
  { bg: "#F0FDF4", text: "#166534" }
];

interface BiographyModalProps {
  member: CMSTeamMember;
  onClose: () => void;
}

export default function BiographyModal({
  member,
  onClose
}: BiographyModalProps) {
  const bioParagraphs = member.bio
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* Backdrop with fixed opacity and blur */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: "rgba(0, 0, 0, 0.5)", // Darker for better focus
          backdropFilter: "blur(4px)", // Blurs background content
          WebkitBackdropFilter: "blur(4px)" // Safari support
        }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 right-0 h-full z-50 bg-white overflow-y-auto animate-in slide-in-from-right duration-300"
        style={{
          width: "min(816px, 100vw)",
          boxShadow: "-10px 0 50px rgba(0,0,0,0.15)"
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 bg-white flex items-center justify-center"
          style={{ padding: "20px 40px", borderBottom: "1px solid #E5E7EB" }}
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
            className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6] transition-colors duration-200 cursor-pointer"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-12 pt-8 sm:pt-14 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-12">
            {/* Left Info */}
            <div className="flex-1 min-w-0">
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#111827",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: "0 0 16px 0"
                }}
              >
                {member.name}
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#71286F",
                    display: "inline-block",
                    flexShrink: 0
                  }}
                />
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#4B5563",
                    letterSpacing: "0.01em"
                  }}
                >
                  {member.role}
                </span>
              </div>

              {member.hobbies && member.hobbies.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {member.hobbies.map((hobby, i) => {
                    const c = HOBBY_COLORS[i % HOBBY_COLORS.length];
                    return (
                      <span
                        key={hobby}
                        style={{
                          background: c.bg,
                          color: c.text,
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "8px 20px",
                          borderRadius: 9999,
                          whiteSpace: "nowrap"
                        }}
                      >
                        {hobby}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Avatar */}
            <div
              className="mx-auto lg:mx-0 rounded-full overflow-hidden relative shrink-0 shadow-lg shadow-black/5"
              style={{
                width: "clamp(180px, 45vw, 320px)",
                aspectRatio: "1/1",
                background: member.bgColor ?? "#F9FAFB"
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 480px) 180px, (max-width: 1024px) 45vw, 320px"
              />
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-6 max-w-[640px]">
            {bioParagraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "#374151",
                  lineHeight: 1.8,
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
