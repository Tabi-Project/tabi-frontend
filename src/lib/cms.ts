import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");


function translatedField<T>(
  data: Record<string, any>,
  field: string,
  locale: string
): T {
  // Try the language‑specific field first
  if (locale === "fr" && data[`${field}_fr`]) {
    return data[`${field}_fr`] as T;
  }
  // Fallback to the English field or the generic field (for backward compatibility)
  return (data[`${field}_en`] ?? data[field]) as T;
}

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
  testimonial?: CMSTestimonial;   // attached later
};

export function getAllProjects(locale: string = 'en'): CMSProject[] {
  try {
    return getFiles("projects")
      .map((f) => {
        const raw = path.join(CONTENT_DIR, "projects", f);
        const content = fs.readFileSync(raw, "utf-8");
        const { data } = matter(content);

        // Use the French field if present and not empty, else fallback to English
        const title =
          locale === 'fr' && data.title_fr ? data.title_fr : data.title;
        const description =
          locale === 'fr' && data.description_fr
            ? data.description_fr
            : data.description;

        return {
          slug: slugify(f.replace(/\.md$/, "")),
          title,
          description,
          order: data.order ?? 99,
          href: data.href ?? '#',
          images: data.images ?? [],
          video: data.video,
          videoThumb: data.videoThumb,
          hasTestimonial: data.hasTestimonial ?? false,
          published: data.published ?? true,
          testimonial: undefined,
        } as CMSProject;
      })
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

export function getAllTestimonials(locale: string = 'en'): CMSTestimonial[] {
  try {
    return getFiles("testimonials")
      .map((f) => {
        const raw = path.join(CONTENT_DIR, "testimonials", f);
        const content = fs.readFileSync(raw, "utf-8");
        const { data } = matter(content);

        const name =
          locale === 'fr' && data.name_fr ? data.name_fr : data.name;
        const role =
          locale === 'fr' && data.role_fr ? data.role_fr : data.role;
        const quote =
          locale === 'fr' && data.quote_fr ? data.quote_fr : data.quote;

        return {
          slug: slugify(f.replace(/\.md$/, "")),
          name,
          role,
          quote,
          avatar: data.avatar,
          featured: data.featured ?? false,
          order: data.order ?? 99,
        } as CMSTestimonial;
      })
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch {
    return [];
  }
}

export function getFeaturedTestimonial(locale: string = 'en'): CMSTestimonial | undefined {
  return getAllTestimonials(locale).find((t) => t.featured) ?? getAllTestimonials(locale)[0];
}

export function getTestimonialByOrder(order: number, locale: string = 'en'): CMSTestimonial | undefined {
  return getAllTestimonials(locale).find((t) => t.order === order);
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
