// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvgXJo3CjqrLGUk30dus_tSb7KRA2YTp4",
  authDomain: "una-cosa-de-locos.firebaseapp.com",
  projectId: "una-cosa-de-locos",
  storageBucket: "una-cosa-de-locos.appspot.com",
  messagingSenderId: "703527921350",
  appId: "1:703527921350:web:16010428f488f493f299c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);

