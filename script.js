class Producto {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;

    }
    hayEnStock() {
        if(this.cantidad == 0) {
            return false;
        }
        else {
            return true;
        }
    }



}

/*const AlpineA110 = new Producto("Hot Wheels", "Renault Alpine A110", 1000)
const BatimovilTheBatman = new Producto("Hot Wheels", "Batimovil The Batman", 900)
const FerrariF40 = new Producto("Tomica", "Ferrari F40", 5000)
const Ferrari512BB = new Producto("Tomica", "Ferrari 512BB", 4500)
const ChevroletCorvette = new Producto("Jhonny Lightning", "Chevrolet Corvette 1956", 2500)*/

/*producto1.hayEnStock()
producto2.hayEnStock()
producto3.hayEnStock()
producto4.hayEnStock()
producto5.hayEnStock()*/

const arrayProductos = [];

const arrayCarrito = [];

const tituloDiv = document.getElementById("tituloDiv");

let botonAutos = document.getElementById("botonAutos");
let divAutos = document.getElementById("divAutos")
let idForm = document.getElementById("idForm")

botonAutos.addEventListener('click', () => {
    arrayProductos.forEach((auto, indice) => {
        divAutos.innerHTML += `
        <div class="card" id= "Auto ${indice}" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Modelo ${auto.modelo}</h5>
            <p class="card-text">Marca ${auto.marca}</p>
            <p class="card-text">Precio $${auto.precio}</p>
            <button class="btn btn-danger"> Eliminar </button>
            
            </div>
      </div>`
    })
    
})

const mostrarProducto = ()=> {
    let divCaja = document.createElement("div");
    divCaja.className= "caja";
    tituloDiv.appendChild(divCaja);

    carrito.forEach(element=>{
        divCaja.innerHTML += `<div class="cajita">
        <h3>NOMBRE $${element.nombre} </h3>
        <h3>PRECIO $${element.precio * element.cantidad}</h3>
        <h3>SUBTOTAl $${element.precio * element.cantidad}</h3>
        <h3>CANTIDAD $${element.cantidad}</h3>
        </div>`
    });
};


localStorage.setItem('Autos', JSON.stringify(arrayProductos))
let formAutos =document.getElementById('formAutos')

/*let autosParseados = JSON.parse(localStorage.getItem('Autos'))
console.log(autosParseados)*/

formAutos.addEventListener('submit', (e) => {
    e.preventDefault()
    let dataForm = new FormData(e.target)
    //console.log(dataForm.get('marca')) //document.getElementById('idMarca').value ----> son 2 formas de consultar la info

    const auto = new Producto(dataForm.get('marca'), dataForm.get('modelo'), dataForm.get('precio'))
    arrayProductos.push(auto)
    localStorage.setItem('Autos', JSON.stringify(arrayProductos))
    formAutos.reset()

    Toastify({
        text: "Cargaste un nuevo Producto",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})



