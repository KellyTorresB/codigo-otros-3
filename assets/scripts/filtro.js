// Tenemos un array de productos
const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/imgs/taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/imgs/taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/imgs/bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/imgs/bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/imgs/zapato-rojo.jpg" }
];

const listaProductos = document.querySelector("#lista-de-productos");//se cambia nombre de li a lista de productos
const input = document.querySelector("input");//input sustituye $i

// Función para mostrar los productos en la lista
function displayProductos(productos) {//se crea funcion para recibir el array.
    for (let i = 0; i < productos.length; i++) {
        var divProducto = document.createElement("div");//divProducto representa cada uno
        divProducto.classList.add("producto");

        var titulo = document.createElement("p");//sustituir ti por titulo 
        titulo.classList.add("titulo");
        titulo.textContent = productos[i].nombre;

        var imagen = document.createElement("img");
        imagen.setAttribute('src', productos[i].img);

        divProducto.appendChild(titulo);//Se agrupan como hijos del divProducto
        divProducto.appendChild(imagen);

        listaProductos.appendChild(divProducto);
    }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }

    const texto = input.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);

    for (let i = 0; i < productosFiltrados.length; i++) {
        var divProducto = document.createElement("div");
        divProducto.classList.add("producto");

        var titulo = document.createElement("p");
        titulo.classList.add("titulo");
        titulo.textContent = productosFiltrados[i].nombre;

        var imagen = document.createElement("img");
        imagen.setAttribute('src', productosFiltrados[i].img);

        divProducto.appendChild(titulo);
        divProducto.appendChild(imagen);

        listaProductos.appendChild(divProducto);
    }
}

function filtrado(productos = [], texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

//Se agregan ; y documentacion a lo largo del proyecto 