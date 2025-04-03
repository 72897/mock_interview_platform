// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyEzA6F3I2eDQxmPS85vqXRKsfY6RfnDc",
  authDomain: "aitern.firebaseapp.com",
  projectId: "aitern",
  storageBucket: "aitern.firebasestorage.app",
  messagingSenderId: "952954943775",
  appId: "1:952954943775:web:70b36ea9d747a842e5582a",
  measurementId: "G-QVL5B6TZSG",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
