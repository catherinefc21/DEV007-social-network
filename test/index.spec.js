import { loginUser } from '../src/lib';

jest.mock('firebase/auth');
jest.mock('../__mocks__/main.js');

describe('inicio de sesion', () => {
  it('deberia ser una funcion', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('deberia retornar error de mail', () => {
    loginUser('a', '123213', null)
      .then((user) => user)
      .catch((error) => {
        expect(error.code).toBe('auth/invalid-email');
        expect(window.location.pathname).toBe('/');
        return error.code;
      });
  });
  it('deberia retornar email correcto', () => {
    loginUser('a', '123213', null)
      .then((user) => user);
    expect(window.location.pathname).toBe('/welcome');
  });
});
// expect(user).toBe({mail: 'a',  crateUser})
