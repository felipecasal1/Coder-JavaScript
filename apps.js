



  let nombreUsuario;
  let contrasenia;
  let edad;
  function registroCorrecto(){
      alert("Se introducio un dato correcto... Gracias!!")    
  };
   nombreUsuario = prompt("Ingrese nombre de usuario");
  if (nombreUsuario != '') {
      registroCorrecto()    
  } else {
      nombreUsuario = prompt("Por favor ingresar un nombre de usuario...")    
  };
 localStorage.setItem("Nombre",nombreUsuario);
  contrasenia = prompt("Ingrese la contraseña");
  if (contrasenia != '') {
      console.log("verificando logeo");    
      registroCorrecto()
  } else {
      contrasenia = prompt("Por favor ingresa una contrasena")    
  };
  localStorage.setItem("contraseña",contrasenia)
  edad = prompt("Por favot ingrese su edad ");
  if (edad != Number) {
      registroCorrecto()    
  } else {
      edad= prompt("Por favor ingrese un caracter")
   };
   localStorage.setItem("edad",edad)


const bicicletas = [
    { nombre: "Bicicleta DownHill", marca: "Venzo", precio: 500 },
    { nombre: "Bicicleta Mountainbike", marca: "Top Mega", precio: 750 },
    { nombre: "Bicicleta CrossCountry", marca: "Trinx", precio: 600 },
    { nombre: "Bicicleta Cerro Arriba", marca: "trek", precio: 800 },
    { nombre: "Bicicleta BMX", marca: "Sunn", precio: 300 },
]

let carrito = document.getElementById("carrito");




let boton1 = document.getElementById("boton-1");




 boton1.onclick = () => {
    let bicicleta1 = `
                <tr>
            <td>${bicicletas[0].nombre}</td>
            <td>${bicicletas[0].precio}</td>
            <td>${bicicletas[0].marca}</td>
          </tr>
                `
    carrito.innerHTML += bicicleta1
};





let boton2 = document.getElementById("boton-2");

boton2.onclick = () =>{
    let bicicleta2 = `
    <tr>
            <td>${bicicletas[1].nombre}</td>
            <td>${bicicletas[1].precio}</td>
            <td>${bicicletas[1].marca}</td>
          </tr>
          `
          carrito.innerHTML += bicicleta2
};






let boton3 = document.getElementById("boton-3");

boton3.onclick = () =>{
    let bicicleta3 = `
    <tr>
            <td>${bicicletas[2].nombre}</td>
            <td>${bicicletas[2].precio}</td>
            <td>${bicicletas[2].marca}</td>
          </tr>
          `
          carrito.innerHTML += bicicleta3
};

let boton4 = document.getElementById("boton-4")

boton4.onclick = () =>{
    let bicicleta4 = `
    <tr>
    <td>${bicicletas[3].nombre}</td>
    <td>${bicicletas[3].precio}</td>
    <td>${bicicletas[3].marca}</td>
  </tr>
    `
    carrito.innerHTML += bicicleta4
};



let boton5 = document.getElementById("boton-5")

boton5.onclick = () =>{
    let bicicleta5 = `
    <tr>
    <td>${bicicletas[4].nombre}</td>
    <td>${bicicletas[4].precio}</td>
    <td>${bicicletas[4].marca}</td>
  </tr>
    `
    carrito.innerHTML += bicicleta5
}

let tituloCarrito = document.getElementById("Carrito-h2")

let titulocarrito =`
Carrito de Compra de ${localStorage.getItem(JSONparse("nombre"))}
`
tituloCarrito.innerHTML += tituloCarrito