// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP8xD9VTPXm4GV-FH6IQ2JCb96iGcscbA",
  authDomain: "reactcontact-3cc12.firebaseapp.com",
  databaseURL: "https://reactcontact-3cc12-default-rtdb.firebaseio.com",
  projectId: "reactcontact-3cc12",
  storageBucket: "reactcontact-3cc12.appspot.com",
  messagingSenderId: "859583162627",
  appId: "1:859583162627:web:31631dd6049e9af37ea136"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth);
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}


// custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, ((user) => {setCurrentUser(user)}))
    return unsub;
  },[]);

  return currentUser;
}