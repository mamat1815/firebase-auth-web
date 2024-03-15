import { getApps, initializeApp } from "firebase/app";

//Firebase Auth
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

//env
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY ,
  authDomain:  process.env.NEXT_PUBLIC_AUTH_DOMAIN ,
  projectId:  process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket:  process.env.NEXT_PUBLIC_STORAGE_ID,
  messagingSenderId:  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId:  process.env.NEXT_PUBLIC_APP_ID,
  measurementId:  process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

if (!getApps().length) {
    initializeApp(firebaseConfig)
}

export const FirebaseAuth = getAuth()

export const SignUpFirebase = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    } catch (error) {
        console.log("Sign up failed:", error);
    }
}

export const SignInFirebase = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
}

export const SignOutFirebase = async () => {
    await signOut(FirebaseAuth)
}