import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";
import ScrollRestoration from "@/components/atoms/ScrollRestoration";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap"
});

const BASE_URL = "https://tabiproject.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    // Lead with Tabi Academy for brand recognition
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
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={lato.className} suppressHydrationWarning>
        <ScrollRestoration />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          id="netlify-identity-redirect"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", function(user) {
                  if (!user) {
                    window.netlifyIdentity.on("login", function() {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
