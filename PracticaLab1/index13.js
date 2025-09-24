//14. Proporcione un ejemplo para convertir una promesa en un callback.

function promesaEjemplo() {
    return new Promise(resolve => {
        setTimeout(() => resolve("¡Promesa resuelta!"), 2000);
    });
}

// Convertir la promesa en un callback
function promesaComoCallback(callback) {
    promesaEjemplo().then(resultado => {
        callback(resultado);
    });
}

promesaComoCallback((mensaje) => {
    console.log("Callback:", mensaje); 
});