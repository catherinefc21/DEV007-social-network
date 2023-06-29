/* eslint-disable brace-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
/* eslint-disable max-len */
/* eslint-disable no-alert */
import {
  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile,
} from 'firebase/auth';

import {
  addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc, deleteDoc, onSnapshot, query,
} from 'firebase/firestore';
import { auth, db, provider } from '../firebase/firebaseConfig';

export const saveName = (nombre1, apellido, usuario) => updateProfile(usuario, {
  displayName: `${nombre1} ${apellido}`,
});

export const RegisterMailAndPassword = (email, contraseña) => createUserWithEmailAndPassword(auth, email, contraseña);

export const loginUser = (email, contraseña) => signInWithEmailAndPassword(auth, email, contraseña);

export const loginGoogle = () => signInWithPopup(auth, provider);

export const createPost = async (email, texto, etiqueta, post) => {
  const docRef = await addDoc(collection(db, post), {
    Contenido: texto,
    Etiqueta: etiqueta,
    Email: email,
    fecha: serverTimestamp(),
  });
};
// delete del post
export const deletePost = async (id, post) => {
  await deleteDoc(doc(db, post, id)); };

// add like
export const addLike = async (postId, userID, post) => {
  const docRefLike = doc(db, post, postId, 'likes', userID);
  await setDoc(docRefLike, { like: true });
};

// delete like
export const deleteLike = async (postId, userID, post) => {
  const docRefLike = doc(db, post, postId, 'likes', userID);
  await deleteDoc(docRefLike);
};

// verificar si la publicacion tiene Like
export const AlreadyLiked = async (postId, userID, post) => {
  const docRefLike = doc(db, post, postId, 'likes', userID);
  const docSnap = (await getDoc(docRefLike));
  return docSnap;
};

// contar los Likes
export const CountLikes = (postId, conteo, post) => {
  onSnapshot(query(collection(db, post, postId, 'likes')), (snapshot) => {
    const likesCount = snapshot.size;
    conteo.textContent = `${likesCount}`; });
};

// Editar posts
export const editPost = async (id1, newText, newTag, post) => {
  const editPostRef = doc(db, post, id1);
  await updateDoc(editPostRef, {
    Contenido: newText,
    Etiqueta: newTag,
  });
};
