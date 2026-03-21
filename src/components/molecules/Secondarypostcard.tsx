import Image from "next/image";
import Link from "next/link";
import type { CMSPost } from "@/lib/cms";
import ArrowIcon from "@/components/atoms/Arrowicon";

interface SecondaryPostCardProps {
  post: CMSPost;
  href: string;
}

export default function SecondaryPostCard({
  post,
  href
}: SecondaryPostCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-row bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-40 shrink-0 overflow-hidden bg-[#F3E8FF]">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="160px"
            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xl font-extrabold text-brand-primary opacity-20">
              TEE
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6 min-w-0">
        <h3 className="text-base font-bold text-[#1a1a2e] mb-1.5 leading-snug">
          {post.title}
        </h3>
        <p className="text-xs text-brand-primary font-semibold mb-2">
          {post.date}
        </p>
        <p className="text-sm text-[#666] leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex justify-end mt-4">
          <span className="w-8 h-8 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
            <ArrowIcon size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
