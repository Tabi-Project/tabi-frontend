import Image from "next/image";
import Link from "next/link";
import { Post } from "@/constants/posts";
import ArrowIcon from "@/components/atoms/Arrowicon";

interface FeaturedPostCardProps {
  post: Post;
  href: string;
}

export default function FeaturedPostCard({
  post,
  href
}: FeaturedPostCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-xs text-brand-primary font-semibold mb-3">
          {post.date}
        </p>
        <p className="text-sm text-[#666] leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex justify-end mt-6">
          <span className="w-9 h-9 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}
