/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable max-len */
import {
  collection, onSnapshot, orderBy, query, limit,
} from 'firebase/firestore';
import {
  createPost, deletePost, addLikeToDocument, editPost,
} from '../lib';
import { auth, db } from '../firebase/firebaseConfig';
import monitasdos from '../images/Monita2.png';
import logo from '../images/Logo.png';

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
  imgNav.setAttribute('src', logo);
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

  /*  -------------------MAIN (monita+escribe tu comentario)--------------------------------------------  */

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
  imgMain.setAttribute('src', monitasdos);
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
  const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'), limit(15));
  onSnapshot(q, (querySnapshot) => {
    const savePostsArray = [];

    querySnapshot.forEach((doc) => {
      const savePost = doc.data();
      savePost.id = doc.id;

      savePostsArray.push(savePost); // Agrega el objeto al array
      // console.log(savePost);
    });
    buttonPublisher.addEventListener('click', publishPost);
    buttonPublisher.addEventListener('click', () => onNavigate('/welcomeApp'));

    // Limpiar el contenido anterior de la variable post
    post.innerHTML = '';

    // Recorrer el array y crear elementos adicionales para cada objeto

    savePostsArray.forEach(async (savePost) => {
      const postId = savePost.id; // aqui esta el ID de los post cada uno

      // crear donde guardar like
      const likeCountElement = document.createElement('span');
      onSnapshot(query(collection(db, 'coleccionLikes', postId, 'likes')), (snapshot) => {
        const likesCount = snapshot.size;
        likeCountElement.textContent = `${likesCount}`;
      });

      const containerPost = document.createElement('div');
      const postEmail = document.createElement('div');
      const postText = document.createElement('div');
      const postLabel = document.createElement('div');
      const containerLike = document.createElement('div');
      const like = document.createElement('button');
      const postConfig = document.createElement('div');
      const btnPostConfig = document.createElement('button');
      const listPostConfig = document.createElement('div');
      const btnConfigEdit = document.createElement('button');
      const btnConfigDelete = document.createElement('button');

      postEmail.setAttribute('class', 'postEmail');
      postText.setAttribute('class', 'postText');
      postLabel.setAttribute('class', 'postLabel');
      containerLike.setAttribute('class', 'containerLike');
      like.setAttribute('class', 'like');
      likeCountElement.setAttribute('class', 'likeCountElement');
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

      like.addEventListener('click', async () => {
        addLikeToDocument(postId, auth.currentUser.displayName, like);
      });

      postConfig.appendChild(btnPostConfig);
      btnPostConfig.appendChild(listPostConfig);
      listPostConfig.appendChild(btnConfigEdit);
      listPostConfig.appendChild(btnConfigDelete);
      containerPost.appendChild(postConfig);
      containerPost.appendChild(postEmail);
      containerPost.appendChild(postText);
      containerPost.appendChild(postLabel);
      containerLike.appendChild(like);
      containerLike.appendChild(likeCountElement);
      containerPost.appendChild(containerLike);
      post.appendChild(containerPost);

      btnConfigEdit.addEventListener('click', () => {
        // Crear un elemento de div para el pop-up
        const popupContainer = document.createElement('div');
        popupContainer.setAttribute('class', 'popup-container');

        // Crear los elementos del pop-up
        const popupContent = document.createElement('div');
        popupContent.setAttribute('class', 'popup-content');
        const closeButton = document.createElement('span');
        closeButton.setAttribute('class', 'close-button');
        closeButton.innerHTML = '&times;';
        const inputEdit = document.createElement('textarea');
        const selectEdit = document.createElement('select');
        const optionEdit0 = document.createElement('option');
        const optionEdit1 = document.createElement('option');
        const optionEdit2 = document.createElement('option');
        const optionEdit3 = document.createElement('option');
        const optionEdit4 = document.createElement('option');
        const buttonSaveChanges = document.createElement('button');

        inputEdit.setAttribute('class', 'inputEdit');
        inputEdit.setAttribute('id', 'inputEdit');
        selectEdit.setAttribute('id', 'selectEdit');
        selectEdit.setAttribute('class', 'selectEdit');
        optionEdit0.setAttribute('class', 'option0');
        optionEdit1.setAttribute('value', '#Lactancia');
        optionEdit2.setAttribute('value', '#PrimeraComida');
        optionEdit3.setAttribute('value', '#Formulaslacteas');
        optionEdit4.setAttribute('value', '#TipsGenerales');
        buttonSaveChanges.setAttribute('class', 'buttonEdit');
        buttonSaveChanges.setAttribute('id', 'buttonSaveChanges');
        buttonSaveChanges.textContent = 'Guardar';
        optionEdit0.textContent = 'Etiqueta tu post';
        optionEdit1.textContent = '#Lactancia';
        optionEdit2.textContent = '#PrimeraComida';
        optionEdit3.textContent = '#FormulasLacteas';
        optionEdit4.textContent = '#TipsGenerales';
        inputEdit.textContent = savePost.Contenido;
        selectEdit.textContent = savePost.Etiqueta;

        // Agregar los elementos al pop-up
        popupContainer.appendChild(popupContent);
        popupContent.appendChild(closeButton);
        popupContent.appendChild(inputEdit);
        popupContent.appendChild(selectEdit);
        selectEdit.appendChild(optionEdit0);
        selectEdit.appendChild(optionEdit1);
        selectEdit.appendChild(optionEdit2);
        selectEdit.appendChild(optionEdit3);
        selectEdit.appendChild(optionEdit4);
        popupContent.appendChild(buttonSaveChanges);
<<<<<<< HEAD
=======

>>>>>>> 5e281766bcad25c5556c1eb77fbddde47eef64f0
        // Agregar el pop-up al documento
        document.body.appendChild(popupContainer);

        // Función para cerrar el pop-up
        const closePopup = () => {
          document.body.removeChild(popupContainer);
        };

        // Función para guardar los cambios del pop-up
        const saveChanges = () => {
          const editedText = document.getElementById('inputEdit').value;
          const editedTag = document.getElementById('selectEdit').value;
          if (editedText === '' || editedTag === 'Etiqueta tu post') {
            alert('Completa todos los campos');
            return;
          }
          editPost(postId, editedText, editedTag)
            .then(() => {
              closePopup();
            })
            .catch((error) => {
              console.error('Error al editar el post:', error);
              alert('Ha ocurrido un error al guardar los cambios');
            });
        };

        // Agregar eventos al pop-up
        closeButton.addEventListener('click', closePopup);
        buttonSaveChanges.addEventListener('click', saveChanges);
      });
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
