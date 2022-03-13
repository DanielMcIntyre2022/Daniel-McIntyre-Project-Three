// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9EO3B7unD8o1BfvWIFitQpDp2qXktOH4",
    authDomain: "video-diary-database.firebaseapp.com",
    projectId: "video-diary-database",
    storageBucket: "video-diary-database.appspot.com",
    messagingSenderId: "962404880906",
    appId: "1:962404880906:web:7c51cc6594042b7f20c5f3"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;