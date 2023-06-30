var productos = ["Producto 1", "Producto 2", "Producto 3", "Producto 4", "Producto 5"];

// Obtener referencias a los elementos por su ID
var inputProducto = document.getElementById("inputProducto");
var agregarBtn = document.getElementById("agregarBtn");
var listaProductos = document.getElementById("listaProductos");

// Agregar el event listener al botón para el evento de clic (click)
agregarBtn.addEventListener("click")
var inputProducto = document.getElementById("inputProducto");
var agregarBtn = document.getElementById("agregarBtn");
var listaProductos = document.getElementById("listaProductos");

// Agregar el event listener al botón para el evento de clic (click)
agregarBtn.addEventListener("click", function() {
  // Obtener el número de producto ingresado por el usuario
  var numeroProducto = parseInt(inputProducto.value);

  // Verificar si el número de producto es válido
  if (!isNaN(numeroProducto) && numeroProducto >= 1 && numeroProducto <= productos.length) {
    // Obtener el producto correspondiente al número ingresado
    var producto = productos[numeroProducto - 1];

    // Crear un nuevo elemento de lista y agregar el producto como su contenido
    var nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = producto;

    // Agregar el nuevo elemento de lista a la lista de productos
    listaProductos.appendChild(nuevoElementoLista);

    // Limpiar el campo de entrada
    inputProducto.value = "";
  } else {
    alert("Ingrese un numero)
 }


// Array de productos
var productos = ["Producto 1", "Producto 2", "Producto 3", "Producto 4", "Producto 5"];

// Obtener referencias a los elementos por su ID
var inputProducto = document.getElementById("inputProducto");
var agregarBtn = document.getElementById("agregarBtn");
var listaProductos = document.getElementById("listaProductos");

// Agregar el event listener al botón para el evento de clic (click)
agregarBtn.addEventListener("click", function() {
  // Obtener el número de producto ingresado por el usuario
  var numeroProducto = parseInt(inputProducto.value);

  // Verificar si el número de producto es válido
  if (!isNaN(numeroProducto) && numeroProducto >= 1 && numeroProducto <= productos.length) {
    // Obtener el producto correspondiente al número ingresado
    var producto = productos[numeroProducto - 1];

    // Crear un nuevo elemento de lista y agregar el producto como su contenido
    var nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = producto;

    // Agregar el nuevo elemento de lista a la lista de productos
    listaProductos.appendChild(nuevoElementoLista);

    // Limpiar el campo de entrada
    inputProducto.value = "";
  } else {
    alert("Ingrese un número de producto válido.");
  }
});