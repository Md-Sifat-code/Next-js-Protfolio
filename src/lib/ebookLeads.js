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
    return "Could not save your email. Check Firebase Realtime Database rules for ebookLeads.";
  }
  if (
    code === "DATABASE_ERROR" ||
    message.includes("Database lives in a different region")
  ) {
    return "Wrong database URL in Vercel env. Copy the exact URL from Firebase Console.";
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

async function saveViaApi(email, honeypot = "") {
  const res = await fetch("/api/ebook-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, website: honeypot }),
  });

  const data = await res.json().catch(() => ({}));

  if (res.ok) {
    return;
  }

  if (res.status === 429) {
    throw new Error(
      data.error || "Too many requests. Please wait and try again."
    );
  }

  throw new Error(
    data.error ||
      "Could not save your email. Check Vercel env vars and Firebase rules, then redeploy."
  );
}

async function saveEbookLeadToFirebase(rawEmail) {
  const email = normalizeEmail(rawEmail);
  if (!email) {
    throw new Error("Please enter a valid email address.");
  }

  if (!isFirebaseClientConfigured()) {
    throw new Error("Firebase client is not configured in this build.");
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

/**
 * Save via API (works on Vercel with DATABASE_URL at server runtime).
 * Falls back to client Firebase only if API fails and client is configured.
 */
export async function saveEbookLeadSecure(rawEmail, honeypot = "") {
  if (honeypot) {
    return;
  }

  const email = normalizeEmail(rawEmail);
  if (!email) {
    throw new Error("Please enter a valid email address.");
  }

  try {
    await saveViaApi(email, honeypot);
    return;
  } catch (apiError) {
    if (isFirebaseClientConfigured()) {
      try {
        await saveEbookLeadToFirebase(email);
        return;
      } catch {
        throw apiError;
      }
    }
    throw apiError;
  }
}
