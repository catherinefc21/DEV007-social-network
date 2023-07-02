/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import { loginUser, loginGoogle } from '../lib';
import logo from '../images/Logo.png';
import monitaHome from '../images/MONITA1.png';
import { auth } from '../firebase/firebaseConfig';

export const home = (onNavigate) => {
  if (localStorage.getItem('user12')) {
    onNavigate('/welcomeApp');
  } else {
    const homeDiv = document.createElement('div');

    // div para las imágenes
    const imgDiv = document.createElement('div');
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');

    // Agregar las imágenes al div de imágenes
    imgDiv.appendChild(image1);
    imgDiv.appendChild(image2);

    // div para el formulario inicio sesión
    const loginDiv = document.createElement('div');
    const email = document.createElement('input');
    const image3 = document.createElement('img');
    const password = document.createElement('input');
    const image4 = document.createElement('img');
    const buttonWelcomeApp = document.createElement('button');
    const divO = document.createElement('div');
    const buttonGoogle = document.createElement('button');
    const buttonRegister = document.createElement('button');

    // agregar atributos
    homeDiv.setAttribute('class', 'homeDiv');
    imgDiv.setAttribute('class', 'imgDiv');
    loginDiv.setAttribute('class', 'loginDiv');
    buttonRegister.setAttribute('class', 'buttonRegister');

    image1.setAttribute('src', logo);
    image1.setAttribute('class', 'img1');

    image2.setAttribute('src', monitaHome);
    image2.setAttribute('class', 'img2');

    image3.setAttribute('src', 'images/Email.png');

    image4.setAttribute('src', 'images/contraseña.png');

    email.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('id', 'email');
    email.setAttribute('class', 'email');

    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', 'Contraseña');
    password.setAttribute('id', 'password');
    password.setAttribute('class', 'password');

    buttonWelcomeApp.setAttribute('id', 'buttonWelcomeApp');
    buttonWelcomeApp.setAttribute('class', 'buttonWelcomeApp');

    divO.setAttribute('class', 'divO');

    buttonGoogle.setAttribute('id', 'buttonGoogle');
    buttonGoogle.setAttribute('class', 'buttonGoogle');

    // Iniciar sesion
    buttonWelcomeApp.addEventListener('click', () => {
      const email1 = document.getElementById('email').value;
      const contraseña1 = document.getElementById('password').value;
      // sin campos vacios.
      if (email1 === '' || contraseña1 === '') {
        alert('Por favor completa todos los campos'); return;
      }

      loginUser(email1, contraseña1).then(() => {
        localStorage.setItem('user12', auth.currentUser.email); //= > graba en local storage=> 2 parametros
        onNavigate('/welcomeApp');
      }).catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/invalid-email') { alert('El correo no es valido') & onNavigate('/'); } else if (errorCode === 'auth/user-disabled') { alert('el usuario ha sido deshabilitado') & onNavigate('/'); } else if (errorCode === 'auth/user-not-found') { alert('El usuario no existe') & onNavigate('/'); } else if (errorCode === 'auth/wrong-password') { alert('Contraseña incorrecta') & onNavigate('/'); }
      });
    });
    buttonGoogle.addEventListener('click', () => {
      try {
        loginGoogle(onNavigate).then(() => {
          onNavigate('/welcomeApp');
          localStorage.setItem('user12', auth.currentUser.email);
        });
      } catch (error) {
        console.error(error);
      }
    });

    // Agregar al div de formulario

    loginDiv.appendChild(email);
    loginDiv.appendChild(password);
    loginDiv.appendChild(buttonWelcomeApp);
    loginDiv.appendChild(divO);
    loginDiv.appendChild(buttonGoogle);
    loginDiv.appendChild(buttonRegister);

    divO.textContent = 'O';
    buttonWelcomeApp.textContent = 'Inicia sesión';
    buttonRegister.textContent = '¿Aun no tienes una cuenta? Regístrate';
    buttonGoogle.textContent = 'Acceder con Google';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    // Agregar ambos divs al padre
    homeDiv.appendChild(imgDiv);
    homeDiv.appendChild(loginDiv);

    return homeDiv;
  }
};

// const imgHome = document.createElement('div');
// const img = document.createElement('img');
// img.src = 'src/components/imges/logo.png';
// imgHome.appendChild(img);
