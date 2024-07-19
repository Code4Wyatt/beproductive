import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrla14DxOh_FnddvON34WMrXZfV70ZN5g",
  authDomain: "beproductive-5323b.firebaseapp.com",
  projectId: "beproductive-5323b",
  storageBucket: "beproductive-5323b.appspot.com",
  messagingSenderId: "357732653968",
  appId: "1:357732653968:web:791b3b21478e6a311e3115"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);