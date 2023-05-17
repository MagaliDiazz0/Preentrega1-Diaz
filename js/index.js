const totalCuotas  = 6


function mostrarCuotas (){
    console.log ("TODAS NUESTRAS PRENDAS TIENEN 👇")
    for(let i = 0; i < totalCuotas; i++) {
        console.log((i+1) +  "cuotas sin interés.")
    
}
}

function mostrarPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            alert("Hoodies basicas $2600")
            break;
        case 2:
            alert("Hoddies estampadas $3200")
            break;
        default:
             alert("Ingresa un numero de prenda válido.")
            break;
    }
}

function consultarPrendas() {
    let respuesta = confirm("¿Deseas conocer el precio de alguna prenda?")
    if (respuesta) {
        let codigo = prompt("Ingresa el código numérico de la prenda a consultar:")
            if (codigo) {
                mostrarPrecio(codigo)
                mostrarCuotas()
            }
    } else {
        console.warn("No hay problema. Te esperamos en otro momento.")
    }
}


let envioMontevideo = 100
let envioInterior = 200

function consultar$Envio (){
    let zona = prompt("¿Vives en zona Montevideo o Interior?")
    if (zona === "Montevideo") {
        console.log("El costo de envío dentro de Montevideo es de" + envioMontevideo)
    } else if (zona === "Interior") {
        console.log("El costo de envío al interior es de" + envioInterior)
    } else {
        console.log("Vuelve a ingresar")
    }
}