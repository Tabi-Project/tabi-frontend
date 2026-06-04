// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import BirthdayModal from "@/components/molecules/BirthdayModal";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato"
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
    default: "Tabi Academy | Empowering Women in Tech",
    template: "%s | Tabi Academy"
  },
  description:
    "Tabi Academy by TEE Foundation empowers African women through free tech education, AI training, mentorship, and community. Join our growing network.",
  keywords: [
    "tabi",                       
    "tabi academy",
    "Tabi Academy",
    "Tabi Empowerment and Educational Foundation",
    "TEE Foundation",
    "women in tech Africa",
    "AI training women",
    "free tech education Nigeria",
    "women empowerment technology"
  ],
  authors: [{ name: "Tabi Academy", url: "https://tabiproject.com" }],
  creator: "Tabi Academy",
  publisher: "Tabi Academy",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tabiproject.com",
    siteName: "Tabi Academy",
    title: "Tabi Academy | Empowering Women in Tech",
    description:
      "Empowering African women through free technology education, AI training, and mentorship.",
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
    title: "Tabi Academy | Empowering Women in Tech",
    description:
      "Empowering African women through free technology education, AI training, and mentorship.",
    images: ["/og-image.jpeg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://tabiproject.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className} suppressHydrationWarning>
        <NextTopLoader
          color="#71286F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}

        {/* <BirthdayModal /> */}
      </body>
    </html>
  );
}
