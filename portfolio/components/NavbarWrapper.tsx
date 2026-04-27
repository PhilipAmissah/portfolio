"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Show Navbar ONLY on the Home page
  if (pathname !== "/") {
    return null;
  }

  return <Navbar />;
}
