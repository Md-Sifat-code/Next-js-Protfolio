"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isEbookPage = pathname === "/ebook";

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-6 sm:gap-8 rounded-full border border-gray-200/50 bg-white/90 backdrop-blur-md px-6 sm:px-8 py-4 shadow-lg">
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors duration-200 group ${
              pathname === "/"
                ? "text-[#dfb425]"
                : "text-gray-700 hover:text-[#dfb425]"
            }`}
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        {isHomePage && (
          <>
            <li>
              <a
                href="#tech"
                className="flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-[#dfb425] transition-colors duration-200 group"
              >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
                <span>Tech</span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-[#dfb425] transition-colors duration-200 group"
              >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
                <span>Experience</span>
              </a>
            </li>
          </>
        )}
        <li>
          <Link
            href="/blog"
            className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors duration-200 group ${
              isBlogPage
                ? "text-[#dfb425]"
                : "text-gray-700 hover:text-[#dfb425]"
            }`}
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/ebook"
            className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors duration-200 group ${
              isEbookPage
                ? "text-[#dfb425]"
                : "text-gray-700 hover:text-[#dfb425]"
            }`}
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
            <span>E-book</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
