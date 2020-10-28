import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6fD245mvk0H9O64kGz3sHLby-rkowjwI",
  authDomain: "ecommerce-laptop.firebaseapp.com",
  databaseURL: "https://ecommerce-laptop.firebaseio.com",
  projectId: "ecommerce-laptop",
  storageBucket: "ecommerce-laptop.appspot.com",
  messagingSenderId: "836082816844",
  appId: "1:836082816844:web:0aad1b84f6539e963821e9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
