import firebase from 'firebase';
import 'firebase/auth';
export var firebaseConfig = {
    apiKey: "AIzaSyAZuwEbU-iE6TyIncBy9n3BYMMQRSELBiM",
    authDomain: "financial-portpfolio-tracker.firebaseapp.com",
    databaseURL: "https://financial-portpfolio-tracker.firebaseio.com",
    projectId: "financial-portpfolio-tracker",
    storageBucket: "financial-portpfolio-tracker.appspot.com",
    messagingSenderId: "569439264396",
    appId: "1:569439264396:web:2492e5dee7bf13277465a9",
    measurementId: "G-LYHDBRFH94"
  };
  export const firebaseApp = firebase.intializeApp(firebaseConfig)
  export default firebaseApp.firestore();