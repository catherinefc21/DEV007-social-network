export const welcomeApp = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const homeNav = document.createElement('nav');
  const divNavImg = document.createElement('div');
  const imgNav = document.createElement('img');
  const homeMain = document.createElement('main');
  const divMainImage = document.createElement('div');
  const divMainPublisher = document.createElement('div');
  const homeArt = document.createElement('article');

  /* setAtribute indica la class, Id, etc. */
  imgNav.setAttribute('src', './images/Logo.png');
  /* dar una clase a divNavImg */
  homeDiv.style.display = 'inline-block';
  homeNav.style.display = 'inline-flex';
  divNavImg.style.backgroundColor = 'green';
  divNavImg.style.width = '9%';
  imgNav.style.width = '100%';
  homeMain.style.display = 'inline-flex';
  homeMain.style.background = 'blue';
  /* textcontent= en '' lo que vas a escribir en esa area' */
  homeArt.textContent = 'aqui van los estados de las mamis (muro)';
  divMainImage.textContent = 'Div para la imagen';
  divMainPublisher.textContent = 'div para el recuadro de texto';
  /* faltara hacer el onNavigate Tips */
  const buttonTips = document.createElement('button');
  const buttonSearch = document.createElement('button');
  const buttonHome = document.createElement('button');

  /* que dicen los buttons */
  buttonTips.textContent = 'Tips';
  buttonSearch.textContent = 'Search';
  buttonHome.textContent = 'Cerrar sesión';

  /* para dar estilo
  document.class('logoBarra').style.backgroundColor = 'red';
  document.body.style.backgroundColor = 'red'; */
  /* esto tambien hay que hacerlo con la parte de buttontips EN EL FUTURO */
  buttonHome.addEventListener('click', () => onNavigate('/'));

  /* el appenChild le agrega al div o element lo que quieras, */
  homeNav.appendChild(divNavImg);
  divNavImg.appendChild(imgNav);
  homeNav.appendChild(buttonTips);
  homeNav.appendChild(buttonSearch);
  homeNav.appendChild(buttonHome);
  homeMain.appendChild(divMainImage);
  homeMain.appendChild(divMainPublisher);

  homeDiv.appendChild(homeNav);
  homeDiv.appendChild(homeMain);
  homeDiv.appendChild(homeArt);

  /* finalmente return el div que contiene todo con los divs que le agregamos (nav/main/art) */
  return homeDiv;
};
