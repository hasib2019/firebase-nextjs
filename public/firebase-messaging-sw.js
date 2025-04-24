// /* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAlELPdaHAGar3xQQFlcvk_1xSgrKH6mQQ",
  authDomain: "check-firebase-44012.firebaseapp.com",
  projectId: "check-firebase-44012",
  storageBucket: "check-firebase-44012.firebasestorage.app",
  messagingSenderId: "367055440411",
  appId: "1:367055440411:web:073f8858cecf538b1486be",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("BG Msg received", payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, { body });
});
