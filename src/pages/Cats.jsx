/* import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cats = () => {
    const { addToCart } = useAppContext();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/cats');
                setProducts(response.data);
                setFilteredProducts(response.data); 
            } catch (error) {
                console.error('Error al cargar productos', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];

        if (categoryFilter) {
            updatedProducts = updatedProducts.filter(
                product => product.categoria === categoryFilter
            );
        }

        if (priceFilter === 'asc') {
            updatedProducts.sort((a, b) => a.precio - b.precio);
        } else if (priceFilter === 'desc') {
            updatedProducts.sort((a, b) => b.precio - a.precio);
        }

        setFilteredProducts(updatedProducts);
    }, [categoryFilter, priceFilter, products]);

    return (
        <div className="container my-4">
            <h2>Productos para Gatos</h2>

           
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="categoryFilter">Filtrar por Categoría:</label>
                    <select
                        id="categoryFilter"
                        className="form-select"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">Todas</option>
                        <option value="Farmacia">Farmacia</option>
                        <option value="Insumos">Insumos</option>
                        <option value="Accesorios y Juguetes">Accesorios y Juguetes</option>
                        <option value="Alimentos y Snack">Alimentos y Snack</option>
                        <option value="Higiene y Belleza">Higiene y Belleza</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="priceFilter">Ordenar por Precio:</label>
                    <select
                        id="priceFilter"
                        className="form-select"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="">Sin orden</option>
                        <option value="asc">De menor a mayor</option>
                        <option value="desc">De mayor a menor</option>
                    </select>
                </div>
            </div>

            
            <div className="row">
                {filteredProducts.map((product, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                <img
                                    src={`http://localhost:5000/${product.imagen}`}
                                    className="img-fluid rounded"
                                    alt={product.producto}
                                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.producto}</h5>
                                <p className="card-text">Categoría: {product.categoria}</p>
                                <p className="card-text">Precio: ${product.precio}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    Agregar al Carro
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cats; */

import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cats = () => {
    const { addToCart } = useAppContext();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    // Base URL del backend desde variables de entorno
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://market-vet-backend.onrender.com';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/products/cats`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!Array.isArray(response.data)) {
                    throw new Error('El formato de los datos no es válido');
                }

                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error al cargar productos:', error);

                if (error.response) {
                    // Error del servidor
                    alert(`Error del servidor: ${error.response.status} - ${error.response.data.message || 'Error desconocido'}`);
                } else if (error.request) {
                    // No hay respuesta del servidor
                    alert('No se recibió respuesta del servidor. Por favor, verifica tu conexión o contacta al soporte.');
                } else {
                    // Error en la configuración
                    alert(`Error al realizar la solicitud: ${error.message}`);
                }
            }
        };
        fetchProducts();
    }, [backendUrl]);

    useEffect(() => {
        let updatedProducts = [...products];

        if (categoryFilter) {
            updatedProducts = updatedProducts.filter(
                product => product.categoria === categoryFilter
            );
        }

        if (priceFilter === 'asc') {
            updatedProducts.sort((a, b) => a.precio - b.precio);
        } else if (priceFilter === 'desc') {
            updatedProducts.sort((a, b) => b.precio - a.precio);
        }

        setFilteredProducts(updatedProducts);
    }, [categoryFilter, priceFilter, products]);

    return (
        <div className="container my-4">
            <h2>Productos para Gatos</h2>

            {/* Filtros */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="categoryFilter">Filtrar por Categoría:</label>
                    <select
                        id="categoryFilter"
                        className="form-select"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">Todas</option>
                        <option value="Farmacia">Farmacia</option>
                        <option value="Insumos">Insumos</option>
                        <option value="Accesorios y Juguetes">Accesorios y Juguetes</option>
                        <option value="Alimentos y Snack">Alimentos y Snack</option>
                        <option value="Higiene y Belleza">Higiene y Belleza</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="priceFilter">Ordenar por Precio:</label>
                    <select
                        id="priceFilter"
                        className="form-select"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="">Sin orden</option>
                        <option value="asc">De menor a mayor</option>
                        <option value="desc">De mayor a menor</option>
                    </select>
                </div>
            </div>

            {/* Lista de productos */}
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                    <img
                                        src={`${backendUrl}/${product.imagen}`}
                                        className="img-fluid rounded"
                                        alt={product.producto}
                                        style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.producto}</h5>
                                    <p className="card-text">Categoría: {product.categoria}</p>
                                    <p className="card-text">Precio: ${product.precio}</p>
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                        Agregar al Carro
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Cats;



