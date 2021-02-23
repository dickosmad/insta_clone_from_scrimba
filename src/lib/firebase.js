// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUxIViYbdjg9XsWAcEqQ19z-y7FAgISm4",
  authDomain: "insta-clone-dicko.firebaseapp.com",
  projectId: "insta-clone-dicko",
  storageBucket: "insta-clone-dicko.appspot.com",
  messagingSenderId: "234717167278",
  appId: "1:234717167278:web:6241c91e937d9fbcdbf73f",
  measurementId: "G-TPY9T2G8JE",
};

const firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = window.firebase.firestore;
export { firebase, FieldValue };
