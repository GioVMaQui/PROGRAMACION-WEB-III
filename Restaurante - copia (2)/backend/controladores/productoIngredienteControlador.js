import * as modelo from '../modelos/productoIngredienteModelo.js';

export const agregarIngrediente = async (req, res) => {
    try {
        const datos = req.body;
        await modelo.agregarIngredienteAProducto(datos);
        res.json({ ok: true, mensaje: 'Ingrediente agregado al producto' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al agregar ingrediente' });
    }
};

export const obtenerIngredientesProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const ingredientes = await modelo.obtenerIngredientesDeProducto(idProducto);
        res.json({ ok: true, ingredientes });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al obtener ingredientes' });
    }
};

export const eliminarIngredienteProducto = async (req, res) => {
    try {
        const { idProducto, idIngrediente } = req.params;
        await modelo.eliminarIngredienteDeProducto(idProducto, idIngrediente);
        res.json({ ok: true, mensaje: 'Ingrediente eliminado del producto' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al eliminar ingrediente' });
    }
};