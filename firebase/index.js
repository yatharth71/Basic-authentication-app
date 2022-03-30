// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP2JinSQXR1TSItIesZErL-2BnZ3ac9UU",
  authDomain: "authapp-5f12e.firebaseapp.com",
  projectId: "authapp-5f12e",
  storageBucket: "authapp-5f12e.appspot.com",
  messagingSenderId: "721005269035",
  appId: "1:721005269035:web:456822bebede8cd37cda6e",
  measurementId: "G-TEVF2GY9V4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
