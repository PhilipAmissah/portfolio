import BlogLayout from "../BlogLayout";
export default function HelloWorldPage() {
  return (
    <BlogLayout title="Hello World">

        <p>
          Welcome to your very first blog post in this portfolio. This article
          exists to confirm that your blog routing, layout, typography, and
          rendering pipeline are all functioning correctly inside your Next.js
          application.
        </p>

        <p>
          Your blog system now supports clean static pages, SEO‑friendly URLs,
          and a simple structure that keeps your content easy to manage. This
          “Hello World” entry is intentionally minimal, serving as a baseline
          example for future posts.
        </p>

        <p>
          As you continue building your portfolio, you can expand your blog with
          tutorials, stories, documentation, or personal reflections. Each post
          lives in its own folder under <code>/blog/&lt;slug&gt;/page.tsx</code>,
          giving you full control over layout and content without relying on MDX
          loaders or external dependencies.
        </p>

        <p>
          This setup is lightweight, stable, and fully compatible with Turbopack
          — ensuring fast builds and zero MDX‑related errors.
        </p>

        <p className="font-semibold mt-10">AUTHOR: PHILIP AMISSAH</p>
      </BlogLayout>
  );
}
