"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      // Collapse when scrolling down, expand when scrolling up
      if (current > lastScroll && current > 50) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full flex flex-col items-center justify-center
        transition-all duration-300
        ${collapsed ? "w-10 opacity-40" : "w-20 opacity-100"}
      `}
      style={{
        background: "var(--header-bg)",
        borderRight: "1px solid var(--border-light)",
        color: "var(--text-primary)",
      }}
    >
      <div className="flex flex-col gap-[var(--space-6)] text-2xl">
        <Link
          href="https://github.com/PhilipAmissah"
          target="_blank"
          className="hover:opacity-70 transition"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://linkedin.com/in/philip-amissah-93b792360/"
          target="_blank"
          className="hover:opacity-70 transition"
        >
          <FaLinkedin />
        </Link>

        <Link
          href="mailto:philipamissah@outlook.com"
          className="hover:opacity-70 transition"
        >
          <HiOutlineMail />
        </Link>
      </div>
    </aside>
  );
}
