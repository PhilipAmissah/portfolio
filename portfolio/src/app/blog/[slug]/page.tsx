import { notFound } from "next/navigation";

const VALID_SLUGS = [
  "hello-world",
  "time-is-respect",
] as const;

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // If slug is not valid → 404
  if (!VALID_SLUGS.includes(slug as any)) {
    notFound();
  }

  try {
    // Load the static JSX page from a sibling folder
    const Page = (await import(`../${slug}/page`)).default;
    return <Page />;
  } catch (error) {
    console.error("Failed to load static blog page:", error);
    notFound();
  }
}
