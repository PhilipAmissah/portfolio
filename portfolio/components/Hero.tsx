"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 80]);
  const y2 = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-[var(--space-6)]"
    >
      <motion.h1
        style={{
          y: y1,
          color: "var(--text-primary)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-extrabold"
      >
        Hi, I'm Eng. Philip Amissah
      </motion.h1>

      <motion.p
        style={{
          y: y2,
          color: "var(--text-secondary)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl mt-[var(--space-4)] max-w-2xl"
      >
        I’m a technical lead and workflow architect specializing in AI‑powered content systems, automation pipelines, and scalable digital workflows. 
        My focus is always on reducing manual effort, increasing output, and designing modular systems that teams can rely on. 
        I combine frontend engineering, AI tools, and automation platforms to build end‑to‑end content and operational workflows that are fast, repeatable, and measurable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-[var(--space-4)] mt-[var(--space-6)]"
      >
        <Link
          href="https://youtube.com/@reviewdentv?si=v2CBNoO4b3VsBg5h"
          className="px-[var(--space-6)] py-[var(--space-3)] rounded-md text-white transition"
          style={{ background: "var(--awareness)" }}
        >
          AI Contents
        </Link>

        <Link
          href="https://app.usebraintrust.com/r/philip729/"
          className="px-[var(--space-6)] py-[var(--space-3)] rounded-md border transition"
          style={{
            borderColor: "var(--border-strong)",
            color: "var(--text-primary)",
          }}
        >
          Braintrust
        </Link>
      </motion.div>
    </section>
  );
}
