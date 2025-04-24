"use client";

import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAlELPdaHAGar3xQQFlcvk_1xSgrKH6mQQ",
  authDomain: "check-firebase-44012.firebaseapp.com",
  projectId: "check-firebase-44012",
  storageBucket: "check-firebase-44012.firebasestorage.app",
  messagingSenderId: "367055440411",
  appId: "1:367055440411:web:073f8858cecf538b1486be",
  measurementId: "G-WKFPC1CXBB",
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);

  if (typeof window !== "undefined") {
    isSupported()
      .then((supported) => {
        if (supported) {
          getAnalytics(firebaseApp);
        } else {
          console.log("Analytics not supported");
        }
      })
      .catch((err) => console.error("Analytics init error:", err));
  }
} else {
  firebaseApp = getApps()[0];
}

const db = getFirestore(firebaseApp);
let messaging = null;

if (typeof window !== "undefined") {
  try {
    messaging = getMessaging(firebaseApp);
  } catch (e) {
    console.warn("FCM not available", e);
  }
}

export { firebaseApp, db, messaging, getToken, onMessage };
