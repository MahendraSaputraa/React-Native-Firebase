// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDChRCmcHKpIHusN1SBWpMvjioNZk52ZMI",
  authDomain: "project-1-connect-firebase.firebaseapp.com",
  projectId: "project-1-connect-firebase",
  storageBucket: "project-1-connect-firebase.firebasestorage.app",
  messagingSenderId: "386484809021",
  appId: "1:386484809021:web:0fa79eb3171e796fe4e954",
  measurementId: "G-4879HB2XXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(app);
