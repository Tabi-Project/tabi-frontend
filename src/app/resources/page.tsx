import { Suspense } from "react";
import Link from "next/link";
import {
  getBlogPosts,
  getNewsPosts,
  getAllEvents,
  getFeaturedEvents
} from "@/lib/cms";
import ResourcesTabs from "@/components/organisms/Resourcestabs";

export const metadata = {
  title: "Resources | TEE Foundation",
  description:
    "Explore the latest news, blog posts, events and webinars from TEE Foundation."
};

export default function ResourcesPage() {
  const newsPosts = getNewsPosts();
  const blogPosts = getBlogPosts();
  const allEvents = getAllEvents();
  const featuredEvents = getFeaturedEvents();

  return (
    <main
      className="w-full bg-white"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#878787] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">Resources</span>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold mb-4 tracking-tight"
            style={{
              background:
                "linear-gradient(180deg, #FFCC70 0%, #C850C0 50%, #71286F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            TEE Foundation Resources
          </h1>
          <p className="text-base text-[#444] max-w-5xl leading-relaxed">
            Stay up-to-date with what&apos;s happening at TEE Foundation.
            Explore our latest news, upcoming events, expert blog posts, and
            webinars.
          </p>
        </header>

        {/* Interactive Tabs */}
        <Suspense
          fallback={
            <div className="space-y-8 animate-pulse">
              <div className="h-10 w-full max-w-md bg-gray-100 rounded-lg" />
              <div className="h-100 w-full bg-gray-50 rounded-2xl" />
            </div>
          }
        >
          <ResourcesTabs
            newsPosts={newsPosts}
            blogPosts={blogPosts}
            allEvents={allEvents}
            featuredEvents={featuredEvents}
          />
        </Suspense>
      </div>
    </main>
  );
}
