export const register = (onNavigate) => {
  document.body.style.backgroundColor = '#FFE8BE';
  document.body.style.backgroundImage = 'url("images/fondo.png")';
  document.body.style.backgroundSize = '100%';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'right-bottom';
  
  const homeDiv = document.createElement('div');
 
  // div para las imagenes //
  
  const divImg = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');

  // atributos de las imagenes //

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

  namE.setAttribute('type', 'text');
  namE.setAttribute('name', 'namE');
  namE.setAttribute('placeholder', 'Nombre');
  namE.setAttribute('id', 'namE');
    
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('name', 'lastName');
  lastName.setAttribute('placeholder', 'Apellidos');
  lastName.setAttribute('id', 'lastName');  

  Email.setAttribute('type', 'text');
  Email.setAttribute('name', 'Email');
  Email.setAttribute('placeholder', 'Mail');
  Email.setAttribute('id', 'Email');

  passWord.setAttribute('type', 'text');
  passWord.setAttribute('name', 'passWord');
  passWord.setAttribute('placeholder', 'Contraseña');
  passWord.setAttribute('id', 'passWord');

  age.setAttribute('type', 'date');
  age.setAttribute('name', 'bday');
  age.setAttribute('placeholder', 'Edad');
  age.setAttribute('id', 'age');

  bntRegister.setAttribute('id', 'btnRegister');

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

  // agregar stilos al homeDiv//
  homeDiv.style.display = 'flex';
  homeDiv.style.flexDirection = 'column';
  homeDiv.style.alignItems = 'center';
  homeDiv.style.padding = '20px';

  // agregar stilos al divImg//
  divImg.style.display = 'flex';
  divImg.style.flexDirection = 'column';
  divImg.style.alignContent = 'center';

  // ancho y alto de las imagenes//
  img1.style.width = '276px';
  img1.style.height = 'auto';
  img1.style.left = '42px';
  img1.style.top = '17px';

  img2.style.width = '156px';
  img2.style.height = 'auto';
  img2.style.top = '17px';
  img2.style.left = '42px';
 

  // agregar stilos al register div //
  registerDiv.style.display = 'flex';
  registerDiv.style.flexDirection = 'column';
  registerDiv.style.alignItems = 'center';
  registerDiv.style.marginTop = '20px';

  // agregar margenes al formulario //

  namE.style.marginBottom = '10px';
  lastName.style.marginBottom = '10px';
  Email.style.marginBottom = '10px';
  passWord.style.marginBottom = '10px';
  age.style.marginBottom = '10px';
  bntRegister.style.marginBottom = '20px';

  // agregar stilos de los inputs//

  namE.style.width = '130px';
  namE.style.height = '30px';
  namE.style.left = '44px';
  namE.style.top = '394px';
  namE.style.background = '#FFFFF';
  namE.style.border = '1px solid #F40F46';
  namE.style.borderRadius = '10px';
  
  lastName.style.width = '130px';
  lastName.style.height = '30px';
  lastName.style.left = '44px';
  lastName.style.top = '394px';
  lastName.style.background = '#FFFFF';
  lastName.style.border = '1px solid #F40F46';
  lastName.style.borderRadius = '10px';

  Email.style.width = '269.97px';
  Email.style.height = '30px';
  Email.style.left = '44px';
  Email.style.top = '428.25px';
  Email.style.background = '#FFFFF';
  Email.style.border = '1px solid #F40F46';
  Email.style.borderRadius = '10px';

  passWord.style.width = '269.97px';
  passWord.style.height = '30px';
  passWord.style.left = '44px';
  passWord.style.top = '463.51';
  passWord.style.background = '#FFFFF';
  passWord.style.border = '1px solid #F40F46';
  passWord.style.borderRadius = '10px';

  age.style.width = '269.97px';
  age.style.height = '30px';
  age.style.left = '44px';
  age.style.top = '516.91px';
  age.style.background = '#FFFFF';
  age.style.border = '1px solid #F40F46';
  age.style.borderRadius = '10px';

  // agregar stilos a los botones //

  bntRegister.style.width = '160px';
  bntRegister.style.height = '40px';
  bntRegister.style.left = '860px';
  bntRegister.style.top = '798px';
  bntRegister.style.background = '#F40F46';
  bntRegister.style.border = '1px solid #FF7563';
  bntRegister.style.borderRadius = '10px';  

  // agregar los divs al padre //
  homeDiv.appendChild(divImg);
  homeDiv.appendChild(registerDiv);
  homeDiv.appendChild(bntRegister);

  return homeDiv;
};
