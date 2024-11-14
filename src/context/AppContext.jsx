import React, { createContext, useContext, useState } from 'react';
import { useUser } from './UserContext'; // Importar el contexto de usuario

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const { user } = useUser(); // Obtenemos el usuario del contexto de usuario

    const calculateTotalAmount = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const addToCart = (product) => {
        // Verificar si el usuario está autenticado antes de agregar al carrito
        if (!user) {
            alert("Por favor, inicia sesión para agregar productos al carrito.");
            return;
        }

        const standardizedProduct = {
            id: product.id,
            name: product.producto,
            price: parseFloat(product.precio),
            quantity: 1
        };

        if (!standardizedProduct.id || !standardizedProduct.name || isNaN(standardizedProduct.price)) {
            console.error("El producto no tiene la estructura correcta:", standardizedProduct);
            return;
        }

        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === standardizedProduct.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === standardizedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, standardizedProduct];
        });

        setTotalAmount((prevTotal) => prevTotal + standardizedProduct.price);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const itemToRemove = prevItems.find(item => item.id === productId);
            if (!itemToRemove) return prevItems;

            const updatedItems = prevItems.filter(item => item.id !== productId);
            setTotalAmount(calculateTotalAmount(updatedItems));
            return updatedItems;
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
            setTotalAmount(calculateTotalAmount(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        setTotalAmount(0);
    };

    return (
        <AppContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;












