/* eslint-disable no-alert */

import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore';
import { createPost, deletePost } from '../lib';
import { auth, db } from '../firebase/firebaseConfig';

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
  optionPublisher1.setAttribute('value', '#Lactancia');
  optionPublisher2.setAttribute('value', '#PrimeraComida');
  optionPublisher3.setAttribute('value', '#Formulaslacteas');
  optionPublisher4.setAttribute('value', '#TipsGenerales');
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
    const nameEmail = auth.currentUser.displayName;

    console.log(textPost, selectT);
    // sin campos vacios.
    if (textPost === '' || selectT === 'Etiqueta tu post') {
      alert('Por favor completa todos los campos'); return;
    }
    console.log(auth.currentUser);

    createPost(nameEmail, textPost, selectT);
  
  }

 
  /* const Publicaciones = collection(db,'publicaciones');
  console.log(Publicaciones); */

  /* esto tambien hay que hacerlo con la parte de buttontips, buttonProfile EN EL FUTURO */
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // ---------------------ARTICLE (Publicaciones de mamis "muro")--------------------------

  const timeline = document.createElement('div');
  timeline.setAttribute('class', 'timeline');

  const post = document.createElement('div');
  post.setAttribute('class', 'post');
  /* onSnapshot(query(collection(db, 'posts'), orderBy('contenido', 'desc'), limit(7)), (querySnapshot) => { */
  const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'), limit(3));
  onSnapshot(q, (querySnapshot) => {
    const savePostsArray = [];
    querySnapshot.forEach((doc) => {
      const savePost = doc.data();
      savePost.id = doc.id;
      //console.log(savePost);
      savePostsArray.push(savePost); // Agrega el objeto al array
      //console.log(savePost);
    });
    buttonPublisher.addEventListener('click', publishPost);
    buttonPublisher.addEventListener('click', () => onNavigate('/welcomeApp'));

    /* onSnapshot(collection(db, 'posts'), orderBy('fecha', 'desc'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const savePost = doc.data();
      console.log(savePost);
      savePostsArray.push(savePost); // Agrega el objeto al array
      console.log(savePost);
    }); */
    // Limpiar el contenido anterior de la variable post
    post.innerHTML = '';

    
    // Recorrer el array y crear elementos adicionales para cada objeto
    savePostsArray.forEach((savePost) => {
      const postId = savePost.id
      const containerPost = document.createElement('div');
      const postEmail = document.createElement('div');
      const postText = document.createElement('div');
      const postLabel = document.createElement('div');
      const like = document.createElement('button');
      const postConfig = document.createElement('div');
      const btnPostConfig = document.createElement('button');
      const listPostConfig = document.createElement('div');
      const btnConfigEdit = document.createElement('button');
      const btnConfigDelete = document.createElement('button');

      postEmail.setAttribute('class', 'postEmail');
      postText.setAttribute('class', 'postText');
      postLabel.setAttribute('class', 'postLabel');
      like.setAttribute('class', 'like');
      postConfig.setAttribute('class', 'postConfig');
      btnPostConfig.setAttribute('class', 'btnPostConfig');
      listPostConfig.setAttribute('class', 'listPostConfig');
      btnConfigEdit.setAttribute('class', 'btnConfigEdit');
      btnConfigDelete.setAttribute('class', 'btnConfigDelete');
      containerPost.setAttribute('class', 'containerPost');
      

      // Configurar el contenido del elemento postItem según los datos del objeto savePost
      postEmail.textContent = savePost.Email;
      postText.textContent = savePost.Contenido;
      postLabel.textContent = savePost.Etiqueta;
      like.textContent = '';
      btnConfigDelete.textContent = 'Borrar';
      btnConfigEdit.textContent = 'Editar';

      // Boton de borrar post //

     
     btnConfigDelete.addEventListener('click', () => deletePost(postId));
     


      postConfig.appendChild(btnPostConfig);
      btnPostConfig.appendChild(listPostConfig);
      listPostConfig.appendChild(btnConfigEdit);
      listPostConfig.appendChild(btnConfigDelete);
      containerPost.appendChild(postConfig);
      containerPost.appendChild(postEmail);
      containerPost.appendChild(postText);
      containerPost.appendChild(postLabel);
      containerPost.appendChild(like);
      post.appendChild(containerPost);

    });
  });

    // Todo en orden a welcomeAppDiv

  timeline.appendChild(post);
  const welcomeArt = document.createElement('div');
  welcomeArt.setAttribute('class', 'welcomeArt');

  welcomeArt.appendChild(timeline);
  welcomeAppDiv.appendChild(welcomeNav);
  welcomeAppDiv.appendChild(welcomeMain);
  welcomeAppDiv.appendChild(welcomeArt);

  /* finalmente return el div que contiene todo con los divs que le agregamos (nav/main/art) */
  return welcomeAppDiv;
};