// importamos la data del home //
import { home } from '../src/components/home';

// llamamos nuestra carpeta de main.js de la carpeta mocks

jest.mock('../__mocks__/main.js');

// realizamos testeo del home.js

describe('Test de home', () => {
  const component = home();
  const btnRegister = component.querySelector('.buttonRegister');
  const buttonWelcome = component.querySelector('.buttonWelcomeApp');
  it('Estaremos ubicados en la pagina principal "/"', () => {
    expect(window.location.pathname).toBe('/');
  });
  it('Debe existir un boton login', () => {
    expect(buttonWelcome.innerHTML).toBe('Iniciar sesión');
  });
  it('Este boton Login debe enviar a "/welcomeApp"', () => {
    buttonWelcome.click();
    expect(window.location.pathname).toBe('/welcomeApp');
  });
  it('Debemos tener una redireccion a la seccion de registrar', () => {
    expect(btnRegister.innerHTML).toBe('Regístrate');
  });
  it('El boton Registrate debe enviar a "/register"', () => {
    btnRegister.click();
    expect(window.location.pathname).toBe('/register');
  });
});
