import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/tabi-frontend" : "",
  assetPrefix: isProd ? "/tabi-frontend/" : "",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
