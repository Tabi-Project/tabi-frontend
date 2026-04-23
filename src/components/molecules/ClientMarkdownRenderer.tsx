"use client";

import dynamic from "next/dynamic";

// Dynamically import the markdown component with SSR disabled
const MarkdownBody = dynamic(
  () => import("@/components/molecules/MarkdownBody"),
  {
    ssr: false,
    loading: () => (
      <div className="prose prose-slate max-w-2xl mx-auto">
        <div className="animate-pulse bg-gray-100 h-40 rounded" />
      </div>
    )
  }
);

export default function ClientMarkdownRenderer({
  content
}: {
  content: string;
}) {
  return <MarkdownBody content={content} />;
}
