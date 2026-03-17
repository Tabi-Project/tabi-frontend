"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { BLOG_POSTS, NEWS_POSTS } from "@/constants/posts";
import PostsPanel from "@/components/organisms/PostsPanel";
import EventsPanel from "@/components/organisms/EventsPanel";

const TABS = [
  { key: "news", label: "News" },
  { key: "blog", label: "Blog Posts" },
  { key: "events", label: "Events & Webinars" }
] as const;

type TabKey = (typeof TABS)[number]["key"];

const VALID_TABS = TABS.map((t) => t.key);

function isValidTab(value: string | null): value is TabKey {
  return VALID_TABS.includes(value as TabKey);
}

export default function ResourcesTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read active tab from URL, fall back to "news"
  const raw = searchParams.get("tab");
  const activeTab: TabKey = isValidTab(raw) ? raw : "news";

  function setTab(key: TabKey) {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "news") {
      params.delete("tab"); // keep URL clean for default tab
    } else {
      params.set("tab", key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      {/* Tab bar */}
      <div className="flex gap-6 border-b border-gray-200 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setTab(tab.key)}
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
    </>
  );
}
