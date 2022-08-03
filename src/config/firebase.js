// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBl5lMCbo-Lxg8vCfApTAbVwk0bglz0DoE",
//   authDomain: "jyptify.firebaseapp.com",
//   projectId: "jyptify",
//   storageBucket: "jyptify.appspot.com",
//   messagingSenderId: "1026758269493",
//   appId: "1:1026758269493:web:2d702497b07a9504b3ef7c",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "jyptify.firebaseapp.com",
  projectId: "jyptify",
  storageBucket: "jyptify.appspot.com",
  messagingSenderId: "1026758269493",
  appId: "1:1026758269493:web:2d702497b07a9504b3ef7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
