import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBoa8z2MP7Lg5x1byqrGf02Oe_SivMB0Pc',
  authDomain: 'momconnect3-9d7fd.firebaseapp.com',
  projectId: 'momconnect3-9d7fd',
  storageBucket: 'momconnect3-9d7fd.appspot.com',
  messagingSenderId: '1008948398587',
  appId: '1:1008948398587:web:584d67080a52f23de5635e',
  measurementId: 'G-D8XQSGHXPN',
};

export const register = (onNavigate) => {
  const regisDiv = document.createElement('div');
  regisDiv.setAttribute('class', 'regisDiv');

  // div para las imagenes //

  const divImg = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');

  // atributos de las imagenes //

  divImg.setAttribute('class', 'divImg');
  img1.setAttribute('class', 'imag1');
  img2.setAttribute('class', 'imag2');
  img1.setAttribute('src', 'images/logo.png');
  img2.setAttribute('src', 'images/Monita3.png');

  // agregar las imagenes al div imagenes //

  divImg.appendChild(img1);
  divImg.appendChild(img2);

  // div para el formulario de resgistro //

  const registerDiv = document.createElement('div');
  const userNameDiv = document.createElement('div');
  const namE = document.createElement('input');
  const lastName = document.createElement('input');
  const Email = document.createElement('input');
  const passWord = document.createElement('input');
  const age = document.createElement('input');
  const bntRegister = document.createElement('button');
  const buttonHome = document.createElement('button');

  // agregar atributos //

  registerDiv.setAttribute('class', 'registerDiv');
  userNameDiv.setAttribute('class', 'userNameDiv');
  namE.setAttribute('type', 'text');
  namE.setAttribute('name', 'namE');
  namE.setAttribute('placeholder', 'Nombre');
  namE.setAttribute('id', 'namE');
  namE.setAttribute('class', 'namE');

  lastName.setAttribute('type', 'text');
  lastName.setAttribute('name', 'lastName');
  lastName.setAttribute('placeholder', 'Apellido');
  lastName.setAttribute('id', 'lastName');
  lastName.setAttribute('class', 'lastName');

  Email.setAttribute('type', 'text');
  Email.setAttribute('name', 'Email');
  Email.setAttribute('placeholder', 'Email');
  Email.setAttribute('id', 'Email');
  Email.setAttribute('class', 'Email');

  passWord.setAttribute('type', 'password');
  passWord.setAttribute('name', 'passWord');
  passWord.setAttribute('placeholder', 'Contraseña');
  passWord.setAttribute('id', 'passWord');
  passWord.setAttribute('class', 'passWord');

  age.setAttribute('type', 'date');
  age.setAttribute('name', 'bday');
  age.setAttribute('placeholder', 'Edad');
  age.setAttribute('id', 'age');
  age.setAttribute('class', 'age');

  bntRegister.setAttribute('id', 'bntRegister');
  bntRegister.setAttribute('class', 'bntRegister');
  buttonHome.setAttribute('class', 'bntbackHome');

  const userData = document.getElementById('btnRegister');
  bntRegister.addEventListener('click', mostrar);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function mostrar() {
    const nombre = document.getElementById('namE').value;
    const apellido = document.getElementById('lastName').value;
    const email = document.getElementById('Email').value;
    const contraseña = document.getElementById('passWord').value;
    const age = document.getElementById('age').value;
    // sin campos vacios.
    if (nombre === '' || apellido === '' || email === '' || contraseña === '' || age === '') {
      alert('Por favor completa todos los campos'); return;
    }
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(contraseña);

    createUserWithEmailAndPassword(auth, email, contraseña).then((cred) => {
      onNavigate('/');
    }).catch((error) => {
      const errorCode = error.code;

      if (errorCode == 'auth/email-already-in-use') {
        alert('El correo ya está en uso')
      & onNavigate('/register');
      } else if (errorCode == 'auth/invalid-email') {
        alert('el correo no es válido')
      & onNavigate('/register');
      } else if (errorCode == 'auth/weak-password') {
        alert('la contraseña debe tener al menos 6 caracteres')
      & onNavigate('/register');
      }
    });
  }

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // agregar el div del formulario //
  userNameDiv.appendChild(namE);
  userNameDiv.appendChild(lastName);
  registerDiv.appendChild(userNameDiv);
  registerDiv.appendChild(Email);
  registerDiv.appendChild(passWord);
  registerDiv.appendChild(age);
  registerDiv.appendChild(bntRegister);
  registerDiv.appendChild(buttonHome);

  bntRegister.textContent = 'Registrate';
  buttonHome.textContent = 'Volver al Home';

  // agregar los divs al padre //
  regisDiv.appendChild(divImg);
  regisDiv.appendChild(registerDiv);

  return regisDiv;
};
