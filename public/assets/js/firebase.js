// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyC5OAoXeNf7UGF_G3opr2jdNt31T4zPWs8",
  authDomain: "isysdata-systems.firebaseapp.com",
  projectId: "isysdata-systems",
  storageBucket: "isysdata-systems.appspot.com", // ✅ FIXED HERE
  messagingSenderId: "25915958127",
  appId: "1:25915958127:web:c136a3595bf710f05a7e9a",
  measurementId: "G-SMYY5GYC8T"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);