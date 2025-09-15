import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5mYeGKJFhZE8S35P2rSRFq9oYb2ZlIoo",
    authDomain: "sach-5c89c.firebaseapp.com",
    projectId: "sach-5c89c",
    storageBucket: "sach-5c89c.appspot.com",
    messagingSenderId: "844477949060",
    appId: "1:844477949060:web:b6f88eb8687e26c3778ed1",
    measurementId: "G-9NJPZHXW4X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };
