import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");





const firebaseConfig = {
    apiKey: "AIzaSyBT8MxDyEew3Gjl190q-8oYd4SUzL0FeQQ",
    authDomain: "copiaypega-c96e8.firebaseapp.com",
    projectId: "copiaypega-c96e8",
    storageBucket: "copiaypega-c96e8.appspot.com",
    messagingSenderId: "129497041006",
    appId: "1:129497041006:web:08f21fe39a52ec7c0bfe7f"
  };
  // Initialize Firebase
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const db = firebase.firestore();
  const auth = firebase.auth();
    
  export {firebase, db, auth}