import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCXIyYSWySEodf71hIeGrEeGORbUDnM_gw",
  authDomain: "mernai-83f94.firebaseapp.com",
  projectId: "mernai-83f94",
  storageBucket: "mernai-83f94.firebasestorage.app",
  messagingSenderId: "465701941303",
  appId: "1:465701941303:web:ba8f3ebb76100ea4d2cfb2",
  measurementId: "G-YG3WGY36C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider=new GoogleAuthProvider();
export {auth, provider}