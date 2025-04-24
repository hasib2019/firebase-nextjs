"use client";

import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../firebase"; // adjust if path is different

const vapidKey = "BIy9-XOCRDdLErp-TJY_i0hTx0NnNiM_wpNSVu4C70so5e5pKFrc_U2D25kw27YG_PTFzQekcgvNMNqTzphV1_M";

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
