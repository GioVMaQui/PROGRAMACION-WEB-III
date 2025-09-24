//4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto. 
//let obj = miFuncion([3,1,5,4,2]) 
//console.log(obj) // { mayor: 5, menor: 1 }

function mayorMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) mayor = arr[i];
        if (arr[i] < menor) menor = arr[i];
    }
    return { mayor, menor };
}

let obj = mayorMenor([3,1,5,4,2]);
console.log(obj); 

