import type { MetadataRoute } from "next";
import { getAllPosts, getAllEvents } from "@/lib/cms";

const BASE_URL = "https://tabiproject.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const events = getAllEvents();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${BASE_URL}/consultancy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE_URL}/ai-for-businesses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Blog & news posts
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.6
  }));

  // Events (future events higher priority)
  const eventPages: MetadataRoute.Sitemap = events.map((event) => {
    const eventDate = new Date(event.date);
    const isFuture = eventDate > new Date();
    return {
      url: `${BASE_URL}/resources?tab=events`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: isFuture ? 0.7 : 0.4
    };
  });

  // Deduplicate event URLs (they all point to /resources?tab=events)
  const uniqueEventPage =
    eventPages.length > 0
      ? [
          {
            url: `${BASE_URL}/resources?tab=events`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7
          }
        ]
      : [];

  return [...staticPages, ...postPages, ...uniqueEventPage];
}
