import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDROV960j3VTqV7f3WdHN5Nu5xN127Qab4",
  authDomain: "react-notes-55598.firebaseapp.com",
  projectId: "react-notes-55598",
  storageBucket: "react-notes-55598.appspot.com",
  messagingSenderId: "833325782358",
  appId: "1:833325782358:web:6aa7d84fc4814f799172f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
