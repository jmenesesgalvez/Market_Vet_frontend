/* import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);
            setUser({ name: response.data.user.name });
            setMensaje('Login exitoso');
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMensaje('Las credenciales ingresadas son incorrectas');
            } else {
                setMensaje('Error en el login');
            }
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/users/reset-password', {
                email,
                newPassword
            });
            setMensaje('Contraseña actualizada exitosamente');
            setShowResetPassword(false);
            setEmail('');
            setNewPassword('');
        } catch (error) {
            setMensaje('Error al actualizar la contraseña');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">{showResetPassword ? 'Restablecer Contraseña' : 'Iniciar Sesión'}</h2>
                    
                    {showResetPassword ? (
                        <form onSubmit={handleResetPassword}>
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
                                <label className="form-label">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Restablecer Contraseña
                            </button>
                            <button
                                type="button"
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setShowResetPassword(false)}
                            >
                                Volver al Inicio de Sesión
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit}>
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
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Iniciar Sesión
                            </button>
                            <button
                                type="button"
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setShowResetPassword(true)}
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </form>
                    )}

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

export default Login; */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();

    // Base URL del backend desde variables de entorno
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://market-vet-backend.onrender.com';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');

        try {
            const response = await axios.post(`${backendUrl}/api/users/login`, {
                email,
                password,
            });

            localStorage.setItem('token', response.data.token);
            setUser({ name: response.data.user.name });
            setMensaje('Inicio de sesión exitoso. Redirigiendo...');
            setTimeout(() => navigate('/'), 1500); // Redirige después de un breve tiempo
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMensaje('Credenciales incorrectas. Por favor, verifica tus datos.');
            } else {
                setMensaje('Hubo un problema al intentar iniciar sesión. Intenta de nuevo más tarde.');
            }
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setMensaje('');

        try {
            await axios.post(`${backendUrl}/api/users/reset-password`, {
                email,
                newPassword,
            });
            setMensaje('Contraseña actualizada exitosamente.');
            setShowResetPassword(false);
            setEmail('');
            setNewPassword('');
        } catch (error) {
            setMensaje('No se pudo actualizar la contraseña. Intenta más tarde.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">{showResetPassword ? 'Restablecer Contraseña' : 'Iniciar Sesión'}</h2>

                    {showResetPassword ? (
                        <form onSubmit={handleResetPassword}>
                            <div className="mb-3">
                                <label className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Restablecer Contraseña
                            </button>
                            <button
                                type="button"
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setShowResetPassword(false)}
                            >
                                Volver al Inicio de Sesión
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Correo Electrónico</label>
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
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Iniciar Sesión
                            </button>
                            <button
                                type="button"
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setShowResetPassword(true)}
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </form>
                    )}

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

export default Login;





