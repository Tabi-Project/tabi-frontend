import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // your image configuration here
  },
  experimental: {
    scrollRestoration: false
  },

  async rewrites() {
    return [
      // existing admin redirect
      {
        source: "/admin",
        destination: "/admin/index.html"
      },

      // SLA webinar friendly URL – default locale (en, no prefix)
      {
        source: "/ai-for-businesses/sla",
        destination: "/ai-for-businesses#sla"
      },

      // SLA webinar friendly URL – other locales (fr, etc.)
      {
        source: "/:locale/ai-for-businesses/sla",
        destination: "/:locale/ai-for-businesses#sla"
      }
    ];
  }
};

export default withNextIntl(nextConfig);
