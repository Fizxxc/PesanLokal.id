import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyUGkptdUUbbvxQ9Aze9q7sWxbYI-g7ks",
  authDomain: "pesanlokal-14a76.firebaseapp.com",
  projectId: "pesanlokal-14a76",
  storageBucket: "pesanlokal-14a76.firebasestorage.app",
  messagingSenderId: "673601159263",
  appId: "1:673601159263:web:aec24b697be206cbfb5bea",
  measurementId: "G-SJ2ECFM6JP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(); // ✅ Tambahkan ini

export { auth, db, provider }; // ✅ Ekspor juga provider