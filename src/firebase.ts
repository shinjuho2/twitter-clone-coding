import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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