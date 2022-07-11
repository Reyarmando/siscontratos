// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhTgHJN3dyh7s7_KwStav7ug1vF2Ttnvg",
    authDomain: "gestiondecontratos-96ca2.firebaseapp.com",
    projectId: "gestiondecontratos-96ca2",
    storageBucket: "gestiondecontratos-96ca2.appspot.com",
    messagingSenderId: "898874198627",
    appId: "1:898874198627:web:fa880c728d50b6b5544656",
    measurementId: "G-41NNB13PFJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);