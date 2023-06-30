


 let nombreUsuario;
 let contrasenia;
 let edad;
 function registroCorrecto(){
     alert("Se introducio un dato correcto... Gracias!!")
 }

 nombreUsuario = prompt("Ingrese nombre de usuario");
 if (nombreUsuario != '') {
     registroCorrecto()
 } else {
     nombreUsuario = prompt("Por favor ingresar un nombre de usuario...");
 }

 contrasenia = prompt("Ingrese la contraseña");
 if (contrasenia != '') {
     console.log("verificando logeo");
     registroCorrecto()
 } else {
     contrasenia = prompt("Por favor ingresa una contrasena");
 }
 
 edad = prompt("Por favot ingrese su edad ")
 if (edad != Number) {
     registroCorrecto()
 } else {
     edad= prompt("Por favor ingrese un caracter")
 };



let bicicletas = [ 
    ("Bicicleta Mountainbike", "Top Mega", 750)
    ("Bicicleta CerroArriba", "Raleigh", 900)
    ("Bicicleta BMX", "Olmo", 400)
    ("Bicicleta DownHill", "Venzo", 500)
];





