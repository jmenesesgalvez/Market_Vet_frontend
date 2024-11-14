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

export default Cats;
