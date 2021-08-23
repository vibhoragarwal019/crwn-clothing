import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNyk9O3qg9WTwzyzzlwmCIm6wjLWtAz2E",
    authDomain: "crownf-db.firebaseapp.com",
    projectId: "crownf-db",
    storageBucket: "crownf-db.appspot.com",
    messagingSenderId: "310768284697",
    appId: "1:310768284697:web:e4fb41e0d708aea667a688",
    measurementId: "G-PC6FRPJZ9E"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

