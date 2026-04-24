import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { getAllPosts } from "@/lib/cms";

export default function InsightsStories() {
  const t = useTranslations("InsightsStories");
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const secondary = posts.filter((p) => p.slug !== featured?.slug).slice(0, 2);

  if (!featured) {
    return (
      <section className="w-full bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="text-start mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e]">
              {t("heading")}
            </h2>
            <p className="mt-4 text-base text-black max-w-5xl leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-16 rounded-2xl border border-dashed border-[#E5E7EB] text-center">
            <div className="w-14 h-14 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M4 22L8.5 21l12-12a2.121 2.121 0 00-3-3L5.5 18 4 22z"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 7l3 3"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4 26h20"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">
              {t("emptyTitle")}
            </p>
            <p className="text-xs text-[#888]">{t("emptyMessage")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="text-start mb-14">
          <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e]">
            {t("heading")}
          </h2>
          <p className="mt-4 text-base text-black max-w-5xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 mb-10">
          {/* Featured post */}
          <Link
            href={`/resources/blog/${featured.slug}`}
            className="group flex flex-col bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-[#F3E8FF]">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-brand-primary opacity-20">
                    TEE
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 p-8">
              <span
                className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ background: "#F3E8FF", color: "#71286F" }}
              >
                {featured.category}
              </span>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2 leading-snug">
                {featured.title}
              </h3>
              <p className="text-xs text-brand-primary font-semibold mb-3">
                {featured.date}
              </p>
              <p className="text-sm text-[#666] leading-relaxed flex-1">
                {featured.excerpt}
              </p>
              <div className="flex justify-end mt-6">
                <span className="w-9 h-9 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary posts */}
          <div className="flex flex-col gap-5">
            {secondary.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group flex flex-row bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-45 shrink-0 overflow-hidden bg-[#F3E8FF]">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="180px"
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
                  <span
                    className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2"
                    style={{ background: "#F3E8FF", color: "#71286F" }}
                  >
                    {post.category}
                  </span>
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
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/resources?tab=blog">
            <Button variant="outline" size="md">
              {t("loadMore")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
