import { db } from '../config/db.js';

export const crearIngrediente = async (ingrediente) => {
    const [result] = await db.query('INSERT INTO ingrediente SET ?', [ingrediente]);
    return result;
};

export const obtenerIngredientes = async () => {
    const [result] = await db.query('SELECT * FROM ingrediente');
    return result;
};

export const obtenerIngredientePorId = async (id) => {
    const [result] = await db.query('SELECT * FROM ingrediente WHERE idIngrediente = ?', [id]);
    return result[0];
};

export const actualizarIngrediente = async (id, datos) => {
    const [result] = await db.query('UPDATE ingrediente SET ? WHERE idIngrediente = ?', [datos, id]);
    return result;
};

export const actualizarStock = async (id, cantidad) => {
    const [result] = await db.query('UPDATE ingrediente SET stock = stock + ? WHERE idIngrediente = ?', [cantidad, id]);
    return result;
};

export const eliminarIngrediente = async (id) => {
    const [result] = await db.query('DELETE FROM ingrediente WHERE idIngrediente = ?', [id]);
    return result;
};