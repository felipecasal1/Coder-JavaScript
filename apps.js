
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
// const bicicletas =[
// {nombre: "Bicicleta DownHill" ,marca:"Venzo" ,precio: 500 ,n:0 },
// {nombre: "Bicicleta Mountainbike" ,marca:"Top Mega" ,precio: 750 ,n:1},
// {nombre: "Bicicleta CrossCountry" ,marca:"Trinx" ,precio: 600 ,n:2},
// ]


let carrito = document.getElementById("carrito")

let botonBorrar = document.getElementById("borrar")
let boton = document.querySelector("#miBoton");


boton.onclick = () => {
    let opcion = prompt("ingrese el N de producto")
    switch (opcion) {
        case "0":
            let bicicleta1 = `
            <td>Bicicleta Mountainbike</td>
        <td>Marca Top Mega</td>
        <td>$750.00</td>
        `
            carrito.innerHTML += bicicleta1

break;
        case "1":
            let bicicleta2 = `
            <td>Bicicleta Mountainbike</td>
            <td>Marca Top Mega</td>
            <td>$750.00</td>`
            carrito.innerHTML += bicicleta2
            break;
        case "2":
            let bicicleta3 = `
             <td>Bicicleta CrossCountry</td>
            <td>Marca Trinx</td>
            <td>$600.00</td>`
            carrito.innerHTML += bicicleta3
            break;
        case "3":
            let bicicleta4 = `
            <td>Bicicleta CerroArriba</td>
        <td>Marca Raleigh</td>
        <td>$900.00</td>`
            carrito.innerHTML += bicicleta4
            break;
        case "4":
            let bicicleta5 = `    
                            <td>Bicicleta BMX</td>
                <td>Marca Olmo</td>
                <td>$400.00</td>
                
                `
                carrito.innerHTML += bicicleta5
    }




    alert("Agregaste un elemento al carrito")
}

botonBorrar.onclick = () => {
    elemento = `
    <td></td>
                <td></td>
                <td></td>
                
    `


    carrito.innerHTML -= elemento
    alert("Borraste el carrito")
}