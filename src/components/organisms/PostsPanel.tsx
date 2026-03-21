import type { CMSPost } from "@/lib/cms";
import HeroGrid from "@/components/organisms/HeroGrid";
import PostsGrid from "@/components/organisms/PostGrid";

interface PostsPanelProps {
  heroTitle: string;
  gridTitle: string;
  posts: CMSPost[];
  basePath: string;
  searchPlaceholder: string;
  category?: "blog" | "news";
}

export default function PostsPanel({
  heroTitle,
  gridTitle,
  posts,
  basePath,
  searchPlaceholder,
  category
}: PostsPanelProps) {
  return (
    <>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">{heroTitle}</h2>
        <HeroGrid posts={posts} basePath={basePath} />
      </section>
      <PostsGrid
        title={gridTitle}
        posts={posts}
        basePath={basePath}
        searchPlaceholder={searchPlaceholder}
        category={category}
      />
    </>
  );
}
