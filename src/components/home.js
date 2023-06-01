export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonWelcomeApp = document.createElement('button');

  buttonRegister.textContent = 'Regístrate';
  buttonWelcomeApp.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonWelcomeApp.addEventListener('click', () => onNavigate('/welcomeApp'));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonWelcomeApp);

  return homeDiv;
};
