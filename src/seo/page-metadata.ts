import type { Metadata } from "next";

const BASE_URL = "https://tabiproject.com";

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutMetadata: Metadata = {
  title: "About Our Mission",
  description:
    "Discover Tabi Academy's mission to empower African women through tech education. Learn how Tabi Empowerment & Educational Foundation (TEE) is bridging the digital divide.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Tabi Academy | Empowering African Women in Tech",
    description:
      "Meet the team behind Tabi Academy. We provide technology and innovation training to transform the lives of women across Africa.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        type: "image/jpeg"
      }
    ]
  }
};

// ─── Resources ───────────────────────────────────────────────────────────────
export const resourcesMetadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Stay ahead in tech. Explore blog posts, career resources, and upcoming event updates from Tabi Academy and Tabi Empowerment & Educational Foundation.",
  alternates: { canonical: `${BASE_URL}/resources` },
  openGraph: {
    title: "Resources, News & Blog | Tabi Academy",
    description:
      "Your hub for tech insights and community updates. Stay inspired on your journey with Tabi Academy.",
    url: `${BASE_URL}/resources`,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        type: "image/jpeg"
      }
    ]
  }
};

// ─── Consultancy ─────────────────────────────────────────────────────────────
export const consultancyMetadata: Metadata = {
  title: "Free Business Strategy Consultancy",
  description:
    "Scale your brand with free 1-on-1 business consultancy from Tabi Academy. Expert tech and marketing support for women-led businesses in Africa. Apply now!",
  keywords: [
    "free business consultancy Nigeria",
    "women in business Africa",
    "Tabi Academy support",
    "TEE Foundation business advice"
  ],
  alternates: { canonical: `${BASE_URL}/consultancy` },
  openGraph: {
    title: "1-on-1 Free Business Consultancy | Tabi Academy",
    description:
      "Get expert help with Marketing, Finance, and Strategy. We offer 5 free monthly slots for African female founders. Book yours today!",
    url: `${BASE_URL}/consultancy`,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        type: "image/jpeg"
      }
    ]
  }
};

// ─── AI for Business ─────────────────────────────────────────────────────────
export const aiForBusinessMetadata: Metadata = {
  title: "AI Training for Women Entrepreneurs",
  description:
    "Join Tabi Academy's live 2-week AI training. Learn to build AI tools, automate your workflow, and grow your business. Free for African women in tech.",
  keywords: [
    "AI training women Africa",
    "AI for business Nigeria",
    "Tabi Academy AI",
    "artificial intelligence business programme"
  ],
  alternates: { canonical: `${BASE_URL}/ai-for-businesses` },
  openGraph: {
    title: "Free AI for Business Training Programme | Tabi Academy",
    description:
      "Build faster and work smarter. Our 2-week intensive AI cohort helps female entrepreneurs master automation and innovation. Sign up now!",
    url: `${BASE_URL}/ai-for-businesses`,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training for Women in Business | Tabi Academy",
    description:
      "Empower your business with AI. Join our 2-week live training programme for African women entrepreneurs.",
    images: ["/og-image.jpeg"]
  }
};

// ─── Terms ───────────────────────────────────────────────────────────────────
export const termsMetadata: Metadata = {
  title: "Terms of Use",
  description:
    "Official Terms of Use and service agreements for the Tabi Academy website.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: false, follow: false }
};

// ─── Privacy ─────────────────────────────────────────────────────────────────
export const privacyMetadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your data privacy matters. Read the Tabi Academy Privacy Policy to understand how we protect your information.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: false, follow: false }
};

// ─── Open Source Case Studies ─────────────────────────────────────────────────────────────────

export const caseStudiesMetadata = {
  title: "Case Studies | Engineering Impact at Tabi Academy",
  description: "Explore open-source solutions engineered by Tabi Academy and Rise Academy. From maternal health to SME growth, see how we're building for the community.",
  openGraph: {
    title: "Case Studies | Tabi Academy",
    description: "Engineering scalable solutions to bridge the gap for women in Africa.",
    images: [{ url: "/projects/hero-composite.png" }],
  },
};