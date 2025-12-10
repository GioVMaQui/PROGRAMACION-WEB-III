import { db } from '../config/db.js';

export const agregarIngredienteAProducto = async (productoIngrediente) => {
    const [result] = await db.query('INSERT INTO producto_ingrediente SET ?', [productoIngrediente]);
    return result;
};

export const obtenerIngredientesDeProducto = async (idProducto) => {
    const [result] = await db.query(`
        SELECT pi.*, i.nombreI, i.unidadMedida 
        FROM producto_ingrediente pi 
        JOIN ingrediente i ON pi.idIngrediente = i.idIngrediente 
        WHERE pi.idProducto = ?
    `, [idProducto]);
    return result;
};

export const eliminarIngredienteDeProducto = async (idProducto, idIngrediente) => {
    const [result] = await db.query(
        'DELETE FROM producto_ingrediente WHERE idProducto = ? AND idIngrediente = ?',
        [idProducto, idIngrediente]
    );
    return result;
};