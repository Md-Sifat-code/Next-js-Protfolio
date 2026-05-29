import admin from "firebase-admin";

let initialized = false;

function getCredential() {
  const jsonKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (jsonKey) {
    try {
      const serviceAccount = JSON.parse(jsonKey);
      return admin.credential.cert(serviceAccount);
    } catch {
      throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON.");
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    return admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    });
  }

  return null;
}

function initFirebaseAdmin() {
  if (initialized || admin.apps.length > 0) {
    return true;
  }

  const databaseURL = process.env.FIREBASE_DATABASE_URL;
  const credential = getCredential();

  if (!databaseURL || !credential) {
    return false;
  }

  admin.initializeApp({
    credential,
    databaseURL,
  });

  initialized = true;
  return true;
}

/**
 * Save a free e-book lead to Firebase Realtime Database.
 * @param {{ email: string }} lead
 */
export async function saveEbookLead({ email }) {
  if (!initFirebaseAdmin()) {
    throw new Error(
      "Firebase is not configured. Set FIREBASE_DATABASE_URL and service account env vars."
    );
  }

  const path = process.env.FIREBASE_EBOOK_LEADS_PATH || "ebookLeads";
  const ref = admin.database().ref(path);

  await ref.push({
    email,
    createdAt: new Date().toISOString(),
    source: "free-starter-guide",
  });
}

export function isFirebaseConfigured() {
  const hasUrl = Boolean(process.env.FIREBASE_DATABASE_URL);
  const hasKey =
    Boolean(process.env.FIREBASE_SERVICE_ACCOUNT_KEY) ||
    (Boolean(process.env.FIREBASE_PROJECT_ID) &&
      Boolean(process.env.FIREBASE_CLIENT_EMAIL) &&
      Boolean(process.env.FIREBASE_PRIVATE_KEY));
  return hasUrl && hasKey;
}
