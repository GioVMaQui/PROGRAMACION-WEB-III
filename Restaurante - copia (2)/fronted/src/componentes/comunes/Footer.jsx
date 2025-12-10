import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">
                            <i className="bi bi-cup-hot-fill me-2"></i>
                            Marthita's Snack
                        </h5>
                        <p className="text-light">
                            Desde 2010 sirviendo los mejores snacks de la ciudad con calidad y amor.
                        </p>
                        <div className="social-links">
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-2 mb-4">
                        <h5 className="mb-3">Enlaces</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-light text-decoration-none">Inicio</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/menu" className="text-light text-decoration-none">Menú</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/nosotros" className="text-light text-decoration-none">Nosotros</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contacto" className="text-light text-decoration-none">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Horario</h5>
                        <ul className="list-unstyled text-light">
                            <li className="mb-2">Lunes a Viernes: 9:00 - 22:00</li>
                            <li className="mb-2">Sábados: 10:00 - 23:00</li>
                            <li>Domingos: 11:00 - 21:00</li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Contacto</h5>
                        <ul className="list-unstyled text-light">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                Calle Principal 123, Ciudad
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                (591) 777-77777
                            </li>
                            <li>
                                <i className="bi bi-envelope me-2"></i>
                                info@marthitassnack.com
                            </li>
                        </ul>
                    </div>
                </div>
                
                <hr className="bg-light my-4" />
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Marthita's Snack. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;