// import type { NextConfig } from "next";
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// const nextConfig: NextConfig = {
//   images: {
//     // your image configuration here
//   },
//   experimental: {
//     scrollRestoration: false
//   },

//   async rewrites() {
//     return [
//       // existing admin rewrite
//       { source: "/admin", destination: "/admin/index.html" },

//       // SLA webinar friendly URL – default locale (en)
//       {
//         source: "/ai-for-businesses/sla",
//         destination: "/ai-for-businesses?sla=1"
//       },

//       // SLA webinar friendly URL – other locales (fr, etc.)
//       {
//         source: "/:locale/ai-for-businesses/sla",
//         destination: "/:locale/ai-for-businesses?sla=1"
//       }
//     ];
//   }
// };

// export default withNextIntl(nextConfig);

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
      { source: "/admin", destination: "/admin/index.html" },
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