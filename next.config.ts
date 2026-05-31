import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  experimental: {
    scrollRestoration: false
  },

  async rewrites() {
    return [
      // Handle both /admin and /admin/ variations
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/", destination: "/admin/index.html" },

      // Explicitly tell Next.js where to look for the config file if requested via root routes
      { source: "/config.yml", destination: "/admin/config.yml" },

      {
        source: "/ai-for-businesses/sla",
        destination: "/ai-for-businesses?sla=1"
      },
      {
        source: "/:locale/ai-for-businesses/sla",
        destination: "/:locale/ai-for-businesses?sla=1"
      }
    ];
  }
};

export default withNextIntl(nextConfig);