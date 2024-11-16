/* import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres y una letra mayúscula');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/users/register', {
                nombre,
                email,
                password
            });
            setMensaje('Cuenta creada exitosamente');
            setNombre('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMensaje('Error al crear la cuenta');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Crear Cuenta</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </button>
                            </div>
                            {passwordError && (
                                <div className="text-danger mt-1">
                                    {passwordError}
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={!!passwordError}>
                            Registrarse
                        </button>
                    </form>
                    {mensaje && (
                        <div className="alert alert-info mt-3" role="alert">
                            {mensaje}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp; */

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Base URL del backend desde variables de entorno
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://tu-backend.onrender.com';

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Por favor, ingresa un email válido.');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres y una letra mayúscula.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !validatePassword(password)) {
            return;
        }

        try {
            await axios.post(`${backendUrl}/api/users/register`, {
                nombre,
                email,
                password,
            });
            setMensaje('Cuenta creada exitosamente.');
            setNombre('');
            setEmail('');
            setPassword('');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setMensaje('El email ya está registrado. Usa otro.');
            } else {
                setMensaje('Hubo un error al crear la cuenta. Intenta nuevamente.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Crear Cuenta</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(e.target.value);
                                }}
                                required
                            />
                            {emailError && (
                                <div className="text-danger mt-1">
                                    {emailError}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </button>
                            </div>
                            {passwordError && (
                                <div className="text-danger mt-1">
                                    {passwordError}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={!!passwordError || !!emailError}
                        >
                            Registrarse
                        </button>
                    </form>
                    {mensaje && (
                        <div className="alert alert-info mt-3" role="alert">
                            {mensaje}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;




