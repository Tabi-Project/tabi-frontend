// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";


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
  // ... your existing metadata (unchanged)
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
      </body>
    </html>
  );
}
