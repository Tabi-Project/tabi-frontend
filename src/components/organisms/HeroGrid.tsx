import { Post } from "@/constants/posts";
import FeaturedPostCard from "@/components/molecules/Featuredpostcard";
import SecondaryPostCard from "@/components/molecules/Secondarypostcard";

interface HeroGridProps {
  posts: Post[];
  basePath: string;
}

export default function HeroGrid({ posts, basePath }: HeroGridProps) {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const secondary = posts.filter((p) => p.id !== featured?.id).slice(0, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 mb-14">
      <FeaturedPostCard post={featured} href={`${basePath}/${featured.slug}`} />
      <div className="flex flex-col gap-5">
        {secondary.map((post) => (
          <SecondaryPostCard
            key={post.id}
            post={post}
            href={`${basePath}/${post.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
