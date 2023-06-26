/* eslint-disable brace-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
/* eslint-disable max-len */
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
  addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc, deleteDoc, onSnapshot, query,
} from 'firebase/firestore';
import { auth, db, provider } from '../firebase/firebaseConfig';

export const saveName = (nombre1, apellido) => updateProfile(auth.currentUser, {
  displayName: `${nombre1} ${apellido}`,
});

export const RegisterMailAndPassword = (email, contraseña) => createUserWithEmailAndPassword(auth, email, contraseña);

export const loginUser = (email, contraseña) => signInWithEmailAndPassword(auth, email, contraseña);

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
  const docRef = await addDoc(collection(db, 'posts'), {
    Contenido: texto,
    Etiqueta: etiqueta,
    Email: email,
    fecha: serverTimestamp(),
  });
};
// delete del post
export const deletePost = async (id) => { await deleteDoc(doc(db, 'posts', id)); };

// add like
export const addLike = async (postId, userID) => {
  const docRefLike = doc(db, 'posts', postId, 'likes', userID);
  await setDoc(docRefLike, { like: true });
};

// delete like
export const deleteLike = async (postId, userID) => {
  const docRefLike = doc(db, 'posts', postId, 'likes', userID);
  await deleteDoc(docRefLike);
};

// verificar si la publicacion tiene Like
export const AlreadyLiked = async (postId, userID) => {
  const docRefLike = doc(db, 'posts', postId, 'likes', userID);
  const docSnap = await getDoc(docRefLike);
  return docSnap.exists();
};

// contar los Likes
export const CountLikes = (postId, conteo) => {
  onSnapshot(query(collection(db, 'posts', postId, 'likes')), (snapshot) => {
    const likesCount = snapshot.size;
    conteo.textContent = `${likesCount}`; });
};

// Editar posts
export const editPost = async (id1, newText, newTag) => {
  const editPostRef = doc(db, 'posts', id1);
  await updateDoc(editPostRef, {
    Contenido: newText,
    Etiqueta: newTag,
  });
};
