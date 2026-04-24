import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Utility to ensure slugs are always URL-safe.
 * Removes symbols like ₦, $, commas, and extra spaces.
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars (removes ₦, $, etc.)
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// ─── Generic file reader ──────────────────────────────────────────────────────

function getFiles(folder: string): string[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".json"));
}

function readMarkdown<T>(
  folder: string,
  filename: string
): T & { slug: string; body: string } {
  const filePath = path.join(CONTENT_DIR, folder, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Generate a clean slug from the filename
  const rawSlug = filename.replace(/\.(md|json)$/, "");
  const cleanSlug = slugify(rawSlug);

  // Include the markdown body as "body" so detail pages can render it
  return {
    ...(data as T),
    slug: cleanSlug,
    body: content.trim()
  } as T & { slug: string; body: string };
}

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

// ─── Posts (Blog + News) ──────────────────────────────────────────────────────

export type CMSPost = {
  slug: string;
  title: string;
  category: "blog" | "news";
  date: string;
  author?: string;
  authorAvatar?: string;
  readTime?: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
  body?: string;
};

export function getAllPosts(): CMSPost[] {
  try {
    return getFiles("posts")
      .map((f) => readMarkdown<CMSPost>("posts", f))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getBlogPosts(): CMSPost[] {
  return getAllPosts().filter((p) => p.category === "blog");
}

export function getNewsPosts(): CMSPost[] {
  return getAllPosts().filter((p) => p.category === "news");
}

export function getPostBySlug(slug: string): CMSPost | undefined {
  // Slugify the search term to ensure matches against cleaned slugs
  const targetSlug = slugify(slug);
  return getAllPosts().find((p) => p.slug === targetSlug);
}

// ─── Events ───────────────────────────────────────────────────────────────────

export type CMSEvent = {
  slug: string;
  title: string;
  category: string;
  mode: "In-Person" | "Online" | "Hybrid";
  location: string;
  address?: string;
  date: string;
  month: string;
  day: string;
  time: string;
  timezone: string;
  image?: string;
  eventUrl?: string;
  ctaLabel?: "Register" | "More Info";
  featured?: boolean;
  tags?: string[];
  description?: string;
};

export function getAllEvents(): CMSEvent[] {
  try {
    return getFiles("events")
      .map((f) => readMarkdown<CMSEvent>("events", f))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } catch {
    return [];
  }
}

export function getFeaturedEvents(): CMSEvent[] {
  return getAllEvents().filter((e) => e.featured);
}

export function getNonFeaturedEvents(): CMSEvent[] {
  return getAllEvents().filter((e) => !e.featured);
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export type CMSTeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  hobbies: string[];
  order: number;
  bgColor?: string;
};

export function getAllTeamMembers(): CMSTeamMember[] {
  try {
    return getFiles("team")
      .map((f) => readMarkdown<CMSTeamMember>("team", f))
      .sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export type CMSProject = {
  slug: string;
  title: string;
  description: string;
  order: number;
  href: string;
  images?: string[];
  video?: string;
  videoThumb?: string;
  hasTestimonial?: boolean;
  published?: boolean;
  testimonial?: CMSTestimonial;
};

export function getAllProjects(): CMSProject[] {
  try {
    return getFiles("projects")
      .map((f) => readMarkdown<CMSProject>("projects", f))
      .filter((p) => p.published !== false)
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch {
    return [];
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type CMSTestimonial = {
  slug: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  featured?: boolean;
  order?: number;
};

export function getAllTestimonials(): CMSTestimonial[] {
  try {
    return getFiles("testimonials")
      .map((f) => readMarkdown<CMSTestimonial>("testimonials", f))
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch {
    return [];
  }
}

export function getFeaturedTestimonial(): CMSTestimonial | undefined {
  const all = getAllTestimonials();
  return all.find((t) => t.featured) ?? all[0];
}

// Get a testimonial by its order number
export function getTestimonialByOrder(order: number): CMSTestimonial | undefined {
  const testimonials = getAllTestimonials();
  return testimonials.find((t) => t.order === order);
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export type CMSGalleryImage = {
  slug: string;
  category: "learnable" | "meetup" | "sprints";
  src: string;
  alt: string;
  caption: string;
  order?: number;
};

export function getAllGalleryImages(): CMSGalleryImage[] {
  try {
    return getFiles("gallery")
      .map((f) => readMarkdown<CMSGalleryImage>("gallery", f))
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch {
    return [];
  }
}


// ─── Case Studies ─────────────────────────────────────────────────────────────

export type CMSCaseStat = {
  value: string;
  label: string;
};

export type CMSCaseStudy = {
  slug: string;
  title: string;
  author?: string;
  authorRole?: string;
  date: string;
  programme?: string;
  excerpt: string;
  coverImage?: string;
  featured?: boolean;
  stats?: CMSCaseStat[];
  tags?: string[];
  body: string;
};

export function getAllCaseStudies(): CMSCaseStudy[] {
  try {
    return getFiles("case-studies")
      .map((f) => readMarkdown<CMSCaseStudy>("case-studies", f))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getCaseStudyBySlug(slug: string): CMSCaseStudy | undefined {
  const target = slugify(slug);
  return getAllCaseStudies().find((c) => c.slug === target);
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export type CMSSettings = {
  consultancySlots: number;
  whatsappUrl: string;
  contactEmail: string;
};

export function getSettings(): CMSSettings {
  const filePath = path.join(CONTENT_DIR, "settings/general.json");
  if (!fs.existsSync(filePath)) {
    return {
      consultancySlots: 5,
      whatsappUrl: "https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo",
      contactEmail: "hello@tabiproject.com"
    };
  }
  return readJson<CMSSettings>(filePath);
}
