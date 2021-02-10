import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDOCWaAohxf7l4TfGI4fOMLYFYIzlwy5ks",
    authDomain: "book-santa-3dc3d.firebaseapp.com",
    projectId: "book-santa-3dc3d",
    storageBucket: "book-santa-3dc3d.appspot.com",
    messagingSenderId: "85283636375",
    appId: "1:85283636375:web:b7eaeeea32dd239d0555d2",
    measurementId: "G-DYYYD5649M"
  };


// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }

export default firebase.firestore();