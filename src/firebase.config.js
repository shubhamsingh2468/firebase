// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFIWKjI8uVd9QC3FXIVSOxIqRH16z-js",
  authDomain: "react-f007f.firebaseapp.com",
  projectId: "react-f007f",
  storageBucket: "react-f007f.appspot.com",
  messagingSenderId: "401653551357",
  appId: "1:401653551357:web:614e753a6e4561a0286e94",
  measurementId: "G-JES9XGPEVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);