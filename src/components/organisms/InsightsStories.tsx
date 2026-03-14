import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";

const POSTS = [
  {
    id: 1,
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring career paths or someone...",
    image: withBasePath("/post-1.png"),
    href: "/blog/journey-of-a-thousand-mile",
    featured: true
  },
  {
    id: 2,
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/post-2.png"),
    href: "/blog/journey-of-a-thousand-mile-2",
    featured: false
  },
  {
    id: 3,
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/post-2.png"),
    href: "/blog/journey-of-a-thousand-mile-3",
    featured: false
  }
];

const featured = POSTS.find((p) => p.featured)!;
const secondary = POSTS.filter((p) => !p.featured);

export default function InsightsStories() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="text-start mb-14">
          <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e] ">
            Insights &amp; Stories
          </h2>
          <p className="mt-4 text-base text-black max-w-5xl leading-relaxed">
            Ready to embark on your tech journey? Explore our resources and
            start building your future today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 mb-10">
          <Link
            href={featured.href}
            className="group flex flex-col bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 p-8">
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

          <div className="flex flex-col gap-5">
            {secondary.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className="group flex flex-row bg-[#F5F5F5] rounded-3xl border border-[#ede8f5] overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-45 shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
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
          <Link href="/blog">
            <Button variant="outline" size="md">
              Load More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
