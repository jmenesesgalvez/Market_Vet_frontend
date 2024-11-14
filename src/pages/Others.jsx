import React from 'react';
import { useAppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const productsData = [
    { name: 'Producto A', supply: 'Comida', price: 15, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Producto B', supply: 'Juguete', price: 25, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Producto C', supply: 'Accesorio', price: 10, imageUrl: 'https://via.placeholder.com/150' },
];

const Dogs = () => {
    const { addToCart } = useAppContext();

    return (
        <div className="container my-4">
            <h2>Productos para Gatos</h2>
            <div className="row">
                {productsData.map((product, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Suministro: {product.supply}</p>
                                <p className="card-text">Precio: ${product.price}</p>
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

export default Dogs;
