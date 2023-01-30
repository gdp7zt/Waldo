// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ATmB8NR0cqSfx1uLLZRq3CMBSZryG20",
  authDomain: "waldo-f2759.firebaseapp.com",
  projectId: "waldo-f2759",
  storageBucket: "waldo-f2759.appspot.com",
  messagingSenderId: "222788792725",
  appId: "1:222788792725:web:b04805d74af23d8431c69c",
  measurementId: "G-1LQSN48MLF"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);