// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTDcVpo6CteI46Bots8W-HQW9MeCon30c",
  authDomain: "la-tronera.firebaseapp.com",
  projectId: "la-tronera",
  storageBucket: "la-tronera.appspot.com",
  messagingSenderId: "214257214695",
  appId: "1:214257214695:web:79445d0da14d885c4e6e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db