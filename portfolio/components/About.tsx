"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-[var(--space-6)] py-[var(--space-12)] text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl max-w-3xl mt-[var(--space-4)]"
        style={{ color: "var(--text-secondary)" }}
      >
        I'm an AI-powered engineer and automation architect who designs systems that remove friction, scale output, and turn complex workflows into clean, self-optimizing engines. My work blends frontend engineering, AI orchestration, and automation design to help teams move faster, create smarter, and operate with precision.
         I specialize in building modular, AI-driven pipelines that handle everything from content generation and UX optimization to multi-platform publishing, analytics feedback loops, and real-time workflow automation. Whether it's a creator ecosystem, a stratup, or an enterprise team, i architect systems that reduce manaul effort and multiply impact.
         My approach is simple: Engineer the workflow - Automate the execution - Amplify the results. 
         i operate at the intersection of engineering, design, and AI strategy - translating business goals into scalable systems that run 24/7 without breaking.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-4)] mt-[var(--space-8)] max-w-3xl"
      >
        {[
          "• AI Systems Engineering",
          "• Automation Architecture",
          "• Frontend Engineering (React + Performance)",
          "• Backend Engineering (API + Database + Testing)",
          "• Technical Workflow Design",
          "• AI-Driven Content & UX Strategy",
          "• Scalable Pipeline Development",
          "• AI Orchestration (LangChain, LLMs, etc.)",
          "• End-to-End Workflow Automation",
        ].map((skill) => (
          <motion.div
            key={skill}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="py-[var(--space-3)] rounded-md border text-center transition"
            style={{
              borderColor: "var(--border-light)",
              background: "var(--header-bg)",
              color: "var(--text-primary)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
