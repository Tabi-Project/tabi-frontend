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
  // Split on single or double newlines, filter empty lines
  const bioParagraphs = member.bio
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

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
        {/* Header */}
        <div
          className="relative flex items-center justify-center"
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
            className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-[#555] hover:bg-[#f3e8ff] hover:text-brand-primary transition-colors duration-200 cursor-pointer"
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

        {/* Body */}
        <div className="px-5 sm:px-10 pt-8 sm:pt-13 pb-16 sm:pb-18">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-10 mb-10 sm:mb-13">
            {/* Left */}
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
              {member.hobbies && member.hobbies.length > 0 && (
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
              )}
            </div>

            {/* Right — avatar */}
            <div
              className="mx-auto sm:mx-0 rounded-full overflow-hidden relative shrink-0"
              style={{
                width: "clamp(160px, 42vw, 383px)",
                height: "clamp(160px, 42vw, 383px)",
                background: member.bgColor ?? "#f0f0f0"
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

          {/* Bio — each line/paragraph rendered separately */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bioParagraphs.map((para, i) => (
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
