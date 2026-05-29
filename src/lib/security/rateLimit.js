const store = new Map();

/**
 * Simple in-memory rate limiter (per server instance).
 * @param {string} key — e.g. client IP
 * @param {{ limit?: number, windowMs?: number }} options
 */
export function checkRateLimit(key, { limit = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  let entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + windowMs };
  }

  entry.count += 1;
  store.set(key, entry);

  const allowed = entry.count <= limit;
  const retryAfterSec = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));

  return { allowed, retryAfterSec };
}

/** Prune stale entries occasionally */
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store.entries()) {
      if (now > entry.resetAt) store.delete(key);
    }
  }, 300_000);
}
