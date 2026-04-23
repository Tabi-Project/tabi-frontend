// components/molecules/MarkdownBody.tsx
"use client";

import ReactMarkdown from "react-markdown";

export default function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-2xl text-[#333] text-sm leading-[1.8] mx-auto">
      <ReactMarkdown
        components={{
          h2: ({ ...props }) => (
            <h2
              className="font-bold text-[#1a1a2e] text-xl mt-10 mb-3"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="font-semibold text-[#1a1a2e] text-base mt-7 mb-2"
              {...props}
            />
          ),
          h4: ({ ...props }) => (
            <h4
              className="font-semibold text-[#1a1a2e] text-sm mt-5 mb-1"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className="mb-4 text-sm text-[#444] leading-[1.85]" {...props} />
          ),
          a: ({ ...props }) => (
            <a
              className="text-brand-primary font-medium underline hover:opacity-80 transition-opacity"
              {...props}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
