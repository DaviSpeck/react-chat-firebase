import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVTR3tjd7-exzB9e28Cir_Uy1Lafe3h54",
  authDomain: "react-chat-firebase-f36eb.firebaseapp.com",
  projectId: "react-chat-firebase-f36eb",
  storageBucket: "react-chat-firebase-f36eb.appspot.com",
  messagingSenderId: "250654722861",
  appId: "1:250654722861:web:7f246e6f40db02949d61a4",
  measurementId: "G-D0WY1XQE8R"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);