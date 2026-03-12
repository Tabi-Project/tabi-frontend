// src/app/resources/blog/[slug]/page.tsx

export async function generateStaticParams() {
  return [
    { slug: "journey-of-a-thousand-mile" },
    { slug: "journey-of-a-thousand-mile-2" },
    { slug: "journey-of-a-thousand-mile-3" }
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="pt-32 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{params.slug.replace(/-/g, " ")}</h1>
      <p className="mt-4 text-gray-500">Blog post coming soon.</p>
    </main>
  );
}
