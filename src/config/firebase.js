// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwTAh25IhidFug36zYza9oZBlRlmbHyuw",
  authDomain: "contatct-app-1c0db.firebaseapp.com",
  projectId: "contatct-app-1c0db",
  storageBucket: "contatct-app-1c0db.appspot.com",
  messagingSenderId: "774905848772",
  appId: "1:774905848772:web:7ae3d88f9396d1d4d43a91",
  measurementId: "G-C7M48GE4XP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);