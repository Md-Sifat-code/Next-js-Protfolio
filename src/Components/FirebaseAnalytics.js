"use client";

import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirebaseApp, isFirebaseClientConfigured } from "@/lib/firebaseClient";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (!isFirebaseClientConfigured()) return;

    const app = getFirebaseApp();
    if (!app) return;

    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    });
  }, []);

  return null;
}
