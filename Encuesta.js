let autoinc = 1;

function calcularPromedio() {
    const numPreguntas = 10; // Cambia esto al número real de preguntas (ejemplo: 10)
    let total = 0;
    let respuestasValidas = 0;
    let respuestas = [];

    for (let i = 1; i <= numPreguntas; i++) {
        const respuesta = parseInt(document.getElementById('q' + i).value);
        if (respuesta > 0) { // Solo cuenta respuestas válidas
            total += respuesta;
            respuestasValidas++;
            respuestas.push(respuesta);
        } else {
            console.warn(`Pregunta ${i} sin respuesta válida.`);
            respuestasValidas++;
            respuestas.push(0); // Agrega 0 si la respuesta no es válida
        }
    }

    if (respuestasValidas === numPreguntas) {
        const promedio = total / respuestasValidas;
        const porcentaje = (promedio / 10) * 100;
        document.getElementById('result').innerText = `Promedio: ${promedio.toFixed(2)} - Puntaje: ${porcentaje.toFixed(2)}%`;

        // Genera un ID de encuesta único autoincremental
        const idEncuesta = 'E' + autoinc;
        autoinc++; // Incrementa el valor para la próxima encuesta
        
        // Guarda los resultados en localStorage con el ID de encuesta
        const resultados = {
            idEncuesta: idEncuesta,
            respuestas: respuestas,
            promedio: promedio.toFixed(2),
            porcentaje: porcentaje.toFixed(2)
        };
        localStorage.setItem('resultadosEncuesta_' + idEncuesta, JSON.stringify(resultados));
        localStorage.setItem('encuestaRealizada', true); // Guarda el estado de encuesta realizada
        alert(`Resultados guardados exitosamente en el navegador con ID ${idEncuesta}.`);

        // Redirige a la página `pruebaDeMapeado.html`
        window.location.href = "PantallaPrincipalPaciente.html";
    } else {
        document.getElementById('result').innerText = 'Por favor, responde todas las preguntas.';
    }
}

// Función para mostrar los resultados guardados
function mostrarResultadosGuardados() {
    const resultadosGuardados = localStorage.getItem('resultadosEncuesta_E' + (autoinc - 1));
    if (resultadosGuardados) {
        const resultados = JSON.parse(resultadosGuardados);
        alert(`Respuestas: ${resultados.respuestas.join(', ')}\nPromedio: ${resultados.promedio}\nPorcentaje: ${resultados.porcentaje}%`);
    } else {
        alert("No hay resultados guardados.");
    }
}

// Función para limpiar los resultados guardados
function limpiarResultadosGuardados() {
    localStorage.clear(); // Elimina todos los elementos de localStorage
    alert("Resultados eliminados del almacenamiento local.");
}

// Bloqueo del botón si la encuesta ya ha sido realizada
document.addEventListener("DOMContentLoaded", function() {
    const encuestaRealizada = localStorage.getItem('resultadosEncuesta_E' + (autoinc - 1) ) != null;
    const realizarEncuestaBtn = document.getElementById("RealizarEncuesta");

    if (encuestaRealizada) {
        realizarEncuestaBtn.disabled = true;
    } else {
        realizarEncuestaBtn.disabled = false;
    }
});