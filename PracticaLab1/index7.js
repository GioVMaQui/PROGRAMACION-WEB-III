//7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros elementos de un arreglo, mediante desestructuración, Callback y Promesas en JS 

const arreglo = [1, 2, 3, 4, 5, 6];

// Desestructuración
const [ , , ...resto] = arreglo;
console.log("Desestructuración:", resto); // [3, 4, 5, 6]

// Callback
function obtenerResto(arr, callback) {
    const [, , ...rest] = arr;
    callback(rest);
}
obtenerResto(arreglo, (res) => {
    console.log("Callback:", res); // [3, 4, 5, 6]
});

// Promesa
function obtenerRestoPromesa(arr) {
    return new Promise((resolve) => {
        const [, , ...rest] = arr;
        resolve(rest);
    });
}
obtenerRestoPromesa(arreglo)
    .then(res => console.log("Promesa:", res)); // [3, 4, 5, 6]
    