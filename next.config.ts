import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 1. Initialize the plugin with the path to your request config
const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts" // Adjust this path if your file is in root /i18n/request.ts
);

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85],
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 189, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30 // 30 days
  },
  // Note: Turbopack is usually enabled via CLI flag,
  // but keeping your empty object here is fine.
  experimental: {
    scrollRestoration: false
  }
};

// 2. Wrap your config
export default withNextIntl(nextConfig);
