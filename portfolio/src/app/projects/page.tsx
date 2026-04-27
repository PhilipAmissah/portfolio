import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-6 border rounded-lg hover:opacity-80 transition"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="opacity-80 mt-2">{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
