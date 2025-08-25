import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3AHTFZQSHZmU4feuk2Ok6W2gdSBMVsQE",
  authDomain: "ya-react-53.firebaseapp.com",
  projectId: "ya-react-53",
  storageBucket: "ya-react-53.firebasestorage.app",
  messagingSenderId: "524533730936",
  appId: "1:524533730936:web:83f4401e8b5e42f3a9a78d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;