"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home |", href: "#home" },
    { name: "About |", href: "#about" },
    { name: "Projects |", href: "#projects" },
    { name: "Contact |", href: "#contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 border-b ml-20"
      style={{
        background: "var(--header-bg)",
        color: "var(--header-text)",
        borderColor: "var(--border-light)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-[var(--space-6)]">
        <h1 className="text-xl font-bold">
          AI-Powered Engineer & Automation Architect Specialist
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[var(--space-8)]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href ?? "#"}
              className="px-[var(--space-2)] py-[var(--space-1)] hover:opacity-70 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl hover:opacity-70 transition"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
