/* eslint-disable no-unused-expressions */
// import { expect } from '@jest/globals';//
// importamos la funcion que vamos a testear
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  addDoc,
} from 'firebase/firestore';
import {
  RegisterMailAndPassword,
  loginUser,
  loginGoogle,
  createPost,
  deletePost,
  addLike,
  deleteLike,
  AlreadyLiked,
  editPost,
  CountLikes,
} from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

beforeEach(() => {
  signInWithEmailAndPassword.mockClear();
  createUserWithEmailAndPassword.mockClear();
  addDoc.mockClear();
  signInWithPopup.mockClear();
  GoogleAuthProvider.mockClear();
});

/* EJEMPLO jest.mock('firebase/auth', () => (
  { signInWithEmailAndPassword: () => {}}
)); */
/* ----------------------------------REGISTRO------------------------------------------- */
describe('la funcion de registro', () => {
  it('debería ser una función', () => {
    expect(typeof RegisterMailAndPassword).toBe('function');
  });
  it('deberia llamar a la funcion  createUserWithEmailAndPassword cuando es ejecutada', async () => {
    await RegisterMailAndPassword('mvgomez.alonso@gmail.com', 'Vivi123');
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería retornar error cuando no funcione la dependencia', async () => {
    createUserWithEmailAndPassword.mockReturnValueOnce(new Error('error!'));
    const response = await RegisterMailAndPassword('.com', 'Vivi12');
    expect(response).toBeInstanceOf(Error);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

/* ----------------------------------LOGIN ------------------------------------------- */
describe('Iniciar sesión', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('deberia llamar a la funcion signInWithEmailAndPassword cuando es ejecutada', async () => {
    await loginUser('mvgomez.alonso@gmail.com', 'Vivi123');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('debería retornar inicio de sesion con la propiedad email', async () => {
    // por aqui "mockeamos" signInWithEmailAndPassword y definimos que hará
    signInWithEmailAndPassword.mockReturnValueOnce({ user: { email: 'mvgomez.alonso@gmail.com' } });
    const response = await loginUser('mvgomez.alonso@gmail.com', 'Vivi123');
    expect(response.user.email).toBe('mvgomez.alonso@gmail.com');
  });

  it('debería retornar error cuando no funcione la dependencia', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce(new Error('error!'));
    const response = await loginUser('.com', 'Vivi12');
    expect(response).toBeInstanceOf(Error);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

/* ----------------------------------LOGIN GOOGLE------------------------------------------- */
describe('la funcion de ingreso con google', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it('Deberia devolver datos del usuario una vez logeado', async () => {
    signInWithPopup.mockReturnValueOnce({ user: 'Viviana Gomez' });
    const provider = GoogleAuthProvider.mockReturnValueOnce({});
    console.log(provider);
    const response = await loginGoogle();
    expect(response.user).toBe('Viviana Gomez');
  });

  it('Deberia llamar a la funcion signInWithPopup', async () => {
    await loginGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

/* ----------------------------------CREAR POST ------------------------------------------- */
describe('la funcion de crear un post', () => {
  it('debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  });
  it('debería crear un nuevo post en la base de datos', async () => {
    const email = 'test@example.com';
    const texto = 'Este es un nuevo post';
    const etiqueta = 'prueba';
    await expect(createPost(email, texto, etiqueta)).resolves.toBeUndefined();
    // Aquí podrías agregar más expectativas para asegurarte de que el post se creó correctamente
  });
  it('debería lanzar un error si se le pasa un input vacío', async () => {
    const email = 'Viviana Gomez';
    const texto = '';
    const etiqueta = 'prueba';
    await expect(createPost(email, texto, etiqueta)).rejects.toThrow();
  });
});

/* ----------------------------------DELETE POST ------------------------------------------- */
describe('la funcion de eliminar un post', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
});

/* ----------------------------------EDITAR POST ------------------------------------------- */
describe('la funcion de editar un post', () => {
  it('debería ser una función', () => {
    expect(typeof editPost).toBe('function');
  });
});

/* ----------------------------------DAR LIKE ------------------------------------------- */

describe('la funcion de dar like a un post', () => {
  it('debería ser una función', () => {
    expect(typeof addLike).toBe('function');
  });
});

/* ----------------------------------COLECCION LIKES ------------------------------------------- */
describe('la funcion de verificar si la coleccion contiene like de un user', () => {
  it('debería ser una función', () => {
    expect(typeof AlreadyLiked).toBe('function');
  });
});

/* ----------------------------------DELETE LIKE ------------------------------------------- */
describe('la funcion de quitar like a un post', () => {
  it('debería ser una función', () => {
    expect(typeof deleteLike).toBe('function');
  });
});

/* ----------------------------------CONTAR LIKES ------------------------------------------- */
describe('la funcion de contar los likes', () => {
  it('debería ser una función', () => {
    expect(typeof CountLikes).toBe('function');
  });
});
