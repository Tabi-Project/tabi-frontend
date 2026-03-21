import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";
import ScrollRestoration from "@/components/atoms/ScrollRestoration";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tabi Academy | Empowering Futures",
  description: "Transforming communities through education and innovation."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Netlify Identity Widget — required for Decap CMS login */}
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

        {/* Redirect to /admin after Netlify Identity login */}
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
