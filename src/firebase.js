import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4C8cbF6Yw5rXcStvaYJxWW7LTBOE5iRg",
  authDomain: "login-project-10500.firebaseapp.com",
  projectId: "login-project-10500",
  storageBucket: "login-project-10500.appspot.com",
  messagingSenderId: "152575187418",
  appId: "1:152575187418:web:d210e4acbf4ba23978c8e3",
  measurementId: "G-89VMXQGGH8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
