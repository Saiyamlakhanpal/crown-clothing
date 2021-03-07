import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBNa-1h2wN9aQ3C47upWszMvY65bFuuLtQ",
    authDomain: "crown-db-43ee9.firebaseapp.com",
    projectId: "crown-db-43ee9",
    storageBucket: "crown-db-43ee9.appspot.com",
    messagingSenderId: "861563633665",
    appId: "1:861563633665:web:34b497fccc00739e7f4000",
    measurementId: "G-ELHX6C9YL5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;