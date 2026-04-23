import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // ... your existing image config
  },
  experimental: {
    scrollRestoration: false
  },
  // ➕ Add this `rewrites` block
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html"
      }
    ];
  }
};

export default withNextIntl(nextConfig);
