import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt8UvwaP1mSNdAmPqp0QjV8X70MrufVhs",
  authDomain: "movielog-e9415.firebaseapp.com",
  projectId: "movielog-e9415",
  storageBucket: "movielog-e9415.appspot.com",
  messagingSenderId: "989455381448",
  appId: "1:989455381448:web:5af7fb9eb53e90cf3a86fd",
  measurementId: "G-NM3FKJLNVR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Init serivces
const db = getFirestore()
// collection ref
const colRef = collection(db, 'movie')
const auth = getAuth()
// get colleciton data
getDocs(colRef)
  .then((snapshot)=>{
    let movies = []
    snapshot.docs.forEach((doc)=>{
      movies.push({...doc.data(), id: doc.id})
    })
    console.log(movies)
  })
  .catch(err => {
    console.log(err.message)
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
