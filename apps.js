
// let nombreUsuario;
// let contrasenia;
// let edad;
// function registroCorrecto(){
//     alert("Se introducio un dato correcto... Gracias!!")
// }
// nombreUsuario = prompt("Ingrese nombre de usuario");
// if (nombreUsuario != '') {
//     registroCorrecto()
// } else {
//     nombreUsuario = prompt("Por favor ingresar un nombre de usuario...");
// }
// contrasenia = prompt("Ingrese la contraseña");
// if (contrasenia != '') {
//     console.log("verificando logeo");
//     registroCorrecto()
// } else {
//     contrasenia = prompt("Por favor ingresa una contrasena");
// }
// edad = prompt("Por favot ingrese su edad ")
// if (edad != Number) {
//     registroCorrecto()
// } else {
//     edad= prompt("Por favor ingrese un caracter")

//  }
let bicicleta1 = ("Bicicleta Mountainbike", "Top Mega", 750)
let bicicleta2 =  ("Bicicleta CerroArriba", "Raleigh", 900)
let bicicleta3 = ("Bicicleta BMX", "Olmo", 400)
let bicicleta4 =  ("Bicicleta DownHill", "Venzo", 500)

let carrito = document.getElementById("carrito")

let botonBorrar = document.getElementById("borrar")
let boton = document.querySelector("#miBoton");

boton.onclick = () =>{
     const elemento = `
     <td>Bicicleta BMX</td>
     <td>Marca  Olmo</td>
     <td>$400.00</td>
     <td>4</td>
    `
    carrito.innerHTML += elemento
    alert("Agregaste un elemento al carrito")}

    botonBorrar.onclick = () =>{
        const elemento = `
        <td>Bicicleta BMX</td>
        <td>Marca  Olmo</td>
        <td>$400.00</td>
        <td>4</td>
       `
       carrito.innerHTML -= elemento
       alert("Agregaste un elemento al carrito")}