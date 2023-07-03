// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0_8GX-v_IGTDhIqvQ-FdducXjeuXGzFY",
  authDomain: "cs303spring-2022.firebaseapp.com",
  databaseURL: "https://cs303spring-2022-default-rtdb.firebaseio.com",
  projectId: "cs303spring-2022",
  storageBucket: "cs303spring-2022.appspot.com",
  messagingSenderId: "108594534799",
  appId: "1:108594534799:web:c7061b6f2aa552802553fa",
  measurementId: "G-7CPDV2HQ47"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { app, auth, db };
