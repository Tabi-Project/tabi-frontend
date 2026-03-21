import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: false
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true
  },
  turbopack: {}
};

export default nextConfig;
