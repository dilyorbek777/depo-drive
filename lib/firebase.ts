import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  
  authDomain: "drive-4936d.firebaseapp.com",
  projectId: "drive-4936d",
  storageBucket: "drive-4936d.appspot.com",
  messagingSenderId: "964762509035",
  appId: "1:964762509035:web:9cf394b0f10fe2249468ae"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage };


// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyBYxcBJWCWGW9hd69x2dxMWtkIHFdEcUEA",
//   authDomain: "drive-4936d.firebaseapp.com",
//   projectId: "drive-4936d",
//   storageBucket: "drive-4936d.appspot.com",
//   messagingSenderId: "964762509035",
//   appId: "1:964762509035:web:9cf394b0f10fe2249468ae"
// };

// const app = initializeApp(firebaseConfig);