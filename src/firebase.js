// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFNAaW5YdKXTyIaj-49ZswCwqz7eYA9W0',
  authDomain: 'manage360-aa84b.firebaseapp.com',
  projectId: 'manage360-aa84b',
  storageBucket: 'manage360-aa84b.appspot.com',
  messagingSenderId: '706464137135',
  appId: '1:706464137135:web:c25f8cf503bb8bd142395a',
  measurementId: 'G-G1T92V93GS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);
