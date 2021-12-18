import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFdoKxtPZ1TdvZ1o8kSbqX-VYYwni4Vw8",
    authDomain: "sales-girl.firebaseapp.com",
    projectId: "sales-girl",
    storageBucket: "sales-girl.appspot.com",
    messagingSenderId: "644274010570",
    appId: "1:644274010570:web:3f9d44fbca4f541ef73733"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
