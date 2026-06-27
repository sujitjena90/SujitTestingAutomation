// Firebase Configuration
// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

(function initializeFirebase() {
  const placeholderPattern = /^YOUR_|YOUR_PROJECT/;
  const hasPlaceholder = Object.values(firebaseConfig).some((value) => placeholderPattern.test(String(value || '')));

  if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK is not loaded.');
    window.firebaseReady = false;
    return;
  }

  if (hasPlaceholder) {
    console.warn('Add your Firebase project credentials in js/firebase-config.js to enable authentication.');
    window.firebaseReady = false;
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.auth = firebase.auth();
  window.db = firebase.firestore();
  window.firebaseReady = true;
})();
