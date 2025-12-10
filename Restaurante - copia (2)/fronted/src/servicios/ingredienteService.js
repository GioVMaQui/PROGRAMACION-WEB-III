import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const obtenerIngredientes = async () => {
    try {
        const response = await axios.get(`${API_URL}/ingredientes`);
        return response.data.ingredientes;
    } catch (error) {
        console.error('Error al obtener ingredientes:', error);
        throw error;
    }
};

export const crearIngrediente = async (ingrediente) => {
    try {
        const response = await axios.post(`${API_URL}/ingredientes`, ingrediente);
        return response.data;
    } catch (error) {
        console.error('Error al crear ingrediente:', error);
        throw error;
    }
};

export const actualizarIngrediente = async (id, ingrediente) => {
    try {
        const response = await axios.put(`${API_URL}/ingredientes/${id}`, ingrediente);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar ingrediente:', error);
        throw error;
    }
};

export const eliminarIngrediente = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/ingredientes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar ingrediente:', error);
        throw error;
    }
};