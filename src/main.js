// Este es el punto de entrada de tu aplicacion
import { home } from './components/home.js';
import { register } from './components/register.js';
import { welcomeApp } from './components/welcomeApp.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/welcomeApp': welcomeApp,
};

const onNavigate = (pathname) => {
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
// Esto de abajo se supone que es para que funcione mejor(investigar???)
window.onpopstate = () => {
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
