// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { getPostBySlug, getAllPosts } from "@/lib/cms";
// import ReactMarkdown from "react-markdown";
// import ShareButtons from "@/components/atoms/ShareButtons";

// const BASE_URL = "https://tabiproject.com";

// interface Props {
//   params: Promise<{ slug: string }>;
// }

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   // Decode the slug to handle symbols like ₦ correctly
//   const decodedSlug = decodeURIComponent(slug);
//   const post = getPostBySlug(decodedSlug);

//   if (!post) {
//     return { title: "Post Not Found" };
//   }

//   const url = `${BASE_URL}/resources/blog/${post.slug}`;
//   const ogImage = post.image ?? "/og-image.jpeg";

//   return {
//     title: post.title,
//     description: post.excerpt,
//     authors: post.author ? [{ name: post.author }] : undefined,
//     alternates: { canonical: url },
//     openGraph: {
//       type: "article",
//       url,
//       title: post.title,
//       description: post.excerpt,
//       publishedTime: post.date,
//       authors: post.author ? [post.author] : undefined,
//       tags: [post.category, "TEE Foundation", "tech education Africa"],
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: post.title
//         }
//       ]
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.excerpt,
//       images: [ogImage]
//     }
//   };
// }

// export default async function BlogDetailPage({ params }: Props) {
//   const { slug } = await params;
//   // Decode the slug to match the CMS data
//   const decodedSlug = decodeURIComponent(slug);
//   const post = getPostBySlug(decodedSlug);

//   if (!post) notFound();

//   const currentUrl = `${BASE_URL}/resources/blog/${post.slug}`;

//   return (
//     <main className="w-full bg-white min-h-screen">
//       <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-8 py-16 lg:py-24">
//         {/* Breadcrumb */}
//         <p className="text-sm text-[#666] mb-5">
//           <Link href="/" className="hover:text-brand-primary transition-colors">
//             Home
//           </Link>
//           <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
//           <Link
//             href="/resources"
//             className="hover:text-brand-primary transition-colors"
//           >
//             Blog
//           </Link>
//           <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
//           <span className="text-brand-primary font-medium">Details</span>
//         </p>

//         {/* Hero image */}
//         {post.image && (
//           <div className="relative w-full h-65 sm:h-85 lg:h-105 rounded-2xl overflow-hidden mb-10">
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//               quality={85}
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
//             />
//           </div>
//         )}

//         {/* Article */}
//         <article className="max-w-5xl mx-auto">
//           {/* Category badge */}
//           <div className="flex justify-center mb-4">
//             <span
//               className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
//               style={{ background: "#F3E8FF", color: "#71286F" }}
//             >
//               {post.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold text-[#1a1a2e] text-center leading-tight mb-6">
//             {post.title}
//           </h1>

//           {/* Meta row */}
//           <div className="flex items-center justify-center flex-wrap gap-3 text-sm text-[#555] mb-10">
//             {post.authorAvatar ? (
//               <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
//                 <Image
//                   src={post.authorAvatar}
//                   alt={post.author ?? ""}
//                   fill
//                   className="object-cover"
//                   sizes="32px"
//                 />
//               </div>
//             ) : post.author ? (
//               <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
//                 <span className="text-brand-primary text-xs font-bold">
//                   {post.author.charAt(0)}
//                 </span>
//               </div>
//             ) : null}
//             {post.author && (
//               <span className="font-medium text-[#1a1a2e]">
//                 By {post.author}
//               </span>
//             )}
//             <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
//             <span>{post.date}</span>
//             {post.readTime && (
//               <>
//                 <span className="w-1 h-1 rounded-full bg-[#ccc] shrink-0" />
//                 <span>{post.readTime}</span>
//               </>
//             )}
//           </div>

//           {/* Body */}
//           <div className="prose prose-slate max-w-2xl text-[#333] text-sm leading-[1.8] mx-auto">
//             <ReactMarkdown
//               components={{
//                 h2: ({ ...props }) => (
//                   <h2
//                     className="font-bold text-[#1a1a2e] text-xl mt-10 mb-3"
//                     {...props}
//                   />
//                 ),
//                 h3: ({ ...props }) => (
//                   <h3
//                     className="font-semibold text-[#1a1a2e] text-base mt-7 mb-2"
//                     {...props}
//                   />
//                 ),
//                 h4: ({ ...props }) => (
//                   <h4
//                     className="font-semibold text-[#1a1a2e] text-sm mt-5 mb-1"
//                     {...props}
//                   />
//                 ),
//                 p: ({ ...props }) => (
//                   <p
//                     className="mb-4 text-sm text-[#444] leading-[1.85]"
//                     {...props}
//                   />
//                 ),
//                 a: ({ ...props }) => (
//                   <a
//                     className="text-brand-primary font-medium underline hover:opacity-80 transition-opacity"
//                     {...props}
//                   />
//                 )
//               }}
//             >
//               {post.body ?? post.excerpt ?? ""}
//             </ReactMarkdown>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <ShareButtons title={post.title} url={currentUrl} />
//           </div>
//         </article>
//       </div>
//     </main>
//   );
// }




// app/[locale]/resources/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/cms";
// import dynamic from "next/dynamic";
import ShareButtons from "@/components/atoms/ShareButtons";
import ClientMarkdownRenderer from "@/components/molecules/ClientMarkdownRenderer";

const BASE_URL = "https://tabiproject.com";

// Dynamically import the markdown renderer – client‑only
// const MarkdownBody = dynamic(() => import("@/components/molecules/MarkdownBody"), {
//   ssr: false,
//   loading: () => <div className="animate-pulse bg-gray-100 h-40 rounded" />,
// });

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const locales = ["en", "fr"]; // or read from your i18n config
  return locales.flatMap((locale) => posts.map((post) => ({ slug: post.slug, locale })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostBySlug(decodedSlug);

  if (!post) return { title: "Post Not Found" };

  const url = `${BASE_URL}/${(await params).locale}/resources/blog/${post.slug}`;
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostBySlug(decodedSlug);

  if (!post) notFound();

  const currentUrl = `${BASE_URL}/${locale}/resources/blog/${post.slug}`;

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-8 py-16 lg:py-24">
        <p className="text-sm text-[#666] mb-5">
          <Link href={`/${locale}`} className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <Link href={`/${locale}/resources`} className="hover:text-brand-primary transition-colors">
            Blog
          </Link>
          <span className="mx-2 text-[#bbb]">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">Details</span>
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
            {post.authorAvatar ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
                <Image
                  src={post.authorAvatar}
                  alt={post.author ?? ""}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            ) : post.author ? (
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                <span className="text-brand-primary text-xs font-bold">{post.author.charAt(0)}</span>
              </div>
            ) : null}
            {post.author && <span className="font-medium text-[#1a1a2e]">By {post.author}</span>}
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