"use client";

import React from "react";
import Link from "next/link";
import {
  MdArrowBack,
  MdMenuBook,
  MdLock,
  MdUpgrade,
} from "react-icons/md";
import ebookData from "@/data/ebook.json";
import freePreview from "@/data/ebookFreePreview.json";
import EbookEmailGate from "@/Components/ebook/EbookEmailGate";

export default function EbookFreePage() {
  const { title, author, authorRole, free, price, purchaseUrl } = ebookData;

  return (
    <main className="min-h-screen bg-white text-black pt-20 pb-32">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <Link
          href="/ebook"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#dfb425] transition-colors mb-10"
        >
          <MdArrowBack size={18} />
          Back to e-book
        </Link>

        <header className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 mb-4">
            <MdMenuBook size={16} />
            {free.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
            {free.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            From <strong className="text-black">{title}</strong>
          </p>
          <p className="text-sm text-gray-500">
            {free.format} · {free.chaptersIncluded} · by {author}
          </p>
        </header>

        {/* Email gate + download */}
        <div className="rounded-2xl border-2 border-green-600/30 bg-green-50/50 p-8 mb-12">
          <div className="text-center mb-8">
            <MdLock className="mx-auto text-green-700 mb-4" size={40} />
            <h2 className="text-xl font-bold text-black mb-3">
              Enter your email to download
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Get the free starter PDF — mindset, foundation, and niche
              validation worksheets. Download unlocks right after you submit.
            </p>
          </div>

          <EbookEmailGate pdfPath={free.pdfPath} guideTitle={free.title} />
        </div>

        {/* Online preview — always visible */}
        <article className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="text-[#dfb425]">Preview</span>
            Read online (no email required)
          </h2>
          <div className="space-y-8">
            {freePreview.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                )}
                {section.points && (
                  <ul className="space-y-2 text-gray-700">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2 leading-relaxed">
                        <span className="text-[#dfb425] font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8 italic">
            This preview is a sample. The full free PDF includes expanded
            chapters, checklists, and worksheets.
          </p>
        </article>

        {/* Upgrade */}
        <div className="rounded-2xl border-2 border-[#dfb425] bg-white p-8 text-center shadow-lg">
          <MdUpgrade className="mx-auto text-[#dfb425] mb-4" size={36} />
          <h2 className="text-2xl font-bold text-black mb-2">
            Ready for the full playbook?
          </h2>
          <p className="text-gray-600 mb-2">
            Unlock all 7 chapters — presence, offers, marketing, sales & scale.
          </p>
          <p className="text-3xl font-bold text-black mb-6">
            ${price.amount}{" "}
            <span className="text-base font-normal text-gray-500">one-time</span>
          </p>
          <Link
            href="/ebook#purchase"
            className="inline-flex items-center gap-2 bg-[#dfb425] hover:bg-[#c9a220] text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get the full e-book
          </Link>
          <p className="mt-4">
            <a
              href={purchaseUrl}
              className="text-sm text-blue-600 hover:underline"
            >
              Or purchase via email
            </a>
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">{authorRole}</p>
      </div>
    </main>
  );
}
