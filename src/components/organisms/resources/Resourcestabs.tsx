"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { CMSPost, CMSEvent } from "@/lib/cms";
import PostsPanel from "@/components/organisms/PostsPanel";
import EventsPanel from "@/components/organisms/resources/EventsPanel";

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

interface ResourcesTabsProps {
  newsPosts: CMSPost[];
  blogPosts: CMSPost[];
  allEvents: CMSEvent[];
  featuredEvents: CMSEvent[];
}

export default function ResourcesTabs({
  newsPosts,
  blogPosts,
  allEvents,
  featuredEvents
}: ResourcesTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const raw = searchParams.get("tab");
  const activeTab: TabKey = isValidTab(raw) ? raw : "news";

  function setTab(key: TabKey) {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "news") {
      params.delete("tab");
    } else {
      params.set("tab", key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <div className="flex gap-6 border-b border-gray-200 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setTab(tab.key)}
            className={`pb-3 text-sm font-medium transition-all border-b-2 -mb-px cursor-pointer ${
              activeTab === tab.key
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-[#666] hover:text-[#1a1a2e]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "news" && (
        <PostsPanel
          heroTitle="Latest News"
          gridTitle="More News Updates"
          posts={newsPosts}
          basePath="/resources/blog"
          searchPlaceholder="Search News"
          category="news"
        />
      )}
      {activeTab === "blog" && (
        <PostsPanel
          heroTitle="Latest From Our Blog"
          gridTitle="Discover More Content"
          posts={blogPosts}
          basePath="/resources/blog"
          searchPlaceholder="Search Blog"
          category="blog"
        />
      )}
      {activeTab === "events" && (
        <EventsPanel allEvents={allEvents} featuredEvents={featuredEvents} />
      )}
    </>
  );
}
