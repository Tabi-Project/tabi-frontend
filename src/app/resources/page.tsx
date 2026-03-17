import ResourcesTabs from "@/components/organisms/Resourcestabs";
import { Suspense } from "react";

export default function ResourcesPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        {/* Breadcrumb */}
        <p className="text-sm text-[#666] mb-6">
          <span className="hover:text-brand-primary cursor-pointer transition-colors">
            Home
          </span>
          <span className="mx-2 text-[#ccc]">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">Resources</span>
        </p>
        {/* Page header */}
        <div className="mb-10">
          <h1
            className="text-[clamp(1.8rem,8vw,3rem)] font-bold leading-tight mb-6"
            style={{
              background:
                "linear-gradient(180deg, #FFCC70 0%, #C850C0 31.93%, #71286F 57.11%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            TEE Foundation Resources
          </h1>
          <p className="text-sm text-[#555] max-w-2xl leading-relaxed">
            Be up-to-date with what&apos;s happening in TEE Foundation. Explore
            the latest news, upcoming events, blog posts and webinars.
          </p>
        </div>
        {/* Interactive tabs — client boundary here */}
        <Suspense fallback={null}>
          <ResourcesTabs />
        </Suspense>
      </div>
    </main>
  );
}
