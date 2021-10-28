import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBAqP33lHcpNMK9pGmSsxGaYoqrKNukeyM",
    authDomain: "visiongram-533d4.firebaseapp.com",
    projectId: "visiongram-533d4",
    storageBucket: "visiongram-533d4.appspot.com",
    messagingSenderId: "812159801714",
    appId: "1:812159801714:web:ee77e5d6f5591c9d9c65eb",
    measurementId: "G-DRBMWSY6XX"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export { app, db, storage }