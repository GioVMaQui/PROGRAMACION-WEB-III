// src/servicios/encriptacionService.js

// Clave de desplazamiento para el cifrado César (número de posiciones)
const DESPLAZAMIENTO = 7;

/**
 * Cifra un texto usando Cifrado César
 * @param {string} texto - Texto a cifrar
 * @returns {string} - Texto cifrado
 */
export const encriptar = (texto) => {
    try {
        if (!texto) return '';
        
        let resultado = '';
        for (let i = 0; i < texto.length; i++) {
            let char = texto.charAt(i);
            let code = texto.charCodeAt(i);
            
            // Solo cifrar caracteres imprimibles (32-126 en ASCII)
            if (code >= 32 && code <= 126) {
                // Aplicar desplazamiento
                let nuevoCode = code + DESPLAZAMIENTO;
                
                // Si se pasa del rango, volver al inicio
                if (nuevoCode > 126) {
                    nuevoCode = 32 + (nuevoCode - 127);
                }
                
                char = String.fromCharCode(nuevoCode);
            }
            
            resultado += char;
        }
        return resultado;
    } catch (error) {
        console.error('Error al encriptar:', error);
        return '';
    }
};

/**
 * Descifra un texto cifrado con César
 * @param {string} textoCifrado - Texto cifrado
 * @returns {string} - Texto original
 */
export const desencriptar = (textoCifrado) => {
    try {
        if (!textoCifrado) return '';
        
        let resultado = '';
        for (let i = 0; i < textoCifrado.length; i++) {
            let char = textoCifrado.charAt(i);
            let code = textoCifrado.charCodeAt(i);
            
            // Solo descifrar caracteres imprimibles (32-126 en ASCII)
            if (code >= 32 && code <= 126) {
                // Aplicar desplazamiento inverso
                let nuevoCode = code - DESPLAZAMIENTO;
                
                // Si se pasa del rango, volver al final
                if (nuevoCode < 32) {
                    nuevoCode = 127 - (32 - nuevoCode);
                }
                
                char = String.fromCharCode(nuevoCode);
            }
            
            resultado += char;
        }
        return resultado;
    } catch (error) {
        console.error('Error al desencriptar:', error);
        return '';
    }
};

/**
 * Cifra datos de usuario para localStorage
 * @param {object} datosUsuario - Datos del usuario
 * @returns {string} - Datos cifrados como JSON string
 */
export const encriptarDatosUsuario = (datosUsuario) => {
    try {
        const datosString = JSON.stringify(datosUsuario);
        return encriptar(datosString);
    } catch (error) {
        console.error('Error al encriptar datos de usuario:', error);
        return '';
    }
};

/**
 * Descifra datos del usuario desde localStorage
 * @param {string} datosCifrados - Datos cifrados
 * @returns {object|null} - Datos del usuario o null si hay error
 */
export const desencriptarDatosUsuario = (datosCifrados) => {
    try {
        if (!datosCifrados) return null;
        
        const datosString = desencriptar(datosCifrados);
        return JSON.parse(datosString);
    } catch (error) {
        console.error('Error al desencriptar datos de usuario:', error);
        return null;
    }
};

/**
 * Versión simple de encriptación de contraseña (solo para mostrar)
 * NOTA: En producción, esto no es seguro. Es solo para demostración.
 */
export const encriptarPasswordSimple = (password) => {
    return encriptar(password);
};

/**
 * Verifica si una contraseña coincide (versión simple)
 */
export const verificarPasswordSimple = (password, passwordCifrado) => {
    return encriptar(password) === passwordCifrado;
};