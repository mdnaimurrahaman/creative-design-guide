// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9bDHM4azCES3GKnZ9F13AxyD8-b5ebQ",
  authDomain: "creative-d-design.firebaseapp.com",
  projectId: "creative-d-design",
  storageBucket: "creative-d-design.appspot.com",
  messagingSenderId: "242417424649",
  appId: "1:242417424649:web:3a27e9bd08e439b3799bd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;