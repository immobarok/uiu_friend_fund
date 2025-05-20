// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGmpOk-PyIgo61JA7GvNG_hqRvKaqoME4",
  authDomain: "uiuff-b7798.firebaseapp.com",
  projectId: "uiuff-b7798",
  storageBucket: "uiuff-b7798.appspot.com",
  messagingSenderId: "324575765254",
  appId: "1:324575765254:web:8f118917a5306867aaf487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;