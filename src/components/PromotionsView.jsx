import React from 'react';
import './PromotionsView.css';

const promotions = [
    {
        id: 1,
        title: 'Descuento en Comida para Perros',
        description: 'Obtén un 20% de descuento en todas las marcas de comida premium para perros.',
        image: 'https://example.com/dog-food.jpg',
        price: '$40.00'
    },
    {
        id: 2,
        title: 'Comida para Gatos en Oferta',
        description: '10% de descuento en comida especial para gatos de todas las edades.',
        image: 'https://example.com/cat-food.jpg',
        price: '$35.00'
    },
    {
        id: 3,
        title: 'Arena para Gatos en Promoción',
        description: 'Compra 2 bolsas de arena para gatos y obtén la tercera con 50% de descuento.',
        image: 'https://example.com/cat-litter.jpg',
        price: '$15.00'
    },
    {
        id: 4,
        title: 'Desparasitación',
        description: 'Servicio de desparasitación con un 30% de descuento. Cuidamos de la salud de tu mascota.',
        image: 'https://example.com/deworming.jpg',
        price: '$25.00'
    }
];

const PromotionsView = () => {
    return (
        <div className="promotions-container">
            <h2>Promociones de la Veterinaria</h2>
            <div className="promotions-grid">
                {promotions.map((promo) => (
                    <div key={promo.id} className="promotion-card">
                        <img src={promo.image} alt={promo.title} className="promo-image" />
                        <h3>{promo.title}</h3>
                        <p>{promo.description}</p>
                        <p className="promo-price">Precio: {promo.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromotionsView;
