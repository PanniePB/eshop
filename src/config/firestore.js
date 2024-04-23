// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsuLoEtNnkKFPT6zU-GFRqv11d0LPBNJE",
  authDomain: "react-eshop-b95e9.firebaseapp.com",
  projectId: "react-eshop-b95e9",
  storageBucket: "react-eshop-b95e9.appspot.com",
  messagingSenderId: "507559757705",
  appId: "1:507559757705:web:9f826dcd65479516da4358",
  measurementId: "G-X4HL0PG0PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);