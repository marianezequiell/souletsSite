import firebase from "firebase/app"
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBjFyLl2UFGGbyQmWMuuahHbQ3wUM0zBMw",
    authDomain: "prueba-db-a9794.firebaseapp.com",
    projectId: "prueba-db-a9794",
    storageBucket: "prueba-db-a9794.appspot.com",
    messagingSenderId: "828523551568",
    appId: "1:828523551568:web:ca4e401090fb7d25b56a55"
})

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);