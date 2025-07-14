// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBnDKdVv3GXN-WbzOIKmiO3fJ8p42XoX4",
  authDomain: "ai-club-f6353.firebaseapp.com",
  projectId: "ai-club-f6353",
  storageBucket: "ai-club-f6353.firebasestorage.app",
  messagingSenderId: "1027548357486",
  appId: "1:1027548357486:web:259730735c6485b8f6577f",
  measurementId: "G-4ESGHLM760"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
