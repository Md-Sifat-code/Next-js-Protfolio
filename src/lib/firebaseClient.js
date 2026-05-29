import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
}

export function getMissingFirebaseEnvVars() {
  const checks = [
    ["NEXT_PUBLIC_FIREBASE_API_KEY", process.env.NEXT_PUBLIC_FIREBASE_API_KEY],
    ["NEXT_PUBLIC_FIREBASE_PROJECT_ID", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID],
    [
      "NEXT_PUBLIC_FIREBASE_DATABASE_URL",
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    ],
  ];
  return checks.filter(([, value]) => !value).map(([name]) => name);
}

export function isFirebaseClientConfigured() {
  return getMissingFirebaseEnvVars().length === 0;
}

export function getFirebaseApp() {
  if (!isFirebaseClientConfigured()) {
    return null;
  }

  if (getApps().length > 0) {
    return getApps()[0];
  }

  return initializeApp(getFirebaseConfig());
}

export function getFirebaseDb() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getDatabase(app);
}
