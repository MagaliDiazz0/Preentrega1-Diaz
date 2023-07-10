const carrito = []

const prendas = [
    { id: 1, imagen:"Imagenes/Clasicas/azul.jpg", nombre: "Hoodie Clasica Azul", precio: 2600, categoria: "Clásicas"},
    { id: 2, imagen: "Imagenes/Clasicas/beige.jpg", nombre: "Hoodie Clasica Beige", precio: 2600, categoria: "Clásicas"},
    { id: 3, imagen: "Imagenes/Clasicas/blanca.jpg", nombre: "Hoodie Clasica Blanca", precio: 2600, categoria: "Clásicas"},
    { id: 4, imagen: "Imagenes/Clasicas/celeste.jpg", nombre: "Hoodie Clasica Celeste", precio: 2600, categoria: "Clásicas"},
    { id: 5, imagen: "Imagenes/Clasicas/gris.jpg", nombre: "Hoodie Clasica Gris", precio: 2600, categoria: "Clásicas"},
    { id: 6, imagen: "Imagenes/Clasicas/negra.jpg", nombre: "Hoodie Clasica Negra", precio: 2600, categoria: "Clásicas"},
    { id: 7, imagen: "Imagenes/Clasicas/roja.jpg", nombre: "Hoodie Clasica Roja", precio: 2600, categoria: "Clásicas"},
    { id: 8, imagen: "Imagenes/Clasicas/rosa.jpg", nombre: "Hoodie Clasica Rosa", precio: 2600, categoria: "Clásicas"},
    { id: 9, imagen: "Imagenes/Clasicas/verde.jpg", nombre: "Hoodie Clasica Verde", precio: 2600, categoria: "Clásicas"},
    { id: 10, imagen: "Imagenes/con Diseño/brake head.jpg", nombre: "Hoodie con Diseño Brake Head", precio: 3200, categoria: "con Diseño"},
    { id: 11, imagen: "Imagenes/con Diseño/emoji 🫠.jpg", nombre: "Hoodie con Diseño Emoji 🫠", precio: 3200, categoria: "con Diseño"},
    { id: 12, imagen: "Imagenes/con Diseño/flamenco.jpg", nombre: "Hoodie con Diseño Flamenco", precio: 3200, categoria: "con Diseño"},
    { id: 13, imagen: "Imagenes/con Diseño/humo.jpg", nombre: "Hoodie con Diseño Humo", precio: 3200, categoria: "con Diseño"},
    { id: 14, imagen: "Imagenes/con Diseño/pink head.jpg", nombre: "Hoodie con Diseño Pink Head", precio: 3200, categoria: "con Diseño"},
    { id: 15, imagen: "Imagenes/con Diseño/ted.jpg", nombre: "Hoodie con Diseño Ted", precio: 3200, categoria: "con Diseño"},
    { id: 16, imagen: "Imagenes/con Diseño/tedy panda.jpg", nombre: "Hoodie con Diseño Tedy Panda", precio: 3200, categoria: "con Diseño"},
]

const guardarEnLocalStorage = () => {
  if (carrito.length > 0) {
      localStorage.setItem("Carrito", JSON.stringify(carrito))
  } else {
      localStorage.removeItem("Carrito");
  }
};

const recuperarCarritoDeLocalStorage = () => {
  if (localStorage.getItem("Carrito")) {
      return JSON.parse(localStorage.getItem("Carrito"));
  } else {
      return [];
  }
};

const mostrarMensajes = (msg, bgcolor) => {
  const divMsg = document.querySelector("div.toast-msg");
  divMsg.textContent = msg || "";
  divMsg.style.background = bgcolor || "darkslateblue;";
};

let Carrito = recuperarCarritoDeLocalStorage()
