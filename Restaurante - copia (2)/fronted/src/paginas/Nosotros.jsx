import React from 'react';

const Nosotros = () => {
    const equipo = [
        { nombre: "Martha Rodríguez", puesto: "Fundadora & Chef", imagen: "https://randomuser.me/api/portraits/women/65.jpg" },
        { nombre: "Carlos Gutiérrez", puesto: "Gerente General", imagen: "https://randomuser.me/api/portraits/men/32.jpg" },
        { nombre: "Ana Martínez", puesto: "Jefa de Cocina", imagen: "https://randomuser.me/api/portraits/women/44.jpg" },
        { nombre: "Juan Pérez", puesto: "Atención al Cliente", imagen: "https://randomuser.me/api/portraits/men/67.jpg" }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5 mb-3">Sobre Nosotros</h1>
                <p className="lead text-muted">Conoce nuestra historia y pasión por la buena comida</p>
            </div>
            
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img 
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Nuestro local" 
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-lg-6">
                    <h2 className="fw-bold mb-4">Nuestra Historia</h2>
                    <p className="mb-4">
                        Marthita's Snack nació en 2010 con un simple sueño: ofrecer los mejores snacks 
                        de la ciudad. Lo que comenzó como un pequeño local familiar, hoy se ha convertido 
                        en un referente de calidad y sabor.
                    </p>
                    <p className="mb-4">
                        Nuestra filosofía se basa en tres pilares fundamentales: ingredientes frescos, 
                        recetas tradicionales y un servicio excepcional. Cada hamburguesa, cada hot dog, 
                        cada porción de papas fritas está preparada con el mismo cuidado que le daríamos 
                        a nuestra propia familia.
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="me-4">
                            <h3 className="display-6 fw-bold text-primary mb-0">10+</h3>
                            <p className="text-muted mb-0">Años de experiencia</p>
                        </div>
                        <div className="me-4">
                            <h3 className="display-6 fw-bold text-primary mb-0">50K+</h3>
                            <p className="text-muted mb-0">Clientes satisfechos</p>
                        </div>
                        <div>
                            <h3 className="display-6 fw-bold text-primary mb-0">24/7</h3>
                            <p className="text-muted mb-0">Delivery disponible</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-primary">
                        <div className="card-body p-4">
                            <div className="row align-items-center">
                                <div className="col-md-3 text-center mb-3 mb-md-0">
                                    <i className="bi bi-award display-4 text-primary"></i>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="card-title">Nuestra Misión</h3>
                                    <p className="card-text mb-0">
                                        Brindar experiencias gastronómicas memorables a través de snacks 
                                        de alta calidad, preparados con ingredientes frescos y servidos 
                                        con calidez y profesionalismo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-4">Nuestro Equipo</h2>
                <p className="lead text-muted mb-5">Conoce a las personas que hacen posible Marthita's Snack</p>
            </div>
            
            <div className="row g-4">
                {equipo.map((persona, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="card text-center border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <img 
                                    src={persona.imagen} 
                                    alt={persona.nombre}
                                    className="rounded-circle mb-3"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                />
                                <h5 className="card-title mb-2">{persona.nombre}</h5>
                                <p className="card-text text-muted mb-3">{persona.puesto}</p>
                                <div className="social-links">
                                    <a href="#" className="text-primary me-2">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="text-primary me-2">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" className="text-primary">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="card bg-light border-0 mt-5">
                <div className="card-body text-center py-5">
                    <h2 className="card-title mb-4">¿Quieres formar parte de nuestro equipo?</h2>
                    <p className="card-text mb-4">Siempre estamos buscando talento apasionado por la gastronomía.</p>
                    <a href="/contacto" className="btn btn-primary btn-lg">
                        Enviar CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;