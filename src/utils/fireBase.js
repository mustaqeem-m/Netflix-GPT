// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGYR5YbqjTjC7IUSELcLjbuMp086XXcIk",
  authDomain: "netflixgpt-b9c6a.firebaseapp.com",
  projectId: "netflixgpt-b9c6a",
  storageBucket: "netflixgpt-b9c6a.firebasestorage.app",
  messagingSenderId: "816042433472",
  appId: "1:816042433472:web:6094ccae8f708d46d04625",
  measurementId: "G-T8CGZB9JV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);