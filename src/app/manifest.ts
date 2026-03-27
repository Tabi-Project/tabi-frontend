import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tabi Academy | Tabi Empowerment & Educational Foundation",
    short_name: "Tabi Academy",
    description: "Empowering African women through technology education, mentorship, and community programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#71286F",
    icons: [
      {
        src: "/favicon.ico", 
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png", 
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png", 
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}