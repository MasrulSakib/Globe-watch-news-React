// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzBUi8XUtj8qoNRa4qp5k-aOKwyT7C1F8",
    authDomain: "globe-watch-news.firebaseapp.com",
    projectId: "globe-watch-news",
    storageBucket: "globe-watch-news.appspot.com",
    messagingSenderId: "700777802771",
    appId: "1:700777802771:web:ce75e4e625d95858bde3e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;