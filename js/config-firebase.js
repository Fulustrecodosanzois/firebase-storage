// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8IXeTor3yWYfVZ5qa92KKR40nulr2FAM",
    authDomain: "dplconstrucao-cfd1a.firebaseapp.com",
    projectId: "dplconstrucao-cfd1a",
    storageBucket: "dplconstrucao-cfd1a.appspot.com",
    messagingSenderId: "152997578042",
    appId: "1:152997578042:web:d935809e2b0abfbc07fc03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)