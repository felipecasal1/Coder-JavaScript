const bicicletas =[
    {nombre: "Bicicleta DownHill" ,marca:"Venzo" ,precio: 500 ,n:0 },
    {nombre: "Bicicleta Mountainbike" ,marca:"Top Mega" ,precio: 750 ,n:1},
    {nombre: "Bicicleta CrossCountry" ,marca:"Trinx" ,precio: 600 ,n:2},
    ]
let carrito =[]    

let seleccion =prompt("desea comprar algun producto si/no")
 
while(seleccion != "si" && seleccion != "no" ){
    alert("porfavor seleccione si/no")
    seleccion = prompt("desea comprar algo si/no")
}
