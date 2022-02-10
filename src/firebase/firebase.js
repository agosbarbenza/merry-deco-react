import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDXBtv2wiSSqUGkS1eGRLAfRrc_ng8jZMU",
  authDomain: "coder-agos.firebaseapp.com",
  projectId: "coder-agos",
  storageBucket: "coder-agos.appspot.com",
  messagingSenderId: "701508639933",
  appId: "1:701508639933:web:69da0e49c0bbc14ebc6bd4",
  measurementId: "G-G7HSHSN2MK",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
