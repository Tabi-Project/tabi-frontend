import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85],
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 189, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30 // 30 days
  },
  turbopack: {},
  experimental: {
    scrollRestoration: false
  }
};

export default nextConfig;
