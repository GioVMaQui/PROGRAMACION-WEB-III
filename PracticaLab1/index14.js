//15. Proporcione un ejemplo para convertir un callback en una promesa.

function sumaCallback(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

// Convertir el callback en una promesa
function sumaPromesa(a, b) {
    return new Promise((resolve) => {
        sumaCallback(a, b, resultado => resolve(resultado));
    });
}

sumaPromesa(3, 4).then(res => console.log("Promesa:", res));