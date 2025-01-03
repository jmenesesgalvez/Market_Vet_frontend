/* import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        pregunta: '',
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setMensaje(response.data.message);
            setFormData({
                nombre: '',
                telefono: '',
                correo: '',
                pregunta: '',
            });
        } catch (error) {
            console.error('Error al enviar el formulario', error);
            setMensaje('Hubo un error al enviar el formulario');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center mb-4">Formulario de Contacto</h2>
                {mensaje && <p className="alert alert-info text-center">{mensaje}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pregunta" className="form-label">Pregunta:</label>
                        <textarea
                            className="form-control"
                            id="pregunta"
                            name="pregunta"
                            rows="4"
                            value={formData.pregunta}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contact; */
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        pregunta: '',
    });

    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    // Base URL del backend desde variables de entorno
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://market-vet-backend.onrender.com';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');
        setError('');

        // Validaciones adicionales
        if (!/^\d+$/.test(formData.telefono)) {
            setError('El teléfono debe contener solo números.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            setError('Por favor, ingresa un correo válido.');
            return;
        }

        try {
            const response = await axios.post(`${backendUrl}/api/contact`, formData);
            setMensaje(response.data.message || 'Formulario enviado correctamente.');
            setFormData({
                nombre: '',
                telefono: '',
                correo: '',
                pregunta: '',
            });
        } catch (error) {
            console.error('Error al enviar el formulario', error);
            setError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center mb-4">Formulario de Contacto</h2>
                {mensaje && <p className="alert alert-success text-center">{mensaje}</p>}
                {error && <p className="alert alert-danger text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            pattern="\d+"
                            title="El teléfono debe contener solo números."
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pregunta" className="form-label">Pregunta:</label>
                        <textarea
                            className="form-control"
                            id="pregunta"
                            name="pregunta"
                            rows="4"
                            value={formData.pregunta}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;



