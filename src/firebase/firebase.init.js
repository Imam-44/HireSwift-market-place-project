// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPvgIo8KvQIfCqxdYC9AQcGGrir2nxi5o",
  authDomain: "assignment-10-auth-dd74d.firebaseapp.com",
  projectId: "assignment-10-auth-dd74d",
  storageBucket: "assignment-10-auth-dd74d.firebasestorage.app",
  messagingSenderId: "353649940810",
  appId: "1:353649940810:web:310a8c9e7206a230d089b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);