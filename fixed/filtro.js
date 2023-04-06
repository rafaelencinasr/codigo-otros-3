console.log("testabr");

// Tenemos un li de productos
//Arreglo con diferentes productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./Assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./Assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./Assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./Assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./Assets/zapato-rojo.jpg"}
]
//Se obtiene la ubicacion para la insercion
const li = document.getElementById("lista-de-productos")
const input = document.querySelector('input');

//Con un for se recorre todo el arreglo
for (let i = 0; i < productos.length; i++) {
//Se crea un div donde se agrega una clase "producto"
  let div = document.createElement("div")
  div.classList.add("producto")
//Se crea un elemento h2 para agregar el titulo nombre del producto, con una clase "titulo"
  let ti = document.createElement("h2")
  ti.classList.add("titulo")
  //Se agrega como texto el nombre del producto
  ti.textContent = productos[i].nombre
  
  //Se crea un elemento del tipo img para mostrar la imagen del producto
  let imagen = document.createElement("img");
  //Se define el source de la imagen
  imagen.setAttribute('src', productos[i].img);

  //Se le agregan los elementos del titulo e imagen al div antes de que este ultimo sea agregado al DOM
  div.appendChild(ti)
  div.appendChild(imagen)
  //Se agrega el div completo en la ubicaciond e la lista de productos
  li.appendChild(div)
}

//displayProductos(productos)
//Se trae la ubicacion del boton Filtro
const botonDeFiltro = document.querySelector("#botonDeFiltro");

//Se agrega un event listener de click al boton de filtro
botonDeFiltro.addEventListener("click",()=> {
  //Este while elimina los productos del DOM para preparar el espacio 
  //y solo mostrar los productos que cumplen con el filtro
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  
  //Se obtiene el texto del input
  let texto = input.value;

  //Se crea un arreglo con los elementos filtrados de "productos" que coinciden con "texto"
  let productosFiltrados = filtrado(productos, texto );

  //Se muestran los elementos que si cumplen con el filtro, usando el mismo metodo de creacion
  //de elementos en el DOM
  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}) 

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  