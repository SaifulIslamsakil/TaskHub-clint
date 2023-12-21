// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBNuWBKjIQKPz5P0VbwVNovX5iDowscI",
  authDomain: "taskhub-2e1fb.firebaseapp.com",
  projectId: "taskhub-2e1fb",
  storageBucket: "taskhub-2e1fb.appspot.com",
  messagingSenderId: "341267305726",
  appId: "1:341267305726:web:170fd03b0cf780850281af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth