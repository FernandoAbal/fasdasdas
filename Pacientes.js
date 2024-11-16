// Variable para almacenar el valor del Legajo

let DNI = " ";
let ClaveAutogenerada = " "; 

function handleDNI(event) {
    DNI = event.target.value; // Actualiza la variable con el valor del input
    console.log("DNI actualizado: ", DNI); // Verifica el valor en la consola
}
function handleClaveAutogenerada(event) {
    ClaveAutogenerada = event.target.value; // Actualiza la variable con el valor del input
    console.log("Clave Generada esta Actualizada: ", ClaveAutogenerada); // Verifica el valor en la consola
}


document.getElementById('dniInput').addEventListener('input',  handleDNI);
document.getElementById('claveAutoInput').addEventListener('input', handleClaveAutogenerada);


// Ejemplo de datos con los que contrastar el Legajo ingresado

const datosDNI = ["135", "23145234", "28235654"]; 
const datosClaveAutogeneradas =["Man13"];

function ingresoPacientes() {
    if (datosDNI.includes(DNI) && datosClaveAutogeneradas.includes(ClaveAutogenerada) ) {
        window.location.href = "PantallaPrincipalPaciente.html"; 
    } else {
        document.getElementById('resultado_ClaveAuto').innerText = "Usuario no Válido";
    }
}

document.getElementById('ingresoPacientes').addEventListener('click', ingresoPacientes);
