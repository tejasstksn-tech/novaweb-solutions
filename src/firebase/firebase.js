import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvqL9_WxJgxXq_LA0R0jfj3E81rBHJmP0",
  authDomain: "novaweb-solutions-a4e14.firebaseapp.com",
  projectId: "novaweb-solutions-a4e14",
  storageBucket: "novaweb-solutions-a4e14.firebasestorage.app",
  messagingSenderId: "884806576815",
  appId: "1:884806576815:web:9dbf32cc7c8a6b52d4425a",
  measurementId: "G-FB4Q2BWB28"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);