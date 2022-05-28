import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD921J26IUcqOe4NKHk4YSJv4aLZgwnd8",
  authDomain: "test-64cae.firebaseapp.com",
  databaseURL: "https://test-64cae.firebaseio.com",
  projectId: "test-64cae",
  storageBucket: "test-64cae.appspot.com",
  messagingSenderId: "854975524198",
  appId: "1:854975524198:web:605e1d2ce5d906213eaca7",
  measurementId: "G-V4E9P91446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
