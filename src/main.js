// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { register } from './components/register.js';
import { welcomeApp } from './components/welcomeApp.js';
import { tips } from './components/tips.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/welcomeApp': welcomeApp,
  '/tips': tips,
};

const onNavigate = (pathname) => {
  // cambiar URL sin recargarla
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
};
// rootDiv.appendChild(routes[window.location.pathname]());
const component = routes[window.location.pathname];
// Para que navegue hacia delante y atras
window.onpopstate = () => {
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
