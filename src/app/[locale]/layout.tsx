// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Navbar } from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import ScrollRestoration from "@/components/atoms/ScrollRestoration";
import { locales } from "@/i18n/request";
import "../globals.css"; // still needed

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ScrollRestoration />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* Netlify Identity script – can stay here or move to root */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
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
    </NextIntlClientProvider>
  );
}
