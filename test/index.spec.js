// importamos la funcion que vamos a testear
import { RegisterMailAndPassword, loginUser } from '../src/lib/index';

describe('la funcion de registro', () => {
  it('debería ser una función', () => {
    expect(typeof RegisterMailAndPassword).toBe('function');
  });
});

describe('la funcion de ingreso', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
});
