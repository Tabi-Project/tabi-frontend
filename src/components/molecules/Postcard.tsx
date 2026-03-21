import Image from "next/image";
import Link from "next/link";
import { CMSPost } from "@/lib/cms";
import ArrowIcon from "@/components/atoms/Arrowicon";
import AuthorAvatar from "@/components/atoms/AuthorAvatar";

interface PostCardProps {
  post: CMSPost;
  href: string;
}

export default function PostCard({ post, href }: PostCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-[#F5F5F5] rounded-2xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#F3E8FF] flex items-center justify-center">
            <span className="text-brand-primary text-3xl font-extrabold opacity-20">
              TEE
            </span>
          </div>
        )}
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

        {/* Author row */}
        {post.author && (
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#ede8f5]">
            <AuthorAvatar
              name={post.author}
              avatar={post.authorAvatar}
              size={24}
            />
            <span className="text-xs text-[#888] font-medium">
              {post.author}
            </span>
            {post.readTime && (
              <span className="text-xs text-[#bbb] ml-auto">
                {post.readTime}
              </span>
            )}
          </div>
        )}

        <div className="flex justify-end mt-3">
          <span className="w-8 h-8 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
            <ArrowIcon size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
