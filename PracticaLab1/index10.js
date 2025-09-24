//11. Proporcione un ejemplo concreto de encadenamiento de promesas. 


function primeraPromesa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Primer paso"), 1000);
    });
}

function segundaPromesa(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Segundo paso"), 2000);
    });
}

function terceraPromesa(mensaje) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensaje + " → Tercer paso"), 3000);
    });
}

primeraPromesa()
    .then(res => segundaPromesa(res))
    .then(res => terceraPromesa(res))
    .then(res => console.log(res)); 
    