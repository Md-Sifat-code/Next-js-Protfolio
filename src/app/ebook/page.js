"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MdCheckCircle,
  MdMenuBook,
  MdDownload,
  MdExpandMore,
  MdExpandLess,
  MdArrowBack,
  MdLockOpen,
} from "react-icons/md";
import ebookData from "@/data/ebook.json";

export default function EbookPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const {
    title,
    subtitle,
    tagline,
    author,
    authorRole,
    price,
    purchaseUrl,
    format,
    updated,
    highlights,
    chapters,
    audience,
    faq,
    free,
  } = ebookData;

  const freeChapters = chapters.filter((c) => c.free);
  const paidChapters = chapters.filter((c) => !c.free);

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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#dfb425] transition-colors mb-10"
        >
          <MdArrowBack size={18} />
          Back to portfolio
        </Link>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#dfb425] text-black mb-4">
              E-BOOK · {updated}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-3">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 italic mb-8">{tagline}</p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <MdCheckCircle
                    className="text-green-600 shrink-0 mt-0.5"
                    size={22}
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-3">
              <Link
                href="/ebook/free"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MdLockOpen size={22} />
                Get Free Starter Guide
              </Link>
              <a
                href="#purchase"
                className="inline-flex items-center justify-center gap-2 bg-[#dfb425] hover:bg-[#c9a220] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MdDownload size={22} />
                Full Guide — ${price.amount}
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Start free ({free.chaptersIncluded}) · Enter email to download ·
              Upgrade when ready
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div
                className="aspect-[3/4] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col justify-between p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                }}
              >
                <div>
                  <MdMenuBook className="text-[#dfb425] mb-6" size={40} />
                  <p className="text-[#dfb425] text-xs font-semibold tracking-widest uppercase mb-2">
                    E-book
                  </p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-4">
                    {title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {subtitle}
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-6">
                  <p className="text-white font-semibold">{author}</p>
                  <p className="text-gray-500 text-sm mt-1">{authorRole}</p>
                  <p className="text-green-400 text-sm mt-3 font-medium">
                    Free: {free.chaptersIncluded}
                  </p>
                  <p className="text-[#dfb425] text-sm mt-1 font-medium">
                    Full: {format}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#dfb425]/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </section>

        {/* Free vs Full */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Start Free, Upgrade Anytime
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Try the starter guide at no cost. Unlock the full playbook when
              you&apos;re ready to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free tier */}
            <div className="rounded-2xl border-2 border-green-600/40 bg-green-50/30 p-8 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">
                Free
              </span>
              <h3 className="text-2xl font-bold text-black mb-1">
                {free.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {free.format} · {free.chaptersIncluded}
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {free.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-gray-700"
                  >
                    <MdCheckCircle
                      className="text-green-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/ebook/free"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                <MdLockOpen size={20} />
                Get Free Guide
              </Link>
            </div>

            {/* Paid tier */}
            <div className="rounded-2xl border-2 border-[#dfb425] bg-white p-8 flex flex-col shadow-lg relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#dfb425] text-black text-xs font-bold">
                MOST POPULAR
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-[#b8941f] mb-2 mt-2">
                Full guide
              </span>
              <h3 className="text-2xl font-bold text-black mb-1">
                Complete E-book
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {format} · All 7 chapters
              </p>
              <p className="text-4xl font-bold text-black mb-4">
                ${price.amount}
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex gap-2 text-sm text-gray-700">
                  <MdCheckCircle
                    className="text-[#dfb425] shrink-0 mt-0.5"
                    size={18}
                  />
                  Everything in the free guide
                </li>
                {paidChapters.map((ch) => (
                  <li
                    key={ch.number}
                    className="flex gap-2 text-sm text-gray-700"
                  >
                    <MdCheckCircle
                      className="text-[#dfb425] shrink-0 mt-0.5"
                      size={18}
                    />
                    Ch. {ch.number}: {ch.title}
                  </li>
                ))}
              </ul>
              <a
                href="#purchase"
                className="inline-flex items-center justify-center gap-2 bg-[#dfb425] hover:bg-[#c9a220] text-black py-3 rounded-lg font-semibold transition-colors"
              >
                <MdDownload size={20} />
                Buy Full Guide
              </a>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Who This Is For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re starting from scratch or turning a skill into
              income, this guide gives you a clear path forward.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {audience.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold">
                  ✓
                </span>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapters */}
        <section className="mb-24" id="chapters">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[#dfb425]">
                WHAT&apos;S INSIDE
              </span>
              <div className="w-16 h-px bg-gray-200" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              7 Chapters to Launch Online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chapters 1–2 are in the{" "}
              <Link href="/ebook/free" className="text-green-700 font-semibold hover:underline">
                free starter guide
              </Link>
              . Chapters 3–7 are in the full e-book.
            </p>
          </div>

          <ol className="space-y-4 max-w-3xl mx-auto">
            {chapters.map((chapter) => (
              <li
                key={chapter.number}
                className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  chapter.free
                    ? "border-green-200 bg-green-50/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[#dfb425] shrink-0">
                    {chapter.number}
                  </span>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-black">
                        {chapter.title}
                      </h3>
                      {chapter.free ? (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          FREE
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                          FULL E-BOOK
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-center mt-8">
            <Link
              href="/ebook/free"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
            >
              <MdLockOpen size={20} />
              Download free chapters ({freeChapters.length} of {chapters.length})
            </Link>
          </p>
        </section>

        {/* Author */}
        <section className="mb-24">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-12 max-w-3xl mx-auto text-center">
            <div className="w-1 h-8 bg-green-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Written by {author}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2">{authorRole}</p>
            <p className="text-gray-700 leading-relaxed max-w-xl mx-auto">
              I&apos;ve built products, led teams, and founded{" "}
              <a
                href="https://www.akino.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                AKINO
              </a>
              , growing a Bangladesh clothing brand from ৳0 to ৳152,000 in
              valuation. This e-book distills what actually works when you&apos;re
              starting a business online — start with the free guide, then go
              deep with the full version.
            </p>
          </div>
        </section>

        {/* Pricing CTA */}
        <section
          id="purchase"
          className="mb-24 rounded-2xl border-2 border-[#dfb425] bg-white p-8 md:p-12 text-center shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Ready for the full playbook?
          </h2>
          <p className="text-gray-600 mb-2 max-w-xl mx-auto">
            Already have the free guide? Unlock chapters 3–7 and launch with
            confidence.
          </p>
          <p className="text-5xl font-bold text-black mb-1">
            ${price.amount}
            <span className="text-lg font-normal text-gray-500 ml-2">
              {price.currency}
            </span>
          </p>
          <p className="text-sm text-gray-500 mb-4">{format}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href={purchaseUrl}
              className="inline-flex items-center gap-2 bg-[#dfb425] hover:bg-[#c9a220] text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <MdDownload size={22} />
              Buy Full E-book
            </a>
            <Link
              href="/ebook/free"
              className="inline-flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-black px-8 py-4 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
            >
              <MdLockOpen size={22} />
              Not yet — get free guide first
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Questions?{" "}
            <a
              href="mailto:mdsifatbinjibon@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              mdsifatbinjibon@gmail.com
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faq.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-black hover:bg-gray-50 transition-colors"
                  >
                    {item.question}
                    {isOpen ? (
                      <MdExpandLess className="shrink-0 text-[#dfb425]" size={24} />
                    ) : (
                      <MdExpandMore className="shrink-0 text-gray-400" size={24} />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
