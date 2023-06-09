/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
import {
  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

export const RegisterMailAndPassword = (onNavigate, email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña).then(() => {
    onNavigate('/');
  }).catch((error) => {
    const errorCode = error.code;

    if (errorCode === 'auth/email-already-in-use') {
      alert('El correo ya está en uso')
  & onNavigate('/register');
    } else if (errorCode === 'auth/invalid-email') {
      alert('el correo no es válido')
  & onNavigate('/register');
    } else if (errorCode === 'auth/weak-password') {
      alert('la contraseña debe tener al menos 6 caracteres')
  & onNavigate('/register');
    }
  });
};

export const createUser = (email, contraseña, onNavigate) => {
  signInWithEmailAndPassword(auth, email, contraseña).then(() => {
    onNavigate('/welcomeApp');
  }).catch((error) => {
    const errorCode = error.code;

    if (errorCode === 'auth/invalid-email') { alert('El correo no es valido') & onNavigate('/'); } else if (errorCode === 'auth/user-disabled') { alert('el usuario ha sido deshabilitado') & onNavigate('/'); } else if (errorCode === 'auth/user-not-found') { alert('El usuario no existe') & onNavigate('/'); } else if (errorCode === 'auth/wrong-password') { alert('Contraseña incorrecta') & onNavigate('/'); }
  });
};

export const loginGoogle = (onNavigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/welcomeApp');
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line no-unused-vars
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
