/** RFC 5321 max email length */
const MAX_EMAIL_LENGTH = 254;

/** Practical email pattern */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Normalize and validate an email for lead capture.
 * @returns {string | null}
 */
export function normalizeEmail(input) {
  if (typeof input !== "string") return null;

  const email = input.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH);
  if (!email || email.length < 5) return null;
  if (!EMAIL_REGEX.test(email)) return null;

  return email;
}
