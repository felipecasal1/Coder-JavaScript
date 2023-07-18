


let form = document.getElementById("form")
let nombreUsuario = document.getElementById("nombre");
let contrasenia = document.getElementById("contraseña");
let edad = document.getElementById("edad");
form.addEventListener("submit", e=> {

    e.preventDefault()
    
    
    localStorage.setItem("Nombre",nombreUsuario.value);
    
    
    localStorage.setItem("contraseña",contrasenia.value);
    
    

    localStorage.setItem("edad",edad.value);
    
    
} ) 




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
            <td >${bicicletas[0].nombre}</td>
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



let boton5 = document.getElementById("boton-5");

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



let vaciarCarrito = document.getElementById("borrar");

vaciarCarrito.onclick = () =>{
    let vaciarCarrito = `
    
    <td>"</td>
    <td></td>
    <td></td>
   
    `
    carrito.innerHTML -= vaciarCarrito
}




let tituloCarrito = document.getElementById("Carrito-h2")
console.log(tituloCarrito)

form.addEventListener("submit", e=>{

    let nuevoTitulo =` 
    <H2 id="Carrito-h2">Carrito de Compras de ${nombreUsuario.value}</H2>
    `
    tituloCarrito.innerHTML += nuevoTitulo
    console.log(nuevoTitulo)
})