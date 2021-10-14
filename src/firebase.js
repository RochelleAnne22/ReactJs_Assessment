import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCrwbc7grb8RdxHppyJ7JLSKAs1O00VjlA",
  authDomain: "contact-details-6d28c.firebaseapp.com",
  databaseURL: "https://contact-details-6d28c-default-rtdb.firebaseio.com",
  projectId: "contact-details-6d28c",
  storageBucket: "contact-details-6d28c.appspot.com",
  messagingSenderId: "208330255560",
  appId: "1:208330255560:web:364c6f5d9f152176a649fd"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();