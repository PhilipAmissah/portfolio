import { projects } from "@/data/projects";
import Markdown from "react-markdown";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  let content = project.content ?? "";

  if (project.readmeUrl) {
    try {
      const res = await fetch(project.readmeUrl, {
        cache: "no-store",
        headers: {
          "Accept": "text/plain",
        },
      });

      if (!res.ok) {
        content = "Failed to load README.md from GitHub.";
      } else {
        content = await res.text();
      }
    } catch {
      content = "Failed to load README.md from GitHub.";
    }
  }

  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="prose dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
}
