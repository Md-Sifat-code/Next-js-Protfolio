import { push, ref } from "firebase/database";
import { getFirebaseDb, isFirebaseClientConfigured } from "./firebaseClient";
import { normalizeEmail } from "./security/email";

const LEADS_PATH =
  process.env.NEXT_PUBLIC_FIREBASE_EBOOK_LEADS_PATH || "ebookLeads";

const MIN_SUBMIT_INTERVAL_MS = 60_000;
const RATE_KEY = "ebook_last_submit";

function mapFirebaseError(err) {
  const code = err?.code || "";
  const message = err?.message || "";

  if (code === "PERMISSION_DENIED" || message.includes("PERMISSION_DENIED")) {
    return "Could not save your email. In Firebase Console → Realtime Database → Rules, publish the rules from database.rules.json in this project (allow writes to ebookLeads).";
  }
  if (
    code === "DATABASE_ERROR" ||
    message.includes("Database lives in a different region")
  ) {
    return "Wrong database URL. Copy the exact URL from Firebase Console → Realtime Database.";
  }
  if (message) return message;
  return "Could not save your email. Please try again.";
}

function checkClientRateLimit() {
  try {
    const last = sessionStorage.getItem(RATE_KEY);
    if (last && Date.now() - Number(last) < MIN_SUBMIT_INTERVAL_MS) {
      return false;
    }
    sessionStorage.setItem(RATE_KEY, String(Date.now()));
    return true;
  } catch {
    return true;
  }
}

/**
 * Client-side save — dev fallback only when server admin is not configured.
 * Prefer /api/ebook-lead with Firebase Admin in production.
 */
export async function saveEbookLeadToFirebase(rawEmail) {
  const email = normalizeEmail(rawEmail);
  if (!email) {
    throw new Error("Please enter a valid email address.");
  }

  if (!isFirebaseClientConfigured()) {
    throw new Error(
      "Firebase is not configured. Add NEXT_PUBLIC_FIREBASE_* to .env.local and restart the dev server."
    );
  }

  if (!checkClientRateLimit()) {
    throw new Error("Please wait a minute before trying again.");
  }

  const db = getFirebaseDb();
  if (!db) {
    throw new Error("Could not connect to Firebase.");
  }

  try {
    await push(ref(db, LEADS_PATH), {
      email,
      createdAt: new Date().toISOString(),
      source: "free-starter-guide",
    });
  } catch (err) {
    throw new Error(mapFirebaseError(err));
  }
}

export async function saveEbookLeadSecure(rawEmail, honeypot = "") {
  const email = normalizeEmail(rawEmail);
  if (!email) {
    throw new Error("Please enter a valid email address.");
  }

  const res = await fetch("/api/ebook-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, website: honeypot }),
  });

  const data = await res.json().catch(() => ({}));

  if (res.ok) {
    return;
  }

  if (res.status === 503 && data.fallback === "client") {
    await saveEbookLeadToFirebase(email);
    return;
  }

  if (res.status === 429) {
    throw new Error(data.error || "Too many requests. Please wait and try again.");
  }

  throw new Error(data.error || "Could not save your email. Please try again.");
}
