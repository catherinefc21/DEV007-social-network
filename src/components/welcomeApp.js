/* eslint-disable no-alert */
/* eslint-disable max-len */
export const welcomeApp = (onNavigate) => {
  // Contenedor General----------------------------------
  const welcomeAppDiv = document.createElement('div');
  welcomeAppDiv.setAttribute('class', 'welcomeAppDiv');

  // ---------------------NAV--------------------------------------------------

  // NAv div logo y div para "buttons"
  const welcomeNav = document.createElement('nav');
  const divNavImg = document.createElement('div');
  const imgNav = document.createElement('img');
  const btnPicture = document.createElement('div');
  const buttonPicture = document.createElement('button');
  const ListPicture = document.createElement('div');
  const buttonHome = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const Search = document.createElement('input');
  const buttonTips = document.createElement('button');

  welcomeNav.setAttribute('class', 'welcomeNav');
  divNavImg.setAttribute('class', 'divNavImg');
  imgNav.setAttribute('src', './images/Logo.png');
  btnPicture.setAttribute('class', 'btnPicture');
  buttonPicture.setAttribute('class', 'buttonPicture');
  ListPicture.setAttribute('class', 'ListPicture');
  buttonHome.setAttribute('class', 'buttonHome');
  buttonProfile.setAttribute('class', 'buttonProfile');
  Search.setAttribute('class', 'Search');
  buttonTips.setAttribute('class', 'buttonTips');
  // falta enlazar la imagen de foto de perfil

  buttonProfile.textContent = 'Perfil';
  buttonHome.textContent = 'Cerrar sesión';

  // orden de const en Nav
  btnPicture.appendChild(buttonPicture);
  buttonPicture.appendChild(ListPicture);
  ListPicture.appendChild(buttonProfile);
  ListPicture.appendChild(buttonHome);
  divNavImg.appendChild(imgNav);
  welcomeNav.appendChild(divNavImg);
  welcomeNav.appendChild(Search);
  welcomeNav.appendChild(buttonTips);
  welcomeNav.appendChild(btnPicture);

  /* esto es un "HOVER"
  btnPicture.addEventListener('mouseover', function() {
    ListPicture.style.display = 'block'; // Muestra el elemento ListPicture
  });

  btnPicture.addEventListener('mouseout', function() {
    ListPicture.style.display = 'none'; // Oculta el elemento ListPicture
  }); */

  /* -------------------MAIN (monita+escribe tu comentario)-------------------------------------------- */

  const welcomeMain = document.createElement('main');
  const divMainImage = document.createElement('div');
  const imgMain = document.createElement('img');
  const divMainPublisher = document.createElement('div');
  const buttonMainPublisher = document.createElement('div');
  const inputPublisher = document.createElement('textarea');
  const selectPublisher = document.createElement('select');
  const optionPublisher0 = document.createElement('option');
  const optionPublisher1 = document.createElement('option');
  const optionPublisher2 = document.createElement('option');
  const optionPublisher3 = document.createElement('option');
  const optionPublisher4 = document.createElement('option');
  const buttonPublisher = document.createElement('button');

  welcomeMain.setAttribute('class', 'welcomeMain');
  divMainImage.setAttribute('class', 'divMainImage');
  divMainPublisher.setAttribute('class', 'divMainPublisher');
  inputPublisher.setAttribute('class', 'inputPublisher');
  inputPublisher.setAttribute('id', 'inputPublisher');
  buttonMainPublisher.setAttribute('class', 'buttonMainPublisher');
  selectPublisher.setAttribute('id', 'select');
  selectPublisher.setAttribute('class', 'selectPublisher');
  optionPublisher0.setAttribute('default', '');
  optionPublisher0.setAttribute('class', 'option0');
  optionPublisher1.setAttribute('value', 'Lactancia');
  optionPublisher2.setAttribute('value', 'Primera Comida');
  optionPublisher3.setAttribute('value', 'Formulas lacteas');
  optionPublisher4.setAttribute('value', 'Tips generales');
  buttonPublisher.setAttribute('class', 'buttonPublisher');
  imgMain.setAttribute('src', './images/Monita2.png');
  inputPublisher.setAttribute('placeholder', '¿Que quieres compartir?');
  buttonPublisher.setAttribute('id', 'btnpublisher');
  buttonPublisher.textContent = 'Publicar';
  optionPublisher0.textContent = 'Etiqueta tu post';
  optionPublisher1.textContent = '#Lactancia';
  optionPublisher2.textContent = '#PrimeraComida';
  optionPublisher3.textContent = '#FormulasLacteas';
  optionPublisher4.textContent = '#TipsGenerales';

  // orden de const
  divMainImage.appendChild(imgMain);
  divMainPublisher.appendChild(inputPublisher);
  divMainPublisher.appendChild(buttonMainPublisher);
  buttonMainPublisher.appendChild(selectPublisher);
  selectPublisher.appendChild(optionPublisher0);
  selectPublisher.appendChild(optionPublisher1);
  selectPublisher.appendChild(optionPublisher2);
  selectPublisher.appendChild(optionPublisher3);
  selectPublisher.appendChild(optionPublisher4);
  buttonMainPublisher.appendChild(buttonPublisher);
  welcomeMain.appendChild(divMainImage);
  welcomeMain.appendChild(divMainPublisher);

  function publishPost() {
    const textPost = document.getElementById('inputPublisher').value;
    const selectT = document.getElementById('select').value;

    console.log(textPost, selectT);
    // sin campos vacios.
    if (textPost === '' || selectT === '') {
      alert('Por favor completa todos los campos');
    }
  }
  buttonPublisher.addEventListener('click', publishPost);

  /* esto tambien hay que hacerlo con la parte de buttontips, buttonProfile EN EL FUTURO */
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // ---------------------ARTICLE (Publicaciones de mamis "muro")--------------------------
  const homeArt = document.createElement('article');
  homeArt.textContent = 'aqui van los estados de las mamis (muro)';

  // Todo en orden a welcomeAppDiv

  welcomeAppDiv.appendChild(welcomeNav);
  welcomeAppDiv.appendChild(welcomeMain);
  welcomeAppDiv.appendChild(homeArt);

  /* finalmente return el div que contiene todo con los divs que le agregamos (nav/main/art) */
  return welcomeAppDiv;
};
