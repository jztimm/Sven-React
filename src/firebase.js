import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyAhfr6DiXLeAtRwdJOqWBZ29JJrPavkjyI",
   authDomain: "amz-clone-8c5ef.firebaseapp.com",
   databaseURL: "https://amz-clone-8c5ef.firebaseio.com",
   projectId: "amz-clone-8c5ef",
   storageBucket: "amz-clone-8c5ef.appspot.com",
   messagingSenderId: "23106973101",
   appId: "1:23106973101:web:7cc1b64bdb682d2dfec524",
   measurementId: "G-7HQ1LLVHLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};








