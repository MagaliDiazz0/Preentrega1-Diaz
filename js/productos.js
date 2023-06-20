const prendas = [
    { id: 1, imagen:"Imagenes/Clasicas/azul.jpg", nombre: "Hoodie Clásica Azul", precio: 2600, categoria: "Clásicas" },
    { id: 2, imagen: "Imagenes/Clasicas/beige.jpg", nombre: "Hoodie Clásica Beige", precio: 2600, categoria: "Clásicas" },
    { id: 3, imagen: "Imagenes/Clasicas/blanca.jpg", nombre: "Hoodie Clásica Blanca", precio: 2600, categoria: "Clásicas" },
    { id: 4, imagen: "Imagenes/Clasicas/celeste.jpg", nombre: "Hoodie Clásica Celeste", precio: 2600, categoria: "Clásicas" },
    { id: 5, imagen: "Imagenes/Clasicas/gris.jpg", nombre: "Hoodie Clásica Gris", precio: 2600, categoria: "Clásicas" },
    { id: 6, imagen: "Imagenes/Clasicas/negra.jpg", nombre: "Hoodie Clásica Negra", precio: 2600, categoria: "Clásicas" },
    { id: 7, imagen: "Imagenes/Clasicas/roja.jpg", nombre: "Hoodie Clásica Roja", precio: 2600, categoria: "Clásicas" },
    { id: 8, imagen: "Imagenes/Clasicas/rosa.jpg", nombre: "Hoodie Clásica Rosa", precio: 2600, categoria: "Clásicas" },
    { id: 9, imagen: "Imagenes/Clasicas/verde.jpg", nombre: "Hoodie Clásica Verde", precio: 2600, categoria: "Clásicas" },
    { id: 10, imagen: "Imagenes/con Diseño/brake head.jpg", nombre: "Hoodie con Diseño Brake Head", precio: 3200, categoria: "con Diseño" },
    { id: 11, imagen: "Imagenes/con Diseño/emoji 🫠.jpg", nombre: "Hoodie con Diseño Emoji 🫠", precio: 3200, categoria: "con Diseño" },
    { id: 12, imagen: "Imagenes/con Diseño/flamenco.jpg", nombre: "Hoodie con Diseño Flamenco", precio: 3200, categoria: "con Diseño" },
    { id: 13, imagen: "Imagenes/con Diseño/humo.jpg", nombre: "Hoodie con Diseño Humo", precio: 3200, categoria: "con Diseño" },
    { id: 14, imagen: "Imagenes/con Diseño/pink head.jpg", nombre: "Hoodie con Diseño Pink Head", precio: 3200, categoria: "con Diseño" },
    { id: 15, imagen: "Imagenes/con Diseño/ted.jpg", nombre: "Hoodie con Diseño Ted", precio: 3200, categoria: "con Diseño" },
    { id: 16, imagen: "Imagenes/con Diseño/tedy panda.jpg", nombre: "Hoodie con Diseño Tedy Panda", precio: 3200, categoria: "con Diseño" },
]

const guardarEnLocalStorage = ()=> {
    if (favoritos.length > 0) {
        localStorage.setItem('Favoritos', JSON.stringify(favoritos))
    }
}

const recuperarFavsDeLocalStorage = ()=> {
    if (localStorage.getItem('Favoritos')) {
        return JSON.parse(localStorage.getItem('Favoritos'))
    } else {
        return []
    }
}

const favoritos = recuperarFavsDeLocalStorage()

const mostrarMensajes = (msg, bgcolor)=> {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}