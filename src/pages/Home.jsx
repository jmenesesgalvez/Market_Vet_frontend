import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container my-5">
            {/* Carrusel de imágenes principal */}
            <div id="mainCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://localhost:5000/uploads/images/home/carrusel/carru1.jpg" className="d-block w-100" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://localhost:5000/uploads/images/home/carrusel/carru2.jpg" className="d-block w-100" alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://localhost:5000/uploads/images/home/carrusel/carru3.jpg" className="d-block w-100" alt="Imagen 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Sección de imágenes de enlace */}
            <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <Link to="/dogs">
                        <img src="http://localhost:5000/uploads/images/home/iconos/perros.jpg" alt="Perros" className="img-fluid rounded-circle mb-2" />
                        <h5>Perros</h5>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/cats">
                        <img src="http://localhost:5000/uploads/images/home/iconos/gatos.jpg" alt="Gatos" className="img-fluid rounded-circle mb-2" />
                        <h5>Gatos</h5>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/promotions">
                        <img src="http://localhost:5000/uploads/images/home/iconos/promociones.jpg" alt="Promociones" className="img-fluid rounded-circle mb-2" />
                        <h5>Promociones</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


