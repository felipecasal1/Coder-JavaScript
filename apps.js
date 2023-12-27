
let botonRegistrar = document.getElementById("botonRegistrar")
let zonaDeRegistro = document.getElementById("modalFormRegistrar")
let cerrarFormRegistro = document.getElementById("btnCerrarForm")


botonRegistrar.addEventListener("click", (e) => {
    e.preventDefault
    zonaDeRegistro.classList.add("mostrar-form")

})

cerrarFormRegistro.addEventListener("click", (e) => {
    e.preventDefault
    zonaDeRegistro.classList.remove("mostrar-form")
})


let iconoCarrito = document.getElementById("carritoBtn")
let containerCarrito = document.getElementById("containerCarrito")
let cerrarCarrito = document.getElementById("btnCerrarCarrito")

iconoCarrito.addEventListener("click", () =>{
    containerCarrito.classList.add("active")

})

cerrarCarrito.addEventListener("click", () =>{
    containerCarrito.classList.remove("active")
})



let botonSesion = document.getElementById("botonSesion")
let zonaDeSesion = document.getElementById("modalFormSesion")
let cerrarFormSesion = document.getElementById("btnCerrarFormSesion")

botonSesion.addEventListener("click", (e) => {
    e.preventDefault
    zonaDeSesion.classList.add("mostrar-form-sesion")
})

cerrarFormSesion.addEventListener("click", (e) => {
    e.preventDefault
    zonaDeSesion.classList.remove("mostrar-form-sesion")
})






const bicicletas = [
    { nombre: "Bicicleta DownHill", marca: "Venzo", precio: 500 },
    { nombre: "Bicicleta Mountainbike", marca: "Top Mega", precio: 750 },
    { nombre: "Bicicleta CrossCountry", marca: "Trinx", precio: 600 },
    { nombre: "Bicicleta Cerro Arriba", marca: "trek", precio: 800 },
    { nombre: "Bicicleta BMX", marca: "Sunn", precio: 300 },
]

let boton1 = document.getElementById("boton-1");

let carritoImpresion = []




boton1.onclick = () => {
    carritoImpresion.push(bicicletas[0])

    containerCarrito = containerCarritoNew
    carritoImpresionNew=
   `
    <tr>
    <td>${bicicletas[0]}<td>
    <tr>
    `

   
};





let boton2 = document.getElementById("boton-2");

boton2.onclick = () => {
    let bicicleta2 = `
    <tr>
            <td>${bicicletas[1].nombre}</td>
            <td>${bicicletas[1].precio}</td>
            <td>${bicicletas[1].marca}</td>
          </tr>
          `
    carrito.innerHTML += bicicleta2
    localStorage.setItem("carritoLocalSrorage" + (bicicletas[1].marca), (bicicletas[1].nombre));

};






let boton3 = document.getElementById("boton-3");

boton3.onclick = () => {
    let bicicleta3 = `
    <tr>
            <td>${bicicletas[2].nombre}</td>
            <td>${bicicletas[2].precio}</td>
            <td>${bicicletas[2].marca}</td>
          </tr>
          `
    carrito.innerHTML += bicicleta3
    localStorage.setItem("carritoLocalSrorage" + (bicicletas[2].marca), (bicicletas[2].nombre));
};

let boton4 = document.getElementById("boton-4")

boton4.onclick = () => {
    let bicicleta4 = `
    <tr>
    <td>${bicicletas[3].nombre}</td>
    <td>${bicicletas[3].precio}</td>
    <td>${bicicletas[3].marca}</td>
  </tr>
    `
    carrito.innerHTML += bicicleta4
    localStorage.setItem("carritoLocalSrorage" + (bicicletas[3].marca), (bicicletas[3].nombre));
};



let boton5 = document.getElementById("boton-5");

boton5.onclick = () => {
    let bicicleta5 = `
    <tr>
    <td>${bicicletas[4].nombre}</td>
    <td>${bicicletas[4].precio}</td>
    <td>${bicicletas[4].marca}</td>
  </tr>
    `
    carrito.innerHTML += bicicleta5
    localStorage.setItem("carritoLocalSrorage" + (bicicletas[4].marca), (bicicletas[4].nombre));
}



let vaciarCarrito = document.getElementById("borrar");

vaciarCarrito.onclick = () => {
    let vaciarCarrito = `
    
    <td>"</td>
    <td></td>
    <td></td>
   
    `
    carrito.innerHTML -= vaciarCarrito

}








const DolarBlue = document.getElementById("dolar-blue")
const DolarOficial = document.getElementById("dolar-oficial")
const DolarBolsa = document.getElementById("dolar-bolsa")

fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(response => {

        let tablaDolarBlue =
            `
            
          <div>
            Compra :${response[1].compra}
            </div>
            <div>
            Venta :${response[1].venta}</td> 
            </div>
            <div>
      Fecha Actualizacion :${response[1].fechaActualizacion}
      </div>
             `
        DolarBlue.innerHTML += tablaDolarBlue

        let tablaDolarOficial = `
            
    <div>
      Compra :${response[0].compra}
      </div>
      <div>
      Venta :${response[0].venta}</td> 
      </div>
      <div>
      Fecha Actualizacion :${response[0].fechaActualizacion}
      </div>
       `
        DolarOficial.innerHTML += tablaDolarOficial

        let tablaDolarBolsa = `
            
<div>
  Compra :${response[2].compra}
  </div>
  <div>
  Venta :${response[2].venta}</td> 
  </div>
  <div>
      Fecha Actualizacion :${response[2].fechaActualizacion}
      </div>
   `
        DolarBolsa.innerHTML += tablaDolarBolsa
    });



let btnCarrito = document.getElementById("carritoBtn")
let modalCarrito = document.getElementById("sectionCarrito")

btnCarrito.addEventListener("click", (e) => {
    e.preventDefault
    modalCarrito.classList.remove("carrito-sec")
    modalCarrito.classList.add("mostrar-carrito")
})











