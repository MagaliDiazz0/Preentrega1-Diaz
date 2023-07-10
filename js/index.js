const tableBody = document.querySelector('tbody');
const inputSearch = document.querySelector('input#inputSearch');
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const armarFilaHTML = (prendas) => {
  return `<tr>
              <td class="class-table-number">${prendas.id}</td>
              <td class="imgProductos"><img src="${prendas.imagen}"></td>
              <td>${prendas.nombre}</td>
              <td>$ ${prendas.precio}</td>
              <td><button id="${prendas.id}" class="button button-outline">comprar</button></td>
          </tr>`;
};

const filtrarProductos = () => {
  let arrayResultado = prendas.filter((prenda) => prenda.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()));
  if (arrayResultado.length > 0) {
      cargarProductos(arrayResultado);
  }
};
inputSearch.addEventListener('search', filtrarProductos);

const cargarProductos = (array) => {
  tableBody.innerHTML = '';
  array.forEach((prendas) => {
      tableBody.innerHTML += armarFilaHTML(prendas);
  });
  activarClickEnBotonesComprar();
};

const activarClickEnBotonesComprar = () => {
  const botonesComprar = document.querySelectorAll("button.button.button-outline");
  for (let botonComprar of botonesComprar) {
      botonComprar.addEventListener('click', () => {
          let resultadoProducto = prendas.find((prenda) => prenda.id === parseInt(botonComprar.id));
          if (resultadoProducto && resultadoProducto.nombre) {
              Carrito.push(resultadoProducto);
              guardarEnLocalStorage();
              mensajeToast(resultadoProducto.nombre)
          }
      });
  }
};

const finalizarCompra = () => {
  if (Carrito.length > 0) {
    Carrito = [];
    guardarEnLocalStorage();

    const orderNumber = generateOrderNumber();

    modalContainer.style.display = "none";

    alert(orderNumber);
  }
};

const generateOrderNumber = () => {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

  modalContainer.style.display = "none";

  const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
  
    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
  
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalButton);
  
    if (Carrito.length > 0) {
      Carrito.forEach((prendas) => {
        let CarritoContent = document.createElement("div");
        CarritoContent.className = "modal-content";
        CarritoContent.innerHTML = `
            <img src="${prendas.imagen}">
            <h3>${prendas.nombre}</h3>
            <p>$ ${prendas.precio}</p>
        `;
        modalContainer.append(CarritoContent);
  
        let eliminar = document.createElement("span");
  
        eliminar.innerText = "❌";
        eliminar.className = "eliminar-prenda";
        CarritoContent.append(eliminar);
  
        eliminar.addEventListener("click", eliminarProducto);
      });
  
      const total = Carrito.reduce((acc, prenda) => acc + prenda.precio, 0);
      const totalBullyng = document.createElement("div");
      totalBullyng.className = "total-content";
      totalBullyng.innerHTML = `Total a pagar: $ ${total}`;
      modalContainer.append(totalBullyng);
  
      const finalizarCompraButton = document.createElement("button");
      finalizarCompraButton.innerText = "Finalizar compra";
      finalizarCompraButton.className = "button button-primary";
      finalizarCompraButton.addEventListener("click", finalizarCompra);
      modalContainer.append(finalizarCompraButton);
    } else {
      const emptyCartMessage = document.createElement("p");
      emptyCartMessage.innerText = "No hay productos en el carrito";
      modalContainer.append(emptyCartMessage);
    }
  };
  
  verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (event) => {
  let eliminar = event.target;
  let CarritoContent = eliminar.parentNode;
  let producto = CarritoContent.querySelector("h3").innerText;

  Carrito = Carrito.filter((prenda) => prenda.nombre !== producto);
  CarritoContent.remove();

  const total = Carrito.reduce((acc, prenda) => acc + prenda.precio, 0);
  const totalBullyng = document.querySelector(".total-content");
  totalBullyng.innerHTML = `Total a pagar: ${total} $`;
};

function mensajeToast(prendas) {
  Toastify ({
    text: `${prendas} se agregó al carrito`,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "darkorange",
      color: "white",
    }
  }).showToast ();
}

function alert(orderNumber) {
  Swal.fire({
    title: 'Gracias por tu compra',
    text: `Tu N° de orden es: ${orderNumber} envía este N° al cel: 099101010 para continuar`,
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
      confirmButton: 'my-custom-confirm-button-class',
      popup: 'my-custom-popup-class'
    },
  })
}
cargarProductos(prendas);