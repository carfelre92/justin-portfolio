import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5_jR5hAuDVeFGF0WWNZhcVq0aSQptiH0",
    authDomain: "justin-porfolio.firebaseapp.com",
    projectId: "justin-porfolio",
    storageBucket: "justin-porfolio.appspot.com",
    messagingSenderId: "930265590877",
    appId: "1:930265590877:web:e82e7c0b0cee39e2cd71b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }