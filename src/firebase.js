import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZ0gasymtZecy8k-tWsgU0zl9L46Gpfsg",
  authDomain: "linkedin-clone-3145b.firebaseapp.com",
  projectId: "linkedin-clone-3145b",
  storageBucket: "linkedin-clone-3145b.appspot.com",
  messagingSenderId: "664592385428",
  appId: "1:664592385428:web:ad6f54ae7fc68a0b607b81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
