/* import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const { cartItems, totalAmount } = useAppContext();

    return (
        <header className="bg-primary text-white p-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>Market Vet</h1>
                <nav>
                    <Link to="/" className="text-white mx-2">Home</Link>
                    <Link to="/dogs" className="text-white mx-2">Dogs</Link>
                    <Link to="/cats" className="text-white mx-2">Cats</Link>
                    <Link to="/others" className="text-white mx-2">Others</Link>
                    <Link to="/promotions" className="text-white mx-2">Promotions</Link>
                    <Link to="/contact" className="text-white mx-2">Contact</Link>
                    <Link to="/signup" className="text-white mx-2">Sign Up</Link>
                    <Link to="/login" className="text-white mx-2">Login</Link>
                </nav>
                <div>
                    <span className="mx-2">Items: {cartItems.length}</span>
                    <span className="mx-2">Total: ${totalAmount}</span>
                </div>
            </div>
        </header>
    );
};

export default Header; */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useUser } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDog, FaCat, FaHome, FaGift, FaShoppingCart, FaUser, FaUserPlus, FaPhone, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    const { cartItems, totalAmount } = useAppContext();
    const { user, logout } = useUser();

    return (
        <header className="bg-primary text-white p-3 mb-4 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo y Nombre */}
                <div className="d-flex align-items-center">
                    <img src="/logo.png" alt="Market Vet Logo" width="40" height="40" className="me-2" />
                    <h1 className="h4 mb-0 fw-bold">Market Vet</h1>
                </div>

                {/* Navegación */}
                <nav className="d-flex align-items-center">
                    <Link to="/" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaHome className="me-1" /> Home
                    </Link>
                    <Link to="/dogs" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaDog className="me-1" /> Dogs
                    </Link>
                    <Link to="/cats" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaCat className="me-1" /> Cats
                    </Link>
                    <Link to="/promotions" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaGift className="me-1" /> Promotions
                    </Link>
                    <Link to="/contact" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaPhone className="me-1" /> Contact
                    </Link>
                    <Link to="/signup" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaUserPlus className="me-1" /> Sign Up
                    </Link>

                    {user ? (
                        <>
                            <span className="text-white mx-3 d-flex align-items-center">
                                <FaUser className="me-1" /> Hola, {user.name}
                            </span>
                            <button onClick={logout} className="btn btn-outline-light mx-3 d-flex align-items-center">
                                <FaSignOutAlt className="me-1" /> Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                            <FaUser className="me-1" /> Login
                        </Link>
                    )}
                </nav>

                {/* Carrito */}
                <div className="d-flex align-items-center">
                    <Link to="/cart" className="text-white mx-3 d-flex align-items-center text-decoration-none">
                        <FaShoppingCart className="me-2" />
                        <div>
                            <span className="fw-bold">Items: {cartItems.length}</span>
                            <br />
                            <span className="fw-bold">Total: ${totalAmount}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;













