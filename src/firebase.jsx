
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBC87nzVXtswivNWaaJaLV1yQYU_5wwoSs",
  authDomain: "auth-r-ada0c.firebaseapp.com",
  projectId: "auth-r-ada0c",
  storageBucket: "auth-r-ada0c.appspot.com",
  messagingSenderId: "132794099905",
  appId: "1:132794099905:web:abf150b59f6893ae808c40"
};

const app = initializeApp(firebaseConfig);
//bunu kopladik ama export biy zpatik
export const auth = getAuth(app);

export default app