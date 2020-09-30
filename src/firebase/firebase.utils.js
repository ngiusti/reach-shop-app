import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-EC_ER5WbKOwc--RHv6f5PMVS6eAf4KM",
  authDomain: "clothing-db-2306c.firebaseapp.com",
  databaseURL: "https://clothing-db-2306c.firebaseio.com",
  projectId: "clothing-db-2306c",
  storageBucket: "clothing-db-2306c.appspot.com",
  messagingSenderId: "137450429335",
  appId: "1:137450429335:web:8cc7f3f374c69233dec2d2",
  measurementId: "G-3765GREL94",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
