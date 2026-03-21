"use client";

import { useState } from "react";
import type { CMSPost } from "@/lib/cms";
import PostCard from "@/components/molecules/Postcard";
import SearchBar from "@/components/atoms/SearchBar";
import Pagination from "@/components/atoms/Pagination";

const PER_PAGE = 6;

interface PostsGridProps {
  title: string;
  posts: CMSPost[];
  basePath: string;
  searchPlaceholder: string;
  category?: "blog" | "news";
}

function EmptyState({
  search,
  category
}: {
  search: string;
  category?: "blog" | "news";
}) {
  const isBlog = category === "blog";

  const Icon = isBlog ? (
    // Blog / pen icon
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22L8.5 21l12-12a2.121 2.121 0 00-3-3L5.5 18 4 22z"
        stroke="#71286F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7l3 3"
        stroke="#71286F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 26h20"
        stroke="#71286F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    // News / newspaper icon
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
        width="18"
        height="20"
        rx="2"
        stroke="#71286F"
        strokeWidth="1.8"
      />
      <path
        d="M21 9h2a2 2 0 012 2v11a2 2 0 01-2 2h-2"
        stroke="#71286F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 10h10M7 14h10M7 18h6"
        stroke="#71286F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-14 h-14 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4">
        {Icon}
      </div>
      <p className="text-sm font-semibold text-[#1a1a2e] mb-1">
        {search
          ? "No results found"
          : isBlog
            ? "No blog posts yet"
            : "No news yet"}
      </p>
      <p className="text-xs text-[#888]">
        {search
          ? `No posts match "${search}"`
          : "Check back soon — content is on its way."}
      </p>
    </div>
  );
}

export default function PostsGrid({
  title,
  posts,
  basePath,
  searchPlaceholder,
  category
}: PostsGridProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#1a1a2e]">{title}</h2>
        <SearchBar
          placeholder={searchPlaceholder}
          value={search}
          onChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
        />
      </div>

      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginated.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              href={`${basePath}/${post.slug}`}
            />
          ))}
        </div>
      ) : (
        <EmptyState search={search} category={category} />
      )}

      {filtered.length > PER_PAGE && (
        <Pagination current={page} total={totalPages} onChange={setPage} />
      )}
    </section>
  );
}
