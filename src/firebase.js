// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqQMwU6tXAKDe0F_hoinAyz_M_zVJhE68",
  authDomain: "sparta-react-1ef61.firebaseapp.com",
  projectId: "sparta-react-1ef61",
  storageBucket: "sparta-react-1ef61.appspot.com",
  messagingSenderId: "93971547149",
  appId: "1:93971547149:web:8c61d241e4602f9bc04144",
  measurementId: "G-J2BEDTYSYC"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db};