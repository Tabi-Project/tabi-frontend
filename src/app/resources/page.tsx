import { Suspense } from "react";
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
  // All data fetched here in the server component — never in client components
  const newsPosts = getNewsPosts();
  const blogPosts = getBlogPosts();
  const allEvents = getAllEvents();
  const featuredEvents = getFeaturedEvents();

  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-16 lg:py-20">
        <Suspense
          fallback={
            <div className="h-12 bg-gray-100 rounded animate-pulse mb-12" />
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
