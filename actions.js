// Variables principales

let clicks = 0;

// Obtener elementos del HTML

const contadorElemento = document.getElementById("contador");
const tituloEvento = document.getElementById("tituloEvento");
const campoTitulo = document.getElementById("nuevoTitulo");

const botonIncrementar = document.getElementById("botonIncrementar");
const botonReiniciar = document.getElementById("botonReiniciar");


// Función para incrementar el contador

function incrementarContador() {
    clicks++;

    // Actualizar el número
    contadorElemento.textContent = clicks;

    // Activar animación
    contadorElemento.classList.remove("animacion");

    void contadorElemento.offsetWidth;

    contadorElemento.classList.add("animacion");
}


// Función para reiniciar el contador a cero

function reiniciarContador() {
    clicks = 0;

    // Actualizar el número
    contadorElemento.textContent = clicks;

    // Eliminar animación
    contadorElemento.classList.remove("animacion");
}


// Función para cambiar el título en tiempo real

function actualizarTitulo() {
    const nuevoTitulo = campoTitulo.value;

    if (nuevoTitulo.trim() === "") {
        tituloEvento.textContent = "Contador de Clicks para Eventos";
    } else {
        tituloEvento.textContent = nuevoTitulo;
    }
}


// Eventos de los botones

botonIncrementar.addEventListener("click", incrementarContador);

botonReiniciar.addEventListener("click", reiniciarContador);


// Actualizar el título mientras el usuario escribe

campoTitulo.addEventListener("input", actualizarTitulo);