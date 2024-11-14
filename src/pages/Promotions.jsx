import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Promotions = () => {
    const [promotions, setPromotions] = useState({ perros: [], gatos: [] });

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/promotions');
                setPromotions(response.data);
            } catch (error) {
                console.error('Error al cargar promociones', error);
            }
        };
        fetchPromotions();
    }, []);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Promociones</h2>

            {/* Productos para Perros en Promoción */}
            {promotions.perros.length > 0 ? (
                <div className="row">
                    <h3 className="mb-3">Productos para Perros</h3>
                    {promotions.perros.map((product, index) => (
                        <div className="col-md-4 mb-4" key={`dog-${index}`}>
                            <div className="card h-100 shadow-sm">
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                    <img
                                        src={`http://localhost:5000/${product.imagen}`}
                                        className="img-fluid rounded"
                                        alt={product.producto}
                                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold">{product.producto}</h5>
                                    <p className="card-text">Precio: <strong>${product.precio}</strong></p>
                                    <button className="btn btn-danger">¡Comprar Ahora!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos de perros en promoción.</p>
            )}

            {/* Productos para Gatos en Promoción */}
            {promotions.gatos.length > 0 ? (
                <div className="row mt-5">
                    <h3 className="mb-3">Productos para Gatos</h3>
                    {promotions.gatos.map((product, index) => (
                        <div className="col-md-4 mb-4" key={`cat-${index}`}>
                            <div className="card h-100 shadow-sm">
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                    <img
                                        src={`http://localhost:5000/${product.imagen}`}
                                        className="img-fluid rounded"
                                        alt={product.producto}
                                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold">{product.producto}</h5>
                                    <p className="card-text">Precio: <strong>${product.precio}</strong></p>
                                    <button className="btn btn-danger">¡Comprar Ahora!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos de gatos en promoción.</p>
            )}
        </div>
    );
};

export default Promotions;

