// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1HNOX9chQUrYPMoBSrM9hmoSxK62hHsY",
  authDomain: "netflixgpt-84e40.firebaseapp.com",
  projectId: "netflixgpt-84e40",
  storageBucket: "netflixgpt-84e40.appspot.com",
  messagingSenderId: "1068824033431",
  appId: "1:1068824033431:web:829e67adfe1ec738be91d2",
  measurementId: "G-J16C4X803Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
