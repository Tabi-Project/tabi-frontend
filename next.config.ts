import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
// const repoName = "tabi-frontend";

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath: isProd ? `/${repoName}` : "",
//   assetPrefix: isProd ? `/${repoName}/` : "",
//   trailingSlash: true,
//   images: { unoptimized: true,
//   dangerouslyAllowSVG: true
//  },
//   env: {
//     NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : ""
//   }
// };

// export default nextConfig;



const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isNetlify = process.env.NETLIFY === "true";

// Replace with your actual repo name
const repoName = "tabi-frontend";

// Only GitHub Pages typically needs a subfolder prefix
const assetPrefix = isGitHubActions ? `/${repoName}/` : "";
const basePath = isGitHubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true
  },
  env: {
    // Pass the base path to your components
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
