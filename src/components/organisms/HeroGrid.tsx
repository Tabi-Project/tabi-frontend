import type { CMSPost } from "@/lib/cms";
import FeaturedPostCard from "@/components/molecules/Featuredpostcard";
import SecondaryPostCard from "@/components/molecules/Secondarypostcard";

interface HeroGridProps {
  posts: CMSPost[];
  basePath: string;
}

export default function HeroGrid({ posts, basePath }: HeroGridProps) {
  if (posts.length === 0) return null;

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const secondary = posts.filter((p) => p.slug !== featured?.slug).slice(0, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 mb-14">
      <FeaturedPostCard post={featured} href={`${basePath}/${featured.slug}`} />
      <div className="flex flex-col gap-5">
        {secondary.map((post) => (
          <SecondaryPostCard
            key={post.slug}
            post={post}
            href={`${basePath}/${post.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
