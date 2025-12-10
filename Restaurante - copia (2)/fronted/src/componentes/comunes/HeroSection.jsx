import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero-section position-relative overflow-hidden">
            <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-4">
                            Los mejores snacks<br />
                            <span className="text-primary">de la ciudad</span>
                        </h1>
                        <p className="lead mb-4">
                            Desde 2010 sirviendo calidad y sabor. Hamburguesas, papas fritas, 
                            hot dogs y mucho más, preparados con los mejores ingredientes.
                        </p>
                        <div className="d-flex gap-3">
                            <Link to="/menu" className="btn btn-primary btn-lg">
                                Ver Menú
                            </Link>
                            <Link to="/contacto" className="btn btn-outline-primary btn-lg">
                                Pedir Ahora
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner rounded-3">
                                <div className="carousel-item active">
                                    <img 
                                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                        className="d-block w-100" 
                                        alt="Hamburguesa"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img 
                                        src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                        className="d-block w-100" 
                                        alt="Papas fritas"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;