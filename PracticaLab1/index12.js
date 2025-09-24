//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible. 

// Ejemplo con encadenamiento de promesas
function paso1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 1 completado"), 1000);
    });
}
function paso2(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Paso 2 completado"), 2000);
    });
}
function paso3(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Paso 3 completado"), 3000);
    });
}

// Encadenamiento tradicional
paso1()
    .then(res1 => paso2(res1))
    .then(res2 => paso3(res2))
    .then(res3 => console.log("Promesas:", res3));

// Reescrito con async/await
async function ejecutarPasos() {
    const res1 = await paso1();
    const res2 = await paso2(res1);
    const res3 = await paso3(res2);
    console.log("Async/Await:", res3);
}

ejecutarPasos();
