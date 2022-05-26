import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACijtDGLgQGYUSXZrkonNLkT4oBia-kHg",
  authDomain: "computer-parts-client-side.firebaseapp.com",
  projectId: "computer-parts-client-side",
  storageBucket: "computer-parts-client-side.appspot.com",
  messagingSenderId: "997364998195",
  appId: "1:997364998195:web:b8b30678e99b9d314e0346",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
