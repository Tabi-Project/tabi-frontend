import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/constants/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-8 py-16 lg:py-24">
        {/* ── Breadcrumb — sits above the image ──────────────────── */}
        <p className="text-sm text-[#666] mb-5">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <Link
            href="/resources"
            className="hover:text-brand-primary transition-colors"
          >
            Blog
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">Details</span>
        </p>

        {/* ── Hero image — padded & rounded ──────────────────────── */}
        <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ── Article ────────────────────────────────────────────── */}
        <article className="max-w-[1024px] mx-auto">
          {/* Title */}
          <h1 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold text-[#1a1a2e] text-center leading-[1.25] mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center justify-center flex-wrap gap-3 text-sm text-[#555] mb-10">
            {post.authorAvatar ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
                <Image
                  src={post.authorAvatar}
                  alt={post.author ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                <span className="text-brand-primary text-xs font-bold">
                  {post.author?.charAt(0) ?? "A"}
                </span>
              </div>
            )}

            {post.author && (
              <span className="font-medium text-[#1a1a2e]">
                By {post.author}
              </span>
            )}

            <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
            <span>{post.date}</span>

            {post.readTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          {/* Body content */}
          {post.content ? (
            <div
              className="
                text-[#333] text-sm leading-[1.8]
                [&_h2]:font-bold [&_h2]:text-[#1a1a2e] [&_h2]:text-sm [&_h2]:mb-2 [&_h2]:mt-8
                [&_h3]:font-semibold [&_h3]:text-[#1a1a2e] [&_h3]:text-sm [&_h3]:mb-2 [&_h3]:mt-6
                [&_h4]:font-semibold [&_h4]:text-[#1a1a2e] [&_h4]:text-sm [&_h4]:mb-1 [&_h4]:mt-5
                [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-[1.8] [&_p]:text-[#333]
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
                [&_li]:mb-1 [&_li]:text-sm [&_li]:text-[#333]
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-sm text-[#555] leading-[1.8]">{post.excerpt}</p>
          )}
        </article>
      </div>
    </main>
  );
}
