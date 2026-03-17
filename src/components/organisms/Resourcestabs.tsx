"use client";

import { useState } from "react";
import { BLOG_POSTS, NEWS_POSTS } from "@/constants/posts";
import PostsPanel from "@/components/organisms/PostsPanel";
import EventsPanel from "@/components/organisms/EventsPanel";
// import EmptyTabPanel from "@/components/organisms/EmptyTabPanel";

const TABS = [
  { key: "news", label: "News" },
  { key: "blog", label: "Blog Posts" },
  { key: "events", label: "Events & Webinars" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function ResourcesTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("news");

  return (
    <>
      {/* Tab bar */}
      <div className="flex gap-6 border-b border-gray-200 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 text-sm font-medium transition-all border-b-2 -mb-px ${
              activeTab === tab.key
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-[#666] hover:text-[#1a1a2e]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activeTab === "news" && (
        <PostsPanel
          heroTitle="Latest News"
          gridTitle="More News Update"
          posts={NEWS_POSTS}
          basePath="/resources/blog"
          searchPlaceholder="Search News"
        />
      )}
      {activeTab === "blog" && (
        <PostsPanel
          heroTitle="Latest From our Blog"
          gridTitle="Discover More Content"
          posts={BLOG_POSTS}
          basePath="/resources/blog"
          searchPlaceholder="Search Blog"
        />
      )}
      {activeTab === "events" && <EventsPanel />}
      {/* {activeTab === "product" && <EmptyTabPanel label="Product Updates" />} */}
    </>
  );
}
