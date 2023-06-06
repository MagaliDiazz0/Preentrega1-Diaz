class Compra {
     constructor(carritoDeCompras) {
         this.carrito = carritoDeCompras
     }
     totalPedido() {
         if (this.carrito.length > 0) { 
             return this.carrito.reduce((acc, hoodie)=> acc + hoodie.precio, 0)
         }
     }
 }