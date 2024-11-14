<<<<<<< HEAD
// src/components/Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-auto">
            <div className="container">
                <p className="mb-1">Ubicación: Av. Siempreviva 123, Springfield</p>
                <p className="mb-1">Teléfono: +56 9 1234 5678</p>
                <p>Email: contacto@rapivet.com</p>
            </div>
        </footer>
    );
};

export default Footer;
=======
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light shadow-sm py-3">
      <div className="container text-center">
        <h3 className="mb-2">Somos proveedores especializados en industria veterinaria, atendemos a hospitales y a particulares</h3>
        <a href="/contact" className="text-dark text-decoration-none">contactostore@rapivet.com</a>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 468819c3094512644612e29cc742dae2457245ca
