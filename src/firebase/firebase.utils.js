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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }

  return userRef;
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
