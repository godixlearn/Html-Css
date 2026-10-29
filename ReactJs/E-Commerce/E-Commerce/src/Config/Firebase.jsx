// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF45Y3swDbJ6IRBF653MK1s3AZDaht0jc",
  authDomain: "e-commerce-77bc1.firebaseapp.com",
  projectId: "e-commerce-77bc1",
  storageBucket: "e-commerce-77bc1.firebasestorage.app",
  messagingSenderId: "134139397980",
  appId: "1:134139397980:web:84fcb855a8ebf44db16399",
  measurementId: "G-PHL8E00HJ2",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const authPersistence = setPersistence(auth, browserLocalPersistence);
