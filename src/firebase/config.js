// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0m0JmwsKaRoqKXImJZD7GU1i29-oLB_c",
  authDomain: "proyecto1-45148.firebaseapp.com",
  projectId: "proyecto1-45148",
  storageBucket: "proyecto1-45148.appspot.com",
  messagingSenderId: "996070127707",
  appId: "1:996070127707:web:3036c2db54e39d3051e77e",
  measurementId: "G-CSHESBQWB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);