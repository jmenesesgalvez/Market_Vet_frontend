import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext'; // Importa UserProvider primero
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <UserProvider> {/* Asegúrate de que UserProvider envuelve a AppProvider */}
            <AppProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dogs" element={<Dogs />} />
                        <Route path="/cats" element={<Cats />} />
                        <Route path="/promotions" element={<Promotions />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>
                </Router>
            </AppProvider>
        </UserProvider>
    );
};

export default App;









