import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgbtKdeKNGWG28p89Ifqev1joavbwp8Yo",
  authDomain: "zenkeep-32ce0.firebaseapp.com",
  projectId: "zenkeep-32ce0",
  storageBucket: "zenkeep-32ce0.appspot.com",
  messagingSenderId: "882847998106",
  appId: "1:882847998106:web:b43519a59eab550236ff23",
  measurementId: "G-DM2V4623HP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default db;