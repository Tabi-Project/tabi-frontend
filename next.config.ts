// import type { NextConfig } from "next";

// const repo = "/tabi-frontend";
// const isProd = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   reactCompiler: true,
//   output: "export",
//   basePath: isProd ? repo : "",
//   assetPrefix: isProd ? `${repo}/` : "",
//   trailingSlash: true,
//   images: {
//     unoptimized: true
//   },
//   env: {
//     NEXT_PUBLIC_BASE_PATH: isProd ? repo : ""
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: ""
  }
};

export default nextConfig;