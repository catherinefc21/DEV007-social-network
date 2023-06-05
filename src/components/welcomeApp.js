export const welcomeApp = (onNavigate) => {
 //estilo de Body
  document.body.style.backgroundColor = '#FFE8BE';
  document.body.style.backgroundImage = 'url("images/fondo.png")';
  document.body.style.backgroundSize = '100%';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'right-bottom';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center'

  //div general
  const homeDiv = document.createElement('div');
  homeDiv.style.display = 'flex';
  homeDiv.style.flexDirection = 'column';
  homeDiv.style.justifyContent = 'center';
  homeDiv.style.width = '360px';

//---------------------NAV--------------------------------------------------

 //NAv div logo y div para "buttons"
  const homeNav = document.createElement('nav');
  const divNavImg = document.createElement('div');
  const imgNav = document.createElement('img');
  const btnPicture=document.createElement('div');
  const buttonPicture=document.createElement('button');
  const ListPicture=document.createElement('div');
  //menu desplegable
  const buttonHome = document.createElement('button');
  const buttonProfile= document.createElement('button');

   imgNav.setAttribute('src', './images/Logo.png');
   const Search = document.createElement('input');
   const buttonTips = document.createElement('button');
  
   //falta enlazar la imagen de foto de perfil
   buttonPicture.setAttribute('src', '');
   buttonProfile.textContent = 'Perfil'
   buttonHome.textContent = 'Cerrar sesión';


  //estilo NAV
  homeNav.style.display = 'inline-flex';
  homeNav.style.justifyContent = 'space-around';
  homeNav.style.alignItems = 'flex-end';
  homeNav.style.width = '360px';
  homeNav.style.height = '72px';

  //estilo logo
  divNavImg.style.width = '120px';
  divNavImg.style.marginRight = '30px';
  imgNav.style.width = '100%';

  //orden de const en Nav
  btnPicture.appendChild(buttonPicture);
  buttonPicture.appendChild(ListPicture);
  ListPicture.appendChild(buttonProfile);
  ListPicture.appendChild(buttonHome);
  divNavImg.appendChild(imgNav);
  homeNav.appendChild(divNavImg);
  homeNav.appendChild(Search);
  homeNav.appendChild(buttonTips);
  homeNav.appendChild(btnPicture);
 //---Estilos Nav------
  buttonPicture.style.background= '#F40F46';
  buttonPicture.style.width= '48px';
  buttonPicture.style.height= '48px';
  buttonPicture.style.borderRadius= '50px';
  buttonPicture.style.display= 'flex';
  buttonPicture.style.justifyContent= 'center';
  buttonPicture.style.border= 'none';

  ListPicture.style.display = 'none';
  ListPicture.style.position = 'absolute';
  ListPicture.style.backgroundColor = 'white';
  ListPicture.style.zIndex = '1';
  ListPicture.style.borderRadius= '5px';
  ListPicture.style.margin= '40px';

  buttonHome.style.background = 'FFD7C8';
  buttonHome.style.border= 'none';
  buttonHome.style.color = '#F40F46';
  buttonHome.style.width = '60px';
  buttonHome.style.height = '40px';
  buttonHome.style.borderRadius= '5px';
  buttonHome.style.textDecoration = 'none';
  buttonHome.style.display = 'block';

  buttonProfile.style.background = 'FFD7C8';
  buttonProfile.style.color = '#F40F46';
  buttonProfile.style.border= 'none';
  buttonProfile.style.textDecoration = 'none';
  buttonProfile.style.display = 'block';
  buttonProfile.style.width = '60px';
  buttonProfile.style.height = '40px';
  buttonProfile.style.borderRadius= '5px';

  Search.style.background= '#F40F46';
  Search.style.backgroundImage= 'url("images/lupa.png")';
  Search.style.backgroundSize= '50%'
  Search.style.backgroundPosition= '11px 8px';
  Search.style.backgroundRepeat= 'no-repeat';
  Search.style.paddingLeft = '40px';
  Search.style.borderRadius= '50px';
  Search.style.width= '7px';
  Search.style.height= '47px';
  Search.style.border= 'none';

  buttonTips.style.width = '48px';
  buttonTips.style.height = '48px';
  buttonTips.style.background = '#F40F46';
  buttonTips.style.backgroundImage= 'url("images/consejos.png")';
  buttonTips.style.backgroundPosition= '10px 3px';
  buttonTips.style.backgroundSize= '60%'
  buttonTips.style.backgroundRepeat= 'no-repeat';
  buttonTips.style.borderRadius= '50px';
  buttonTips.style.border= 'none';

  //esto es un "HOVER"
  btnPicture.addEventListener('mouseover', function() {
    ListPicture.style.display = 'block'; // Muestra el elemento ListPicture
  });
  
  btnPicture.addEventListener('mouseout', function() {
    ListPicture.style.display = 'none'; // Oculta el elemento ListPicture
  });

  buttonHome.addEventListener('mouseover', function() {
    buttonHome.style.background = '#FFD7C8'; // Muestra el elemento ListPicture
  });
  
  buttonHome.addEventListener('mouseout', function() {
    buttonHome.style.background = 'none'; // Oculta el elemento ListPicture
  });

  buttonProfile.addEventListener('mouseover', function() {
    buttonProfile.style.background = '#FFD7C8'; // Muestra el elemento ListPicture
  });
  
  buttonProfile.addEventListener('mouseout', function() {
    buttonProfile.style.background = 'none'; // Oculta el elemento ListPicture
  });

  Search.addEventListener('mouseover', function() {
    Search.style.width = '80px';
    Search.style.backgroundImage = 'none';
    });

  Search.addEventListener('mouseout', function() {
    Search.style.width = '10px';
    Search.style.backgroundImage= 'url("images/lupa.png")';
      });
  
//-------------------MAIN (monita+escribe tu comentario)--------------------------------------------

  const homeMain = document.createElement('main');

  //estilo general Main
  homeMain.style.display = 'inline-flex';
  homeMain.style.marginBottom = '20px';
  //constantes que utilizamos
  const divMainImage = document.createElement('div');
  const imgMain = document.createElement('img');
  const divMainPublisher = document.createElement('div');
  const inputPublisher = document.createElement('textarea');
  const buttonPublisher = document.createElement('button');

 //atributos de los bottom
  imgMain.setAttribute('src', './images/Monita2.png');
  inputPublisher.setAttribute('placeholder', '¿Que quieres compartir?');
  buttonPublisher.setAttribute('id', 'btnpublisher');
  buttonPublisher.textContent = 'Publicar'
 
  //orden de const
  divMainImage.appendChild(imgMain);
  divMainPublisher.appendChild(inputPublisher);
  divMainPublisher.appendChild(buttonPublisher);
  homeMain.appendChild(divMainImage);
  homeMain.appendChild(divMainPublisher);

  //----Estilos Main ------
  divMainImage.style.width = '131px';
  divMainImage.style.height = '183px';
  imgMain.style.width = '100%';

  divMainPublisher.style.display = 'flex';
  divMainPublisher.style.justifyContent = 'center';
  divMainPublisher.style.alignItems = 'center';
  divMainPublisher.style.flexDirection = 'column';
  divMainPublisher.style.marginLeft = '20px';

  inputPublisher.style.width = '190px';
  inputPublisher.style.height = '94.5px';
  inputPublisher.style.border = '1px solid #F40F46';
  inputPublisher.style.borderRadius = '10px 10px 10px 0px';
  inputPublisher.style.textAlign = 'left start';
  inputPublisher.style.padding = '5px 7px';

  buttonPublisher.style.marginLeft = '80px';
  buttonPublisher.style.marginTop = '-30px';
  buttonPublisher.style.background = '#F40F46';
  buttonPublisher.style.borderRadius = '10px';
  buttonPublisher.style.width= '100px';
  buttonPublisher.style.height = '24px';
  buttonPublisher.style.border = '1px solid #F40F46';
  buttonPublisher.style.color = 'white';

  /* esto tambien hay que hacerlo con la parte de buttontips, buttonProfile EN EL FUTURO */
  buttonHome.addEventListener('click', () => onNavigate('/'));

  //---------------------ARTICLE (Publicaciones de mamis "muro")--------------------------
  const homeArt = document.createElement('article');
  homeArt.textContent = 'aqui van los estados de las mamis (muro)';

  //Todo en orden a homeDiv
  homeDiv.appendChild(homeNav);
  homeDiv.appendChild(homeMain);
  homeDiv.appendChild(homeArt);

  /* finalmente return el div que contiene todo con los divs que le agregamos (nav/main/art) */
  return homeDiv;
};
