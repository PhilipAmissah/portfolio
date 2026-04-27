import Link from "next/link";

const POSTS = [
  {
    slug: "time-is-respect",
    title: "TIME IS RESPECT",
    summary:
      "A powerful story about a father teaching his son the lifelong value of respecting time.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <ul className="space-y-6">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold group-hover:border-b-2 group-hover:border-current group-hover:pb-0.5 transition-all">
                {post.title}
              </h2>
              <p className="opacity-80">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
