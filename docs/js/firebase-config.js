// Firebase Configuration
// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBMcKfg5OLlL4S5skZ4ruPRsnQFGAVBtr8",
  authDomain: "sj-megamart.firebaseapp.com",
  projectId: "sj-megamart",
  storageBucket: "sj-megamart.firebasestorage.app",
  messagingSenderId: "180762164279",
  appId: "1:180762164279:web:ab4e1340e32f4faa5413b2",
  measurementId: "G-7Z7BN1CZ6B"
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
