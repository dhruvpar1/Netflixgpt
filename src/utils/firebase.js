// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHfcbJp0XsK8bktEZWd7dFgnrB3c7H2cA",
  authDomain: "netflix-gpt-6958d.firebaseapp.com",
  projectId: "netflix-gpt-6958d",
  storageBucket: "netflix-gpt-6958d.appspot.com",
  messagingSenderId: "417500383391",
  appId: "1:417500383391:web:325bfc98dcc2bd40a0baaa",
  measurementId: "G-QP4DPWQLNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();