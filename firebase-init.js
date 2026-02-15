// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_S3DhyQrWd8KK73K5n2fpy4aBGwnNP7I",
  authDomain: "webproject-b82c3.firebaseapp.com",
  projectId: "webproject-b82c3",
  storageBucket: "webproject-b82c3.firebasestorage.app",
  messagingSenderId: "535472004792",
  appId: "1:535472004792:web:93dc19d39424fe0cc15e4d",
  measurementId: "G-1984B5TEHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };