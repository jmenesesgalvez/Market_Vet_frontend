import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, totalAmount, updateQuantity, removeFromCart, clearCart } = useAppContext();
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    const handleCheckout = () => {
        clearCart(); // Vacía el carrito
        navigate('/thank-you'); // Redirige a la página de agradecimiento
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="list-group mb-3">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.name || "Producto sin nombre"}</h5>
                                    <p>Precio por unidad: ${item.price || "Precio no disponible"}</p>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor={`quantity-${item.id}`} className="me-2">Cantidad:</label>
                                        <input
                                            type="number"
                                            id={`quantity-${item.id}`}
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            className="form-control"
                                            style={{ width: '70px' }}
                                        />
                                    </div>
                                </div>
                                <span>Total: ${item.price * item.quantity}</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="btn btn-danger btn-sm ms-3"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-end">Total: ${totalAmount}</h4>
                    <div className="d-flex justify-content-between mt-4">
                        <button onClick={handleContinueShopping} className="btn btn-secondary">Seguir Comprando</button>
                        <button onClick={handleCheckout} className="btn btn-primary">Pagar</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;


