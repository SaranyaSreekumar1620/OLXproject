import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCLe3SL444s_jbEBRYBTGfrjVznEPrseC4",
    authDomain: "olxproject-318c6.firebaseapp.com",
    projectId: "olxproject-318c6",
    storageBucket: "olxproject-318c6.appspot.com",
    messagingSenderId: "952106070724",
    appId: "1:952106070724:web:936b6ab1c875d8aaaf0f91",
    measurementId: "G-P2WG6JFY8P"
  };

  export default firebase.initializeApp(firebaseConfig)