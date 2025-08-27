import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC5zB-ACYxrUor5p5Bk1cTK9WzzeDjYTQk",
  authDomain: "ex9-react53.firebaseapp.com",
  projectId: "ex9-react53",
  storageBucket: "ex9-react53.firebasestorage.app",
  messagingSenderId: "131899075769",
  appId: "1:131899075769:web:d5966a8123245ed954bf68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db