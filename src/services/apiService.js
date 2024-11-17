/* import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const registerUser = async (nombre, email, password) => {
  const response = await axios.post(`${API_URL}/api/users/register`, { nombre, email, password });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
  return response.data;
};

export const addToCart = async (user_id, product_id, cantidad = 1) => {
  const response = await axios.post(`${API_URL}/api/cart/add`, { user_id, product_id, cantidad });
  return response.data;
};

export const getCartItems = async (user_id) => {
  const response = await axios.get(`${API_URL}/api/cart/${user_id}`);
  return response.data;
}; */

import axios from 'axios';

// Base URL del backend desde variables de entorno
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://market-vet-backend.onrender.com';

// Configuración inicial de Axios
const apiClient = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar token JWT a las solicitudes
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores globales
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error en la API:', error.response.data.message || error.response.statusText);
    } else {
      console.error('Error en la API:', error.message);
    }
    return Promise.reject(error);
  }
);

// Servicios de la API
export const registerUser = async (nombre, email, password) => {
  const response = await apiClient.post('/api/users/register', { nombre, email, password });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await apiClient.post('/api/users/login', { email, password });
  return response.data;
};

export const addToCart = async (user_id, product_id, cantidad = 1) => {
  const response = await apiClient.post('/api/cart/add', { user_id, product_id, cantidad });
  return response.data;
};

export const getCartItems = async (user_id) => {
  const response = await apiClient.get(`/api/cart/${user_id}`);
  return response.data;
};



