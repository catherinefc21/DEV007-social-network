import { onNavigate } from '../main.js';

export const welcomeApp = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenida a MomConnect';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Cerrar sesión';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
