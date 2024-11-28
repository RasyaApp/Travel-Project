
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAP4fYeSD1Fu5Mo5TBunaiLRu3ECtEmyk0",
  authDomain: "travel-reyz.firebaseapp.com",
  projectId: "travel-reyz",
  storageBucket: "travel-reyz.firebasestorage.app",
  messagingSenderId: "234352874466",
  databaseURL: "https://travel-reyz-default-rtdb.firebaseio.com",
  appId: "1:234352874466:web:0b90188af7db30b65cdfbb"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

const db = getDatabase(app);

export { auth, db, signInWithEmailAndPassword };