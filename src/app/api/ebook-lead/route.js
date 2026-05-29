import { saveEbookLead, isFirebaseConfigured } from "@/lib/firebaseAdmin";
import {
  isDatabaseUrlConfigured,
  saveLeadViaRest,
} from "@/lib/firebaseRest";
import { normalizeEmail } from "@/lib/security/email";
import { checkRateLimit } from "@/lib/security/rateLimit";
import { getClientIp, hasValidOrigin } from "@/lib/security/request";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 1024;

export async function POST(request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return Response.json({ error: "Request too large" }, { status: 413 });
    }

    if (!hasValidOrigin(request)) {
      return Response.json({ error: "Invalid request" }, { status: 403 });
    }

    const ip = getClientIp(request);
    const { allowed, retryAfterSec } = checkRateLimit(`ebook-lead:${ip}`, {
      limit: 5,
      windowMs: 60_000,
    });

    if (!allowed) {
      return Response.json(
        { error: "Too many requests. Please wait a minute and try again." },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfterSec) },
        }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    if (body?.website) {
      return Response.json({ success: true });
    }

    const email = normalizeEmail(body?.email);
    if (!email) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (isFirebaseConfigured()) {
      await saveEbookLead({ email });
    } else if (isDatabaseUrlConfigured()) {
      await saveLeadViaRest({ email });
    } else {
      return Response.json(
        {
          error:
            "Server is missing Firebase config. Add FIREBASE_DATABASE_URL (or NEXT_PUBLIC_FIREBASE_DATABASE_URL) in Vercel, then redeploy.",
        },
        { status: 503 }
      );
    }

    return Response.json(
      { success: true },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch {
    return Response.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 }
    );
  }
}
