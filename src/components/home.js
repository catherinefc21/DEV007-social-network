export const home = (onNavigate) => {
  document.body.style.backgroundColor = '#FFE8BE';
  document.body.style.backgroundImage = 'url("images/fondo.png")';
  document.body.style.backgroundSize = '100%';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'right-bottom';



  const homeDiv = document.createElement('div');

  // div para las imágenes
  const imgDiv = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');

  // atributos de las imágenes
  image1.setAttribute('src', 'images/Logo.png');
  image2.setAttribute('src', 'images/MONITA1.png');

  // Agregar las imágenes al div de imágenes
  imgDiv.appendChild(image1);
  imgDiv.appendChild(image2);

  // div para el formulario inicio sesión
  const loginDiv = document.createElement('div');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const buttonWelcomeApp = document.createElement('button');
  const buttonRegister = document.createElement('button');

  // agregar atributos
  email.setAttribute('type', 'text');
  email.setAttribute('name', 'email');
  email.setAttribute('placeholder', 'Mail');
  email.setAttribute('id', 'email');

  password.setAttribute('type', 'text');
  password.setAttribute('name', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  password.setAttribute('id', 'password');

  // Agregar al div de formulario
  loginDiv.appendChild(email);
  loginDiv.appendChild(password);
  loginDiv.appendChild(buttonWelcomeApp);
  loginDiv.appendChild(buttonRegister);

  buttonWelcomeApp.textContent = 'Inicia sesión';
  buttonRegister.textContent = 'Regístrate';

  buttonWelcomeApp.addEventListener('click', () => onNavigate('/welcomeApp'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  // Agregar ambos divs al padre
  homeDiv.appendChild(imgDiv);
  homeDiv.appendChild(loginDiv);

  // Agregar estilos al homeDiv
  homeDiv.style.display = 'flex';
  homeDiv.style.flexDirection = 'column';
  homeDiv.style.alignItems = 'center';
  homeDiv.style.padding = '20px';

  // Agregar estilos al imgDiv
  imgDiv.style.display = 'flex';
  imgDiv.style.flexDirection = 'column';
  imgDiv.style.alignItems = 'center';

  // ancho y alto de las imágenes
  image1.style.width = '276px';
  image1.style.height = 'auto';
  image1.style.left = '17px';
  image1.style.top = '17px';

  image2.style.width = '144px';
  image2.style.height = 'auto';
  image2.style.top = '173px';
  image2.style.left = 'calc(50% - 144px/2)';

  // Agregar estilos al login div
  loginDiv.style.display = 'flex';
  loginDiv.style.flexDirection = 'column';
  loginDiv.style.alignItems = 'center';
  loginDiv.style.marginTop = '20px';

  // agregar márgenes formulario
  email.style.marginBottom = '10px';
  password.style.marginBottom = '10px';
  buttonWelcomeApp.style.marginBottom = '10px';
  buttonRegister.style.marginBottom = '20px';

  // agregar estilo a los input
  email.style.width = '244px';
  email.style.height = '40px';
  email.style.left = '58px';
  email.style.top = '386px';
  email.style.background = '#FFFFF';
  email.style.border = '1px solid #F40F46';
  email.style.borderRadius = '10px';

  password.style.width = '244px';
  password.style.height = '40px';
  password.style.left = '58px';
  password.style.top = '386px';
  password.style.background = '#FFFFF';
  password.style.border = '1px solid #F40F46';
  password.style.borderRadius = '10px';

  // agregar estilos a los botones
  buttonWelcomeApp.style.width = '219px';
  buttonWelcomeApp.style.height = '40px';
  buttonWelcomeApp.style.left = 'calc(50% - 219px/2 + 0.5px)';
  buttonWelcomeApp.style.top = '527px';
  buttonWelcomeApp.style.background = '#FF946B';
  buttonWelcomeApp.style.border = '1px solid #FF946B';
  buttonWelcomeApp.style.borderRadius = '10px';

  buttonRegister.style.width = '160px';
  buttonRegister.style.height = '40px';
  buttonRegister.style.left = 'calc(50% - 169px/2 - 0.5px)';
  buttonRegister.style.top = '626px';
  buttonRegister.style.background = '#F40F46';
  buttonRegister.style.border = '1px solid #FF7563';
  buttonRegister.style.borderRadius = '10px';

  return homeDiv;
};

// const imgHome = document.createElement('div');
// const img = document.createElement('img');
// img.src = 'src/components/imges/logo.png';
// imgHome.appendChild(img);
