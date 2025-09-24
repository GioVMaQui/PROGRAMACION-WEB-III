//3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares: 
//let obj = miFuncion([1,2,3,4,5]) 
//console.log(obj) // { pares: [2,4], impares: [1,3,5]} 

function miFuncion(arr) {
    const resultado = { pares: [], impares: [] };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultado.pares.push(arr[i]);
        } else {
            resultado.impares.push(arr[i]);
        }
    }
    return resultado;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj); // { pares: [2,4], impares: [1,3,5] }
