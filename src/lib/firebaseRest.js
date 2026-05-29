/**
 * Save to Realtime Database via REST (no Admin SDK).
 * Works on Vercel when FIREBASE_DATABASE_URL or NEXT_PUBLIC_FIREBASE_DATABASE_URL is set.
 */
export function getDatabaseUrl() {
  return (
    process.env.FIREBASE_DATABASE_URL ||
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
    ""
  ).replace(/\/$/, "");
}

export function getLeadsPath() {
  return (
    process.env.FIREBASE_EBOOK_LEADS_PATH ||
    process.env.NEXT_PUBLIC_FIREBASE_EBOOK_LEADS_PATH ||
    "ebookLeads"
  );
}

export function isDatabaseUrlConfigured() {
  return Boolean(getDatabaseUrl());
}

export async function saveLeadViaRest({ email }) {
  const baseUrl = getDatabaseUrl();
  if (!baseUrl) {
    throw new Error("FIREBASE_DATABASE_URL is not configured");
  }

  const path = getLeadsPath();
  const url = `${baseUrl}/${path}.json`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      createdAt: new Date().toISOString(),
      source: "free-starter-guide",
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Firebase REST error ${response.status}${text ? `: ${text.slice(0, 120)}` : ""}`
    );
  }

  return response.json();
}
