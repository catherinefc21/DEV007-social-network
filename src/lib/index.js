import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

export const createUser = (email, contraseña) => {
  signInWithEmailAndPassword(auth, email, contraseña);
}

export const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}