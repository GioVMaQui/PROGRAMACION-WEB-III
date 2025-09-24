//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos. 
function mensajeExito() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("¡Éxito! La promesa se cumplió después de 3 segundos.");
        }, 3000);
    });
}

mensajeExito().then(msg => console.log(msg));
