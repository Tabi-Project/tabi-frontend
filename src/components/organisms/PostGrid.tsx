"use client";

import { useState } from "react";
import { Post } from "@/constants/posts";
import PostCard from "@/components/molecules/Postcard";
import SearchBar from "@/components/atoms/SearchBar";
import Pagination from "@/components/atoms/Pagination";

interface PostsGridProps {
  title: string;
  posts: Post[];
  basePath: string;
  searchPlaceholder: string;
}

export default function PostsGrid({
  title,
  posts,
  basePath,
  searchPlaceholder
}: PostsGridProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            href={`${basePath}/${post.slug}`}
          />
        ))}
      </div>

      <Pagination current={page} total={15} onChange={setPage} />
    </section>
  );
}
