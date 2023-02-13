import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAgQrLzbycjidcz1uCc5xn4b1CXTmhE-U",
    authDomain: "bold-club.firebaseapp.com",
    projectId: "bold-club",
    storageBucket: "bold-club.appspot.com",
    messagingSenderId: "884883258178",
    appId: "1:884883258178:web:c30657c0da6a3e015fe6db",
    measurementId: "G-CMSETNB0DV"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Firebase storage reference
  const storage = getStorage(app);
  
  export {app,auth,storage};