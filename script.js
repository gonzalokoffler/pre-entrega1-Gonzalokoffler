// Obtener elementos del DOM
const listaProductos = document.getElementById('lista-productos');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');

// Inicializar el carrito como un array vacío
const carrito = [];

// Agregar un evento click a los productos para agregarlos al carrito
listaProductos.addEventListener('click', agregarAlCarrito);

function agregarAlCarrito(event) {
    if (event.target.tagName === 'LI') {
        const productoSeleccionado = event.target;
        const nombre = productoSeleccionado.getAttribute('data-nombre');
        const precio = parseInt(productoSeleccionado.getAttribute('data-precio'));

        // Crear un objeto producto
        const producto = {
            nombre,
            precio
        };

        // Agregar el producto al carrito
        carrito.push(producto);

        // Actualizar la lista de productos en el carrito
        actualizarCarrito();
    }
}

// Actualizar el carrito
function actualizarCarrito() {
    // Limpiar la lista de carrito
    listaCarrito.innerHTML = '';

    // Calcular el total
    let totalCompra = 0;

    // Recorrer el carrito y mostrar los productos
    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(itemCarrito);

        totalCompra += producto.precio;
    });

    // Actualizar el total
    total.textContent = totalCompra;
}
