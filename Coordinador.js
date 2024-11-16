// Variable para almacenar el valor del Legajo
let Legajo = "";
let Clave =" ";

// Función para manejar el cambio de Legajo
function handleLegajo(event) {
    Legajo = event.target.value; // Actualiza la variable con el valor del input
    console.log("Legajo actualizado: ", Legajo); // Verifica el valor en la consola
}
function handleClave(event) {
    Clave = event.target.value; // Actualiza la variable con el valor del input
    console.log("Clave actualizada: ", Clave); // Verifica el valor en la consola
}


// Asigna la función al evento 'input'
document.getElementById('legajoInput').addEventListener('input', handleLegajo);
document.getElementById('claveInput').addEventListener('input', handleClave);



// Ejemplo de datos con los que contrastar el Legajo ingresado
const datosLegajoCoordinador = ["12345", "67890", "ABCDE"]; // Datos de ejemplo para comparar
const datosClaveCoordinador =["Man123", "Fe321", "AnaEstaEnojada","MeDaTristeza"];

// Función para comparar el valor del Legajo con los datos disponibles
function ingresoCoordinador() {
    if (datosLegajoCoordinador.includes(Legajo) && datosClaveCoordinador.includes(Clave) ) {
        window.location.href = "PantallaPrincipalCoordinador.html"; 
    } else {
        document.getElementById('resultado_Clave').innerText = "Usuario no Válido";
    }
}


// Evento para el botón de comparación
document.getElementById('ingresoCoordinador').addEventListener('click', ingresoCoordinador);

