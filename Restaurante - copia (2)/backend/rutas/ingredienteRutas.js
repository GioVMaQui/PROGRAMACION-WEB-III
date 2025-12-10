import express from 'express';
import {
    crearIngrediente,
    obtenerIngredientes,
    obtenerIngrediente,
    actualizarIngrediente,
    actualizarStock,
    eliminarIngrediente
} from '../controladores/ingredienteControlador.js';

const router = express.Router();

router.post('/', crearIngrediente);
router.get('/', obtenerIngredientes);
router.get('/:id', obtenerIngrediente);
router.put('/:id', actualizarIngrediente);
router.put('/:id/stock', actualizarStock);
router.delete('/:id', eliminarIngrediente);

export default router;