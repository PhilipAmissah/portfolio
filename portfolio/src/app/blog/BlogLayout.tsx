import Image from "next/image";

export default function BlogLayout({
  children,
  title,
  coverImage,
}: {
  children: React.ReactNode;
  title: string;
  coverImage?: string;
}) {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <header className="mb-12 not-prose">
          {coverImage && (
            <div className="mb-8">
              <Image
                src={coverImage}
                alt={title}
                width={120}
                height={90}
                className="w-full h-40 object-cover rounded-lg shadow-md fade-in
                           dark:opacity-90 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                           transition-all duration-300"
                style={{ width: "auto" }}           
              />
            </div>
          )}

          <h1 className="text-4xl font-bold tracking-tight dark:text-white">
            {title}
          </h1>
        </header>

        {children}
      </article>
    </main>
  );
}
