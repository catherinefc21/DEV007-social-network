/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import {
  addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { auth, db, provider } from '../firebase/firebaseConfig';
import corazonuno from '../images/corazon1.png';
import corazondos from '../images/corazon2.png';

export const RegisterMailAndPassword = (onNavigate, email, contraseña, nombre1, apellido) => {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then(() => updateProfile(auth.currentUser, {
      displayName: `${nombre1} ${apellido}`,
    }))
    .then(() => {
      onNavigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === 'auth/email-already-in-use') {
        alert('El correo ya está en uso');
        onNavigate('/register');
      } else if (errorCode === 'auth/invalid-email') {
        alert('El correo no es válido');
        onNavigate('/register');
      } else if (errorCode === 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 caracteres');
        onNavigate('/register');
      }
    });
};

export const loginUser = (email, contraseña, onNavigate) => {
  signInWithEmailAndPassword(auth, email, contraseña).then(() => {
    onNavigate('/welcomeApp');
  }).catch((error) => {
    const errorCode = error.code;

    if (errorCode === 'auth/invalid-email') {
      alert('El correo no es valido') & onNavigate('/');
    } else if (errorCode === 'auth/user-disabled') {
      alert('el usuario ha sido deshabilitado') & onNavigate('/');
    } else if (errorCode === 'auth/user-not-found') {
      alert('El usuario no existe') & onNavigate('/');
    } else if (errorCode === 'auth/wrong-password') {
      alert('Contraseña incorrecta') & onNavigate('/');
    }
  });
};

export const loginGoogle = (onNavigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/welcomeApp');
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line no-unused-vars
      credential.accessToken;
      // The signed-in user info.
      result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      error.message;
      // The email of the user's account used.
      error.customData.email;
      // The AuthCredential type that was used.
      GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

export const createPost = async (email, texto, etiqueta) => {
  await addDoc(collection(db, 'posts'), {
    Contenido: texto,
    Etiqueta: etiqueta,
    Email: email,
    fecha: serverTimestamp(),
  });
};

export const deletePost = async (id) => { await deleteDoc(doc(db, 'posts', id)); };

export const addLikeToDocument = async (documentId, userId, btn) => {
  const documentRef = doc(db, 'coleccionLikes', documentId);
  const likesCollectionRef = collection(documentRef, 'likes');

  // Verificar si el usuario ya dio "like" al documento
  const likedSnapshot = await getDoc(doc(likesCollectionRef, userId));
  const alreadyLiked = likedSnapshot.exists();

  if (alreadyLiked) {
    await deleteDoc(doc(likesCollectionRef, userId));
    btn.style.backgroundImage = `url(${corazonuno})`;
    return;
  }

  // Agregar el like a la colección de likes
  await setDoc(doc(likesCollectionRef, userId), {});

  // Aquí puedes realizar las acciones necesarias cuando un usuario da "like" al documento
  btn.style.backgroundImage = `url(${corazondos})`;
};

// Editar posts
export const editPost = async (id1, newText, newTag) => {
  const editPostRef = doc(db, 'posts', id1);
  await updateDoc(editPostRef, {
    Contenido: newText,
    Etiqueta: newTag,
  });
};

export const likeRed = async (documentId, userId, btn) => {
  const documentRef = doc(db, 'coleccionLikes', documentId);
  const likesCollectionRef = collection(documentRef, 'likes');

  // Verificar si el usuario ya dio "like" al documento
  const likedSnapshot = await getDoc(doc(likesCollectionRef, userId));
  const alreadyLiked = likedSnapshot.exists();

  if (alreadyLiked) {
    btn.style.backgroundImage = `url(${corazondos})`;
  }
};
