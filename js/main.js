const carrito = []
const hoodies = [{codigo: 1, nombre: 'Hoodie basica azul', precio: 2600},
                 {codigo: 2, nombre: 'Hoodie basica beige', precio: 2600},
                 {codigo: 3, nombre: 'Hoodie basica blanca', precio: 2600},
                 {codigo: 4, nombre: 'Hoodie basica celeste', precio: 2600},
                 {codigo: 5, nombre: 'Hoodie basica gris', precio: 2600},
                 {codigo: 6, nombre: 'Hoodie basica negra', precio: 2600},
                 {codigo: 7, nombre: 'Hoodie basica roja', precio: 2600},
                 {codigo: 8, nombre: 'Hoodie basica rosa', precio: 2600},
                 {codigo: 9, nombre: 'Hoodie basica verde', precio: 2600},
                 {codigo: 10, nombre: 'Hoodie heart ', precio: 3200},
                {codigo: 11, nombre: "Hoodie emoji🫠", precio: 3200},
                {codigo: 12, nombre: "Hoodie flamenco", precio: 3200},
                {codigo: 13, nombre: "Hoodie humo", precio: 3200},
                {codigo: 14, nombre: "Hoodie heart rosa", precio: 3200},
                {codigo: 15, nombre: "Hoodie ted", precio: 3200},
                {codigo: 16, nombre: "Hoodie tedy panda", precio: 3200}]

function buscarPrendas(codigo) {
        let resultado = hoodies.find((hoodie)=> hoodie.codigo === parseInt(codigo) )
        return resultado 
}

function finalizarCompra() {
    const pedido = new Compra(carrito)
    alert ('El costo total de tu pedido es $ ' + pedido.totalPedido() + '. Muchas gracias por tu compra!')
}


function comprar() {
    let codigo = prompt("Ingresa el código de la Hoodie que deseas. (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)")
    let hoodieElegida = buscarPrendas(codigo)
    if (hoodieElegida !== undefined) {
        carrito.push(hoodieElegida)
        alert("🧥" + hoodieElegida.nombre + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta === true) {
            comprar()
        } else {
            finalizarCompra()
        }
    } else {
        alert("⛔️ Error en el código ingresado. Refresca, para comenzar de nuevo.")
    }
}
comprar()