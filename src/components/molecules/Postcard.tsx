import Image from "next/image";
import Link from "next/link";
import { Post } from "@/constants/posts";
import ArrowIcon from "@/components/atoms/Arrowicon";
interface PostCardProps {
  post: Post;
  href: string;
}

export default function PostCard({ post, href }: PostCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-[#F5F5F5] rounded-2xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-sm font-bold text-[#1a1a2e] mb-1 leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-brand-primary font-semibold mb-2">
          {post.date}
        </p>
        <p className="text-xs text-[#666] leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex justify-end mt-4">
          <span className="w-8 h-8 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
            <ArrowIcon size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
