// import type { NextConfig } from "next";

// const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
// const isNetlify = process.env.NETLIFY === "true";

// // Replace with your actual repo name
// const repoName = "tabi-frontend";

// // Only GitHub Pages typically needs a subfolder prefix
// const assetPrefix = isGitHubActions ? `/${repoName}/` : "";
// const basePath = isGitHubActions ? `/${repoName}` : "";

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath: basePath,
//   assetPrefix: assetPrefix,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//     dangerouslyAllowSVG: true
//   },
//   env: {
//     // Pass the base path to your components
//     NEXT_PUBLIC_BASE_PATH: basePath
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;