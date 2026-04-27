"use client";

import { usePathname } from "next/navigation";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`mx-auto overflow-hidden ${isHome ? "" : "ml-20"}`}
      style={{
        borderRadius: "var(--radius-md)",
        maxWidth: "1400px",
      }}
    >
      {children}
    </div>
  );
}
