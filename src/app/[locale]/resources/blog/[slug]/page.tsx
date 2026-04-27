import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/cms";
import ShareButtons from "@/components/atoms/ShareButtons";
import ClientMarkdownRenderer from "@/components/molecules/ClientMarkdownRenderer";

const BASE_URL = "https://tabiproject.com";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts(); // default en
  const locales = ["en", "fr"];
  return locales.flatMap((locale) =>
    posts.map((post) => ({ slug: post.slug, locale }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostBySlug(decodedSlug, locale);

  if (!post) return { title: "Post Not Found" };

  const url = `${BASE_URL}/${locale}/resources/blog/${post.slug}`;
  const ogImage = post.image ?? "/og-image.jpeg";

  return {
    title: post.title,
    description: post.excerpt,
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: [post.category, "TEE Foundation", "tech education Africa"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage]
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Resources.CaseStudyDetail"
  }); // reusing breadcrumb keys
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostBySlug(decodedSlug, locale);

  if (!post) notFound();

  const currentUrl = `${BASE_URL}/${locale}/resources/blog/${post.slug}`;

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-8 py-16 lg:py-24">
        {/* Breadcrumb */}
        <p className="text-sm text-[#666] mb-5">
          <Link href={`/${locale}`} className="hover:text-brand-primary">
            {t("breadcrumb.home")}
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <Link
            href={`/${locale}/resources`}
            className="hover:text-brand-primary"
          >
            {t("breadcrumb.resources")}
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">
            {t("breadcrumb.label")}
          </span>
        </p>

        {post.image && (
          <div className="relative w-full h-65 sm:h-85 lg:h-105 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
        )}

        <article className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-4">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#F3E8FF", color: "#71286F" }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold text-[#1a1a2e] text-center leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-3 text-sm text-[#555] mb-10">
            {/* author avatar logic unchanged */}
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

          <ClientMarkdownRenderer content={post.body ?? post.excerpt ?? ""} />

          <div className="max-w-2xl mx-auto">
            <ShareButtons title={post.title} url={currentUrl} />
          </div>
        </article>
      </div>
    </main>
  );
}
