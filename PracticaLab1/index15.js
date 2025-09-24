//16. Proporcione un ejemplo para migrar una función con promesas a async/await

// Función con promesas
function obtenerMensaje() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Mensaje recibido"), 1000);
    });
}

obtenerMensaje().then(msg => console.log("Promesa:", msg));

// Migrado a async/await
async function mostrarMensaje() {
    const msg = await obtenerMensaje();
    console.log("Async/Await:", msg);
}

mostrarMensaje();