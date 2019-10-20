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

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get()
      if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log('error creating user',error.message);
        }
      }
      return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;
