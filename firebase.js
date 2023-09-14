
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQlsQFSDdznkR5wcsNxXjibLU1SvGqp8w",
  authDomain: "reactnotes-68f1a.firebaseapp.com",
  projectId: "reactnotes-68f1a",
  storageBucket: "reactnotes-68f1a.appspot.com",
  messagingSenderId: "1093184727279",
  appId: "1:1093184727279:web:65b4b0f41e12f0a4b0931a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollections = collection(db,"notes")