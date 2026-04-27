"use client";

import { usePathname } from "next/navigation";

export default function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname();
  const url = typeof window !== "undefined" 
    ? window.location.origin + pathname 
    : "";

  const encodedTitle = encodeURIComponent(title);
  const encodedURL = encodeURIComponent(url);

  const twitter = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
  const whatsapp = `https://wa.me/?text=${encodedTitle}%20${encodedURL}`;

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Share this article
      </p>

      <div className="flex gap-4">
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
        >
          Twitter
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
