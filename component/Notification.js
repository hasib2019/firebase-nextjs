"use client";

import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../firebase"; // adjust if path is different

const vapidKey = "YOUR_VAPID_KEY_FROM_FIREBASE_CONSOLE";

export default function FirebaseNotification() {
  useEffect(() => {
    if (!messaging) return;

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, { vapidKey }).then((currentToken) => {
          if (currentToken) {
            console.log("FCM Token:", currentToken);
            // TODO: Send this token to your backend to send push
          } else {
            console.log("No token received");
          }
        });
      }
    });

    onMessage(messaging, (payload) => {
      console.log("Foreground Message Received:", payload);
      alert(payload?.notification?.title || "New notification!");
    });
  }, []);

  return null;
}
