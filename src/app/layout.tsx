// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato" // optional: makes font available via CSS variable
});

const BASE_URL = "https://tabiproject.com";

export const viewport: Viewport = {
  themeColor: "#71286F",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tabi Academy | Tabi Empowerment & Educational Foundation",
    template: "%s | Tabi Academy"
  },
  description:
    "Tabi Academy, by TEE Foundation, empowers African women through technology education, mentorship, and community programs. Join our growing community.",
  keywords: [
    "Tabi Academy",
    "Tabi Empowerment and Educational Foundation",
    "Tabi Foundation",
    "TEE Foundation Tabi Academy",
    "women in tech Africa",
    "tech education Africa",
    "AI training women",
    "empowerment foundation Nigeria",
    "women empowerment technology"
  ],
  authors: [{ name: "Tabi Academy", url: BASE_URL }],
  creator: "Tabi Academy",
  publisher: "Tabi Academy",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Tabi Academy",
    title: "Tabi Academy | Tabi Empowerment & Educational Foundation",
    description:
      "Empowering African women through technology education, mentorship, and community programs via Tabi Academy.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Tabi Academy — Empowering African Women Through Tech",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@tabi_academy",
    creator: "@tabi_academy",
    title: "Tabi Academy | Tabi Empowerment & Educational Foundation",
    description:
      "Empowering African women through technology education, mentorship, and community programs.",
    images: ["/og-image.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  alternates: {
    canonical: BASE_URL
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // The actual <html> and <body> are now inside [locale]/layout.tsx
  return children;
}
