import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoa8z2MP7Lg5x1byqrGf02Oe_SivMB0Pc',
  authDomain: 'momconnect3-9d7fd.firebaseapp.com',
  projectId: 'momconnect3-9d7fd',
  storageBucket: 'momconnect3-9d7fd.appspot.com',
  messagingSenderId: '1008948398587',
  appId: '1:1008948398587:web:584d67080a52f23de5635e',
  measurementId: 'G-D8XQSGHXPN',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
