export const register = (onNavigate) => {
  const regisDiv = document.createElement('div');
  regisDiv.setAttribute('class', 'regisDiv');


  // div para las imagenes //


  const divImg = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');


  // atributos de las imagenes //


  divImg.setAttribute('class', 'divImg');
  img1.setAttribute('class', 'img1');
  img2.setAttribute('class', 'img2');
  img1.setAttribute('src', 'images/logo.png');  
  img2.setAttribute('src', 'images/Monita3.png');
 


  // agregar las imagenes al div imagenes //


  divImg.appendChild(img1);
  divImg.appendChild(img2);


  // div para el formulario de resgistro //


  const registerDiv = document.createElement('div');
  const namE = document.createElement('input');
  const lastName = document.createElement('input');
  const Email = document.createElement('input');
  const passWord = document.createElement('input');
  const age = document.createElement('input');
  const bntRegister = document.createElement('button');


  // agregar atributos //


  registerDiv.setAttribute('class', 'registerDiv');
 
  namE.setAttribute('type', 'text');
  namE.setAttribute('name', 'namE');
  namE.setAttribute('placeholder', 'Nombre');
  namE.setAttribute('id', 'namE');
  namE.setAttribute('class', 'namE');


  lastName.setAttribute('type', 'text');
  lastName.setAttribute('name', 'lastName');
  lastName.setAttribute('placeholder', 'Apellidos');
  lastName.setAttribute('id', 'lastName');
  lastName.setAttribute('class', 'lastName');  




  Email.setAttribute('type', 'text');
  Email.setAttribute('name', 'Email');
  Email.setAttribute('placeholder', 'Mail');
  Email.setAttribute('id', 'Email');
  Email.setAttribute('class', 'Email');


  passWord.setAttribute('type', 'text');
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


  const userData=document.getElementById("btnRegister");
  bntRegister.addEventListener('click', mostrar);


  function mostrar() {
  const nombre=document.getElementById("namE").value;
  const apellido= document.getElementById("lastName").value;
  const email= document.getElementById("Email").value;
  const  contraseña= document.getElementById("passWord").value;
  const  age= document.getElementById("age").value;
  //sin campos vacios.
  if (nombre ==="" || apellido==="" || email==="" || contraseña ==="" || age ==="") {
    alert("Por favor completa todos los campos"); return;}
  console.log(nombre);
  console.log(apellido);
  console.log(email)
  console.log(contraseña)}


  // agregar el div del formulario //
  registerDiv.appendChild(namE);
  registerDiv.appendChild(lastName);
  registerDiv.appendChild(Email);
  registerDiv.appendChild(passWord);
  registerDiv.appendChild(age);


  bntRegister.textContent = 'Registrate';
  bntRegister.addEventListener('click', () => onNavigate('/'));  


  // agregar los divs al padre //
  regisDiv.appendChild(divImg);
  regisDiv.appendChild(registerDiv);
  regisDiv.appendChild(bntRegister);


  return regisDiv;
};
