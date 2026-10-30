
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotesai-f382a.firebaseapp.com",
  projectId: "authexamnotesai-f382a",
  storageBucket: "authexamnotesai-f382a.firebasestorage.app",
  messagingSenderId: "477577547666",
  appId: "1:477577547666:web:db98724f598cba0e723b4b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
