import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Convert markdown body to paragraphs — no extra package needed
  const paragraphs = (post.body ?? post.excerpt)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-8 py-16 lg:py-24">
        {/* Breadcrumb */}
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

        {/* Hero image */}
        {post.image && (
          <div className="relative w-full h-65 sm:h-85 lg:h-105 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article */}
        <article className="max-w-5xl mx-auto">
          {/* Category badge */}
          <div className="flex justify-center mb-4">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#F3E8FF", color: "#71286F" }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold text-[#1a1a2e] text-center leading-tight mb-6">
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
            ) : post.author ? (
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                <span className="text-brand-primary text-xs font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
            ) : null}

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

          {/* Body — render each line/heading naturally */}
          <div className="text-[#333] text-sm leading-[1.8] max-w-2xl mx-auto">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-bold text-[#1a1a2e] text-xl mt-10 mb-3"
                  >
                    {para.replace(/^## /, "")}
                  </h2>
                );
              }
              if (para.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="font-semibold text-[#1a1a2e] text-base mt-7 mb-2"
                  >
                    {para.replace(/^### /, "")}
                  </h3>
                );
              }
              if (para.startsWith("#### ")) {
                return (
                  <h4
                    key={i}
                    className="font-semibold text-[#1a1a2e] text-sm mt-5 mb-1"
                  >
                    {para.replace(/^#### /, "")}
                  </h4>
                );
              }
              // Skip the frontmatter dashes if body accidentally includes them
              if (para === "---") return null;
              return (
                <p key={i} className="mb-4 text-sm text-[#444] leading-[1.85]">
                  {para}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
