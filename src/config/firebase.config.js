import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyB4aPbynPruMKXNpLBKrSuK2lC06hsjuyU",
    authDomain: "e-learning-72651.firebaseapp.com",
    databaseURL: "https://e-learning-72651.firebaseio.com",
    projectId: "e-learning-72651",
    storageBucket: "e-learning-72651.appspot.com",
    messagingSenderId: "84495227143",
    appId: "1:84495227143:web:7bacc171949047700bcda2",
    measurementId: "G-YWT3EW8S9Q"
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();