// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMkZlS6BxjnRBRnjANCv1rb3b22Xxe2Ug",
  authDomain: "fit-gym-c5eb9.firebaseapp.com",
  projectId: "fit-gym-c5eb9",
  storageBucket: "fit-gym-c5eb9.appspot.com",
  messagingSenderId: "650264023275",
  appId: "1:650264023275:web:a9e7d833157172a88aeeae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;