import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBk7UG8ZPVAdE5mmekoZFKEkutc3FM-igg",
    authDomain: "clothing-shopdb.firebaseapp.com",
    databaseURL: "https://clothing-shopdb.firebaseio.com",
    projectId: "clothing-shopdb",
    storageBucket: "",
    messagingSenderId: "484013867809",
    appId: "1:484013867809:web:a9c9fab69b682e60"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;
