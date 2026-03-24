import type { Metadata } from "next";

const BASE_URL = "https://tabiproject.com";

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutMetadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TEE Foundation — our mission, vision, team, and the work we do to empower African women through technology education and community building.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About TEE Foundation",
    description:
      "Our mission is to empower African women through technology, education and innovation. Meet the team behind TEE Foundation.",
    url: `${BASE_URL}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  }
};

// ─── Resources ───────────────────────────────────────────────────────────────
export const resourcesMetadata: Metadata = {
  title: "Resources",
  description:
    "Explore the latest news, blog posts, events and webinars from TEE Foundation. Stay informed and inspired on your tech journey.",
  alternates: { canonical: `${BASE_URL}/resources` },
  openGraph: {
    title: "Resources — News, Blog & Events | TEE Foundation",
    description:
      "Stay updated with the latest news, stories, and events from TEE Foundation.",
    url: `${BASE_URL}/resources`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  }
};

// ─── Consultancy ─────────────────────────────────────────────────────────────
export const consultancyMetadata: Metadata = {
  title: "Free Business Consultancy",
  description:
    "Apply for a free one-on-one business consultancy session with TEE Foundation. 5 slots available every month for women-led businesses across Africa. No cost, no catch.",
  keywords: [
    "free business consultancy Nigeria",
    "women business support Africa",
    "free business advice",
    "TEE Foundation consultancy",
    "small business help Africa"
  ],
  alternates: { canonical: `${BASE_URL}/consultancy` },
  openGraph: {
    title:
      "Free Business Consultancy for Women-Led Businesses | TEE Foundation",
    description:
      "5 free monthly consultancy slots for women-led businesses. Get expert help with Marketing, Finance, Tech, Strategy and Sales.",
    url: `${BASE_URL}/consultancy`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  }
};

// ─── AI for Business ─────────────────────────────────────────────────────────
export const aiForBusinessMetadata: Metadata = {
  title: "AI for Business Training",
  description:
    "A hands-on, live 2-week AI training programme for women in business across Africa. Build real AI tools, earn a certificate, and transform how you work. No tech background needed.",
  keywords: [
    "AI training women Africa",
    "AI for business Nigeria",
    "women AI training programme",
    "Tabi Academy AI",
    "artificial intelligence business training"
  ],
  alternates: { canonical: `${BASE_URL}/ai-for-businesses` },
  openGraph: {
    title: "AI for Business Training Programme | Tabi Academy",
    description:
      "Live 2-week AI training for women in business. Build faster, work smarter, grow with confidence. Free and open to 50 participants per cohort.",
    url: `${BASE_URL}/ai-for-businesses`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Business Training Programme | Tabi Academy",
    description: "Live 2-week AI training for women in business across Africa.",
    images: ["/og-image.png"]
  }
};

// ─── Terms ───────────────────────────────────────────────────────────────────
export const termsMetadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for TEE Foundation's website and services.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: false, follow: false }
};

// ─── Privacy ─────────────────────────────────────────────────────────────────
export const privacyMetadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read TEE Foundation's Privacy Policy to understand how we collect, use, and protect your personal information.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: false, follow: false }
};
