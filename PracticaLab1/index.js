//1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto. 
//let obj = miFuncion(“euforia”) 
//console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 } 

function miFuncion(texto) {
    const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (letra === 'a') resultado.a++;
        if (letra === 'e') resultado.e++;
        if (letra === 'i') resultado.i++;
        if (letra === 'o') resultado.o++;
        if (letra === 'u') resultado.u++;
    }
    return resultado;
}

let obj = miFuncion("euforia");
console.log(obj);








