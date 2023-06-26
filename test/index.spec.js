/* eslint-disable no-unused-expressions */
// import { expect } from '@jest/globals';//
// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  RegisterMailAndPassword,
  loginUser,
  loginGoogle,
  createPost,
  deletePost,
  addLikeToDocument,
  likeRed,
  editPost,
  CountLikes,
} from '../src/lib/index';

jest.mock('firebase/auth');

/* EJEMPLO jest.mock('firebase/auth', () => (
  { signInWithEmailAndPassword: () => {}}
)); */

describe('la funcion de registro', () => {
  it('debería ser una función', () => {
    expect(typeof RegisterMailAndPassword).toBe('function');
  });
});

describe('Iniciar sesión', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('deberia llamar a la funcion signInWithEmailAndPassword cuando es ejecutada', async () => {
    await loginUser('correo@gmail.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  // por aqui "mockeamos" signInWithEmailAndPassword y definimos que hará
  it('debería retornar inicio de sesion con la propiedad email', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce({ user: { email: 'mvgomez.alonso@gmail.com' } });
    const response = await loginUser('mvgomez.alonso@gmail.com', 'Vivi123');
    expect(response.user.email).toBe('mvgomez.alonso@gmail.com');
  });
  it('debería considerar el otro parametro como contraseña válida', async () => {
    const response = await loginUser('mvgomez.alonso@gmail.com', 'Vivi123');
    expect(response.contraseña).toBe('mvgomez.alonso@gmail.com');
  });

  /* it('Devuelve un objeto', async () => {
    const response = await loginUser('dlara.nut@gmail.com', '1234567');
    expect(typeof response).toBe('object');
  });
  it('devuelve un objeto con la propiedad mail', async () => {
    const response = await loginUser('dlara.nut@gmail.com', '1234567');
    expect(response.user).toHaveProperty('email');
  }); */
});

describe('la funcion de ingreso con google', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('la funcion de crear un post', () => {
  it('debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  });
});

describe('la funcion de eliminar un post', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
});

describe('la funcion de editar un post', () => {
  it('debería ser una función', () => {
    expect(typeof editPost).toBe('function');
  });
});

describe('la funcion de dar like a un post', () => {
  it('debería ser una función', () => {
    expect(typeof addLikeToDocument).toBe('function');
  });
});

describe('la funcion de mantener el like rojo', () => {
  it('debería ser una función', () => {
    expect(typeof likeRed).toBe('function');
  });
});

describe('la funcion de contar los likes', () => {
  it('debería ser una función', () => {
    expect(typeof CountLikes).toBe('function');
  });
});
