//2. Crear una función que invierta el orden de las palabras en una frase. 
//let cad = miFuncion(“abcd”) 
//console.log(obj) // dcba 
function invertirCadena(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}

let cad = invertirCadena("abcd");
console.log(cad);
