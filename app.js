

alert("bienvenidos a la tienda de bicicletas");

let nombreUsuario;
let contrasenia;
let edad;


// Se pide nombre de usuario

nombreUsuario = prompt("Ingrese nombre de usuario");
if (nombreUsuario != '') {

} else {
    nombreUsuario = prompt("Por favor ingresar un nombre de usuario...");
    
}

// se pide contraseña


contrasenia = prompt("Ingrese la contraseña");
if (contrasenia != '') {
    console.log("verificando logeo");
} else {
    contrasenia = prompt("Por favor ingresa una contrasena");
}


// se pide edad


edad = prompt("Por favot ingrese su edad ")
if (edad != Number) {
    console.log("se completo el registro correctamente")
} else {
    edad= prompt("Por favor ingrese un caracter")
}

// se piden productos

alert("Bienvendio " + nombreUsuario + " selecciona los productor que necesites ")

let continuar = 'si';
let precio;
let cantidad;
let total = 0;


while (continuar == 'si') {

    console.log('agregando un nuevo item en el carrito de compras...');

    precio = parseFloat(prompt("Items Disponibles  \n 1: Bicicleta, Mountain bike $20,000  \n 2: Bicicleta, Downhill $17,000  \n 3: Bicicleta, Cross Country $24,000  \n Introduza el precio"))

    cantidad = parseInt(prompt('que cantidad necesita : '));
    total = total + precio * cantidad;
    continuar = prompt('Desea agregar otro item en el carrito de compras? si/no');
}
alert("El total de su carrtio es " + total)

