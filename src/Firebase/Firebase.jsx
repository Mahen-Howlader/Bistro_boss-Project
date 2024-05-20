// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyA1IK2G8a3szYgJIf95W1hXZXJqOB90wE8",
  authDomain: "bistro-boss-c2b0f.firebaseapp.com",
  projectId: "bistro-boss-c2b0f",
  storageBucket: "bistro-boss-c2b0f.appspot.com",
  messagingSenderId: "522912043676",
  appId: "1:522912043676:web:fef340fc0fe61ff87a9359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
