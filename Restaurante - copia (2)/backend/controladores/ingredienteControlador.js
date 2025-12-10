import * as modelo from '../modelos/ingredienteModelo.js';

export const crearIngrediente = async (req, res) => {
    try {
        const ingrediente = req.body;
        await modelo.crearIngrediente(ingrediente);
        res.json({ ok: true, mensaje: 'Ingrediente creado' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al crear ingrediente' });
    }
};

export const obtenerIngredientes = async (req, res) => {
    try {
        const ingredientes = await modelo.obtenerIngredientes();
        res.json({ ok: true, ingredientes });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al obtener ingredientes' });
    }
};

export const obtenerIngrediente = async (req, res) => {
    try {
        const { id } = req.params;
        const ingrediente = await modelo.obtenerIngredientePorId(id);
        if (!ingrediente) return res.status(404).json({ ok: false, mensaje: 'Ingrediente no encontrado' });
        res.json({ ok: true, ingrediente });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al obtener ingrediente' });
    }
};

export const actualizarIngrediente = async (req, res) => {
    try {
        const { id } = req.params;
        const datos = req.body;
        await modelo.actualizarIngrediente(id, datos);
        res.json({ ok: true, mensaje: 'Ingrediente actualizado' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al actualizar' });
    }
};

export const actualizarStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad } = req.body;
        await modelo.actualizarStock(id, cantidad);
        res.json({ ok: true, mensaje: 'Stock actualizado' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al actualizar stock' });
    }
};

export const eliminarIngrediente = async (req, res) => {
    try {
        const { id } = req.params;
        await modelo.eliminarIngrediente(id);
        res.json({ ok: true, mensaje: 'Ingrediente eliminado' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ ok: false, mensaje: 'Error al eliminar' });
    }
};