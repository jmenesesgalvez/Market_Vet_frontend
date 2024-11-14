import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className="register-container">
            <h2>Market Vet</h2>
            <h3>Registrarse</h3>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="name@example.com" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="******" required />
                </div>
                <div className="form-group">
                    <label>Avatar URL</label>
                    <input type="url" placeholder="Avatar URL" />
                </div>
                <div className="button-group">
                    <button type="submit" className="register-button">Registrarme</button>
                    <button type="button" className="back-button">Volver</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
