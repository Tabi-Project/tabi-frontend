"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Components } from "react-markdown";

interface CaseStudyBodyProps {
  body: string;
}

const components: Components = {
  // ── Headings ──────────────────────────────────────────────────────
  h2: ({ children }) => (
    <h2
      className="text-xl sm:text-2xl font-bold text-brand-primary mt-12 mb-4 leading-snug"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {children}
    </h2>
  ),

  h3: ({ children }) => {
    const text = String(children);
    // Numbered finding: "01 — The stated problem..."
    const match = text.match(/^(\d+)\s*[—\-]\s*(.+)/);
    if (match) {
      return (
        <div className="flex gap-0 my-8 rounded-xl overflow-hidden border border-[#E5E7EB]">
          <div
            className="w-12 shrink-0 flex items-center justify-center font-black text-xs text-white"
            style={{
              background: "#71286F",
              writingMode: "vertical-rl",
              letterSpacing: "0.1em",
              paddingTop: "1rem",
              paddingBottom: "1rem"
            }}
          >
            {match[1]}
          </div>
          <div className="flex-1 px-6 py-5">
            <h3 className="text-base font-bold text-[#1a1a2e] leading-snug">
              {match[2]}
            </h3>
          </div>
        </div>
      );
    }
    return (
      <h3 className="text-lg font-bold text-[#1a1a2e] mt-8 mb-3">{children}</h3>
    );
  },

  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-[#1a1a2e] mt-6 mb-2">
      {children}
    </h4>
  ),

  // ── Paragraph ─────────────────────────────────────────────────────
  p: ({ children }) => (
    <p className="text-[15px] text-[#333] leading-[1.85] mb-4">{children}</p>
  ),

  // ── Bullet list ───────────────────────────────────────────────────
  ul: ({ children }) => <ul className="my-5 space-y-2 pl-0">{children}</ul>,

  // ── Numbered list ─────────────────────────────────────────────────
  ol: ({ children }) => (
    <ol className="my-5 space-y-2 pl-0 list-none counter-reset-none">
      {children}
    </ol>
  ),

  // ── List item ─────────────────────────────────────────────────────
  li: ({ children, ...props }) => {
    const isOrdered = (props as { ordered?: boolean }).ordered;
    return (
      <li className="flex items-start gap-3 text-[15px] text-[#333] leading-[1.8]">
        <span
          className="shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: "#F3E8FF" }}
        >
          {isOrdered ? (
            <span className="text-[10px] font-bold text-brand-primary">•</span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary block" />
          )}
        </span>
        <span>{children}</span>
      </li>
    );
  },

  // ── Blockquote ────────────────────────────────────────────────────
  blockquote: ({ children }) => (
    <blockquote className="my-8 pl-6 border-l-4 border-brand-primary bg-[#FDFAFF] rounded-r-xl py-5 pr-6">
      <div className="text-base italic text-[#333] leading-relaxed font-medium">
        {children}
      </div>
    </blockquote>
  ),

  // ── Table ─────────────────────────────────────────────────────────
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-[#E5E7EB]">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),

  thead: ({ children }) => <thead className="bg-brand-primary">{children}</thead>,

  th: ({ children }) => (
    <th className="px-4 py-3 text-left bg-brand-primary text-white font-bold text-xs uppercase tracking-wider">
      {children}
    </th>
  ),

  tbody: ({ children }) => <tbody>{children}</tbody>,

  tr: ({ children, ...props }) => {
    // Can't easily get row index here, so use alternating via CSS
    return <tr className="even:bg-[#FDFAFF] odd:bg-white">{children}</tr>;
  },

  td: ({ children }) => {
    const text = String(children).toLowerCase();
    const isStatus =
      text.includes("completed") ||
      text.includes("session") ||
      text.includes("initial") ||
      text.includes("no session");

    if (isStatus) {
      const color = text.includes("completed")
        ? { bg: "#71286F", text: "white" }
        : text.includes("one session")
          ? { bg: "#C4A55A", text: "white" }
          : text.includes("initial")
            ? { bg: "#C4A55A", text: "white" }
            : { bg: "#E5E7EB", text: "#666" };
      return (
        <td className="px-4 py-3 align-top border-t border-[#F0E8F5]">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
            style={{ background: color.bg, color: color.text }}
          >
            {children}
          </span>
        </td>
      );
    }
    return (
      <td className="px-4 py-3 align-top text-[#333] leading-relaxed border-t border-[#F0E8F5]">
        {children}
      </td>
    );
  },

  // ── Horizontal rule ───────────────────────────────────────────────
  hr: () => <hr className="my-10 border-[#F0E8F5]" />,

  // ── Strong ────────────────────────────────────────────────────────
  strong: ({ children }) => (
    <strong className="font-bold text-[#1a1a2e]">{children}</strong>
  ),

  // ── Links ─────────────────────────────────────────────────────────
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-primary underline underline-offset-2 hover:no-underline transition-all"
    >
      {children}
    </a>
  ),

  // ── Images in body ────────────────────────────────────────────────
  img: ({ src, alt }) => (
    <span className="block my-8 rounded-2xl overflow-hidden">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={780}
        height={440}
        className="w-full h-auto object-cover rounded-2xl"
        loading="lazy"
        quality={80}
      />
      {alt && (
        <span className="block text-xs text-[#888] text-center mt-2 italic">
          {alt}
        </span>
      )}
    </span>
  ),

  // ── Code ──────────────────────────────────────────────────────────
  code: ({ children }) => (
    <code
      className="px-1.5 py-0.5 rounded text-xs font-mono"
      style={{ background: "#F3E8FF", color: "#71286F" }}
    >
      {children}
    </code>
  )
};

export default function CaseStudyBody({ body }: CaseStudyBodyProps) {
  return (
    <article>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {body}
      </ReactMarkdown>
    </article>
  );
}
