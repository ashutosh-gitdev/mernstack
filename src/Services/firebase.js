import React from 'react'
import * as firebase from 'firebase'

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA22T79xOcM5sQebD97dXkCPiVLHL-6elA",
   authDomain: "chatapp-webpage.firebaseapp.com",
   projectId: "chatapp-webpage",
   storageBucket: "chatapp-webpage.appspot.com",
   messagingSenderId: "48792964736",
   appId: "1:48792964736:web:96aa455b9e2eca005ae065",
   measurementId: "G-HZYRDCNQZ6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export default firebase;