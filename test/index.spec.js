import {
  signInWithEmailAndPassword,
  signInWithPopup,
  // GoogleAuthProvider,
  createUserWithEmailAndPassword,
  // updateProfile,
} from 'firebase/auth';

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import {
  loginUser,
  RegisterMailAndPassword,
  loginGoogle,
  createPost,
  deletePost,
  addLikeToDocument,
  editPost,
  likeRed,
} from '../src/lib';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../__mocks__/main.js');

// testeando funcion de inicio de sesion - loginUser //

describe('inicio de sesion', () => {
  it('deberia ser una funcion', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('debería retornar inicio de sesion con la propiedad email', () => loginUser('mvgomez.alonso@gmail.com', 'Vivi123', null)
    .then((user) => {
      expect(user.email).toBe('mvgomez.alonso@gmail.com');
    }));
  it('debería considerar el otro parametro como contraseña válida', async () => {
    await loginUser('mvgomez.alonso@gmail.com', 'Viviana1626', null).then((user) => {
      expect(user.contraseña).toBe('Viviana1626');
    });
  });
  it('debería retornar el error de una promesa', () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('error'));
    loginUser('mvgomez.alonso@gmail.com', 'Viviana1626', null).catch((error) => {
      expect(error.message).toBe('error');
    });
  });
});

// Testeando la funcion resgister //

describe('funcion registrate', () => {
  it('debería ser una función', () => {
    expect(typeof RegisterMailAndPassword).toBe('function');
  });
  it('debería devolver un registro con la propiedad email', () => RegisterMailAndPassword(null, 'mvgomez.alonso@gmail.com', 'Vivi123', 'Vivi', 'Gomez')
    .then((user) => {
      expect(user.email).toBe('mvgomez.alonso@gmail.com');
    }));

  it('Se ejecuta createUserWithEmailAndPassword()', () => {
    const email = 'mvgomez.alonso@gmail.com';
    const contraseña = '123';

    RegisterMailAndPassword(email, contraseña);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
it('debería devolver el error "La contraseña debe tener al menos 6 carácteres"', () => {
  createUserWithEmailAndPassword.mockRejectedValue(new Error('La contraseña debe tener al menos 6 carácteres'));
  RegisterMailAndPassword('mvgomez.alonso@gmail.com', '123').catch((error) => {
    expect(error.message).toBe('La contraseña debe tener al menos 6 carácteres');
  });
});
it('debería devolver el error "Debes ingresar un correo válido"', () => {
  createUserWithEmailAndPassword.mockRejectedValue(new Error('Debes ingresar un correo válido'));
  RegisterMailAndPassword('mvgomez.alonso@gmail.com', 'Vivi1234').catch((error) => {
    expect(error.message).toBe('Debes ingresar un correo válido');
  });
});

// test a loginGoogle //
describe('Iniciar sesion con Google', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('debería devolder un error de la promesa', () => {
    signInWithPopup.mockRejectedValue(new Error('error'));
    loginGoogle(null, 'mvgomez.alonso@gmail.com', 'MAThi34369').catch((error) => {
      expect(error.message).toBe('error');
    });
  });
  it('debería retornar un string', () => loginGoogle().then((provider) => {
    expect(typeof provider).toBe('string');
  }));
});

// test createPost //
describe('Crear Post', () => {
  it('debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  });
  it('deberia llamar correctamente addDoc', () => {
    createPost(addDoc);
    expect(addDoc).toBeCalled();
  });
});
