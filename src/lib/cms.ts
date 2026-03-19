import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

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
): T & { slug: string } {
  const filePath = path.join(CONTENT_DIR, folder, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  const slug = filename.replace(/\.(md|json)$/, "");
  return { ...(data as T), slug };
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
  author: string;
  readTime?: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  body?: string;
};

export function getAllPosts(): CMSPost[] {
  return getFiles("posts")
    .map((f) => readMarkdown<CMSPost>("posts", f))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPosts(): CMSPost[] {
  return getAllPosts().filter((p) => p.category === "blog");
}

export function getNewsPosts(): CMSPost[] {
  return getAllPosts().filter((p) => p.category === "news");
}

export function getPostBySlug(slug: string): CMSPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
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
  image: string;
  eventUrl?: string;
  ctaLabel?: "Register" | "More Info";
  featured?: boolean;
  tags?: string[];
  description?: string;
};

export function getAllEvents(): CMSEvent[] {
  return getFiles("events")
    .map((f) => readMarkdown<CMSEvent>("events", f))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
  return getFiles("team")
    .map((f) => readMarkdown<CMSTeamMember>("team", f))
    .sort((a, b) => a.order - b.order);
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
};

export function getAllProjects(): CMSProject[] {
  return getFiles("projects")
    .map((f) => readMarkdown<CMSProject>("projects", f))
    .filter((p) => p.published !== false)
    .sort((a, b) => a.order - b.order);
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
