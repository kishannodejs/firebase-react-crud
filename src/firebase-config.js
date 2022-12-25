import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyBYVYRb9A6izCA1fdOUZzK9e4qoEnWdw",
  authDomain: "test-a4bee.firebaseapp.com",
  projectId: "test-a4bee",
  storageBucket: "test-a4bee.appspot.com",
  messagingSenderId: "253442954092",
  appId: "1:253442954092:web:808f68c24ae47da0ce5949",
  measurementId: "G-HT3LYTR6P6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
