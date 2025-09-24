//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible. 

// Ejemplo con anidamiento de callbacks (callback )
function paso1(callback) {
    setTimeout(() => {
        callback("Paso 1 completado");
    }, 1000);
}
function paso2(mensaje, callback) {
    setTimeout(() => {
        callback(mensaje + " → Paso 2 completado");
    }, 2000);
}
function paso3(mensaje, callback) {
    setTimeout(() => {
        callback(mensaje + " → Paso 3 completado");
    }, 3000);
}
// Callback 
paso1(res1 => {
    paso2(res1, res2 => {
        paso3(res2, res3 => {
            console.log("Callback :", res3);
        });
    });
});
// Reescrito con async/await
function paso1Promesa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 1 completado"), 4000);
    });
}
function paso2Promesa(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Paso 2 completado"), 5000);
    });
}
function paso3Promesa(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Paso 3 completado"), 6000);
    });
}
async function ejecutarPasos() {
    const res1 = await paso1Promesa();
    const res2 = await paso2Promesa(res1);
    const res3 = await paso3Promesa(res2);
    console.log("Async/Await:", res3);
}
ejecutarPasos();