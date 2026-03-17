import { Post } from "@/constants/posts";
import HeroGrid from "@/components/organisms/HeroGrid";
import PostsGrid from "@/components/organisms/PostGrid";

interface PostsPanelProps {
  heroTitle: string;
  gridTitle: string;
  posts: Post[];
  basePath: string;
  searchPlaceholder: string;
}

export default function PostsPanel({
  heroTitle,
  gridTitle,
  posts,
  basePath,
  searchPlaceholder
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
      />
    </>
  );
}
