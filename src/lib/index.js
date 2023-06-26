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

export const createPost = async (email, texto, etiqueta) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    Contenido: texto,
    Etiqueta: etiqueta,
    Email: email,
    fecha: serverTimestamp(),
  });
};

export const deletePost = async (id) => { await deleteDoc(doc(db, 'posts', id)); };

export const addLikeToDocument = async (documentId, userId, btn, imagen1, imagen2) => {
  const documentRef = doc(db, 'coleccionLikes', documentId);
  // se hace coleccion considerando como nombre ID del documento
  const likesCollectionRef = collection(documentRef, 'likes');

  // Verificar si el usuario ya dio "like" al documento
  const likedSnapshot = await getDoc(doc(likesCollectionRef, userId));
  const alreadyLiked = likedSnapshot.exists();

  // si le da Like se pone el boto rojo, pero si ya le habia dado vuelve a quedar naranjo como dislike
  if (alreadyLiked) {
    // dislike
    await deleteDoc(doc(likesCollectionRef, userId));
    btn.style.backgroundImage = `url(${imagen1})`;
    return;
  }

  // Like
  await setDoc(doc(likesCollectionRef, userId), {});
  btn.style.backgroundImage = `url(${imagen2})`;
};

// contar los Likes
export const CountLikes = (postId, conteo) => {
  onSnapshot(query(collection(db, 'coleccionLikes', postId, 'likes')), (snapshot) => {
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

/* Esto es para cuando la persona ya le dio like (se hace distinto al otro
ya que, el otro funciona al hacer click y en el if va que se ponga naranjo) */

export const likeRed = async (documentId, userId, btn, imagen2) => {
  const documentRef = doc(db, 'coleccionLikes', documentId);
  const likesCollectionRef = collection(documentRef, 'likes');

  // Verificar si el usuario ya dio "like" al documento
  const likedSnapshot = await getDoc(doc(likesCollectionRef, userId));
  const alreadyLiked = likedSnapshot.exists();

  if (alreadyLiked) {
    btn.style.backgroundImage = `url(${imagen2})`;
  }
};
