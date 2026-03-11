import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "tabi-frontend",
  assetPrefix: "/tabi-frontend/",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
