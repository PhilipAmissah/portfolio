"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Repositories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition group"
          >
            <h3
              className="text-2xl font-semibold mb-3 transition"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="px-[var(--space-6)] py-[var(--space-3)] rounded-md text-white transition"
                style={{ background: "var(--awareness)" }}
              >
                GitHub
              </Link>

              <Link
                href={`/projects/${project.slug}`}
                className="px-[var(--space-6)] py-[var(--space-3)] rounded-md border transition"
                style={{
                  borderColor: "var(--border-strong)",
                  color: "var(--text-primary)",
                }}
              >
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
