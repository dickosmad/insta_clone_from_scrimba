// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzGzq7xDGODtoeeJsCLVo3jQn7xWsN4jY",
  authDomain: "instagram-clone-324d1.firebaseapp.com",
  projectId: "instagram-clone-324d1",
  storageBucket: "instagram-clone-324d1.appspot.com",
  messagingSenderId: "27875388148",
  appId: "1:27875388148:web:7775ccaf7b510f15ea8ca1",
  measurementId: "G-E5WM242549",
};

const firebase = window.firebase.initializeApp(firebaseConfig);
// FielValue will allow to have access to some array method

const { FieldValue } = window.firebase.firestore;
export { firebase, FieldValue };
