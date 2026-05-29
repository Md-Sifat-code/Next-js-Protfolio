"use client";

import React, { useEffect, useState } from "react";
import { MdDownload, MdEmail, MdCheckCircle } from "react-icons/md";
import { saveEbookLeadSecure } from "@/lib/ebookLeads";

const STORAGE_KEY = "ebook_free_unlocked";

export default function EbookEmailGate({ pdfPath, guideTitle }) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUnlocked(true);
        setSavedEmail(stored);
      }
    } catch {
      /* private browsing */
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await saveEbookLeadSecure(trimmed, honeypot);
      sessionStorage.setItem(STORAGE_KEY, trimmed);
      setSavedEmail(trimmed);
      setUnlocked(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-green-700 font-medium mb-4">
          <MdCheckCircle size={22} />
          <span>Unlocked for {savedEmail}</span>
        </div>
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          <MdDownload size={24} />
          Download Free PDF
        </a>
        <p className="text-sm text-gray-500 mt-4">
          {guideTitle} · Chapters 1 & 2
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
      {/* Honeypot — hidden from users, bots often fill this */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
      />

      <label htmlFor="ebook-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <MdEmail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={22}
          />
          <input
            id="ebook-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-300 bg-white text-black placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-shadow disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors whitespace-nowrap"
        >
          {loading ? "Saving…" : "Unlock download"}
        </button>
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-3 text-left" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs text-gray-500 mt-4 text-center">
        Enter your email to get instant access. We&apos;ll only use it to send
        updates about the guide — no spam.
      </p>
    </form>
  );
}
