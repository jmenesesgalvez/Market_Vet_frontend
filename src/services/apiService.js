/* import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const fetchDogProducts = () => api.get('/products/dogs'); */

/* import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api',
});

export const fetchDogProducts = () => api.get('/products/dogs'); */

import axios from 'axios';

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
};


