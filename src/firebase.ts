import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCyGSKJIyt7OUBNG2LbJm1gLghb4OptKuk",
  authDomain: "twitter-clone-ce734.firebaseapp.com",
  projectId: "twitter-clone-ce734",
  storageBucket: "twitter-clone-ce734.appspot.com",
  messagingSenderId: "891542316",
  appId: "1:891542316:web:1f15a0fcbf6b89c8352a89"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);