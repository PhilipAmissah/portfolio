import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXRendererProps {
  source: string;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <MDXRemote source={source} />
    </article>
  );
}
