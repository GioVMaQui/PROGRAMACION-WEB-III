import React from 'react';

const Menu = () => {
    const categorias = [
        {
            id: 1,
            nombre: "Hamburguesas",
            productos: [
                { nombre: "Hamburguesa Clásica", precio: "25 Bs.", descripcion: "Carne, queso, lechuga, tomate" },
                { nombre: "Hamburguesa Especial", precio: "35 Bs.", descripcion: "Doble carne, bacon, huevo" },
                { nombre: "Hamburguesa Veggie", precio: "28 Bs.", descripcion: "Vegetariana con quinoa" }
            ]
        },
        {
            id: 2,
            nombre: "Hot Dogs",
            productos: [
                { nombre: "Hot Dog Clásico", precio: "18 Bs.", descripcion: "Salchicha, mostaza, ketchup" },
                { nombre: "Hot Dog Especial", precio: "22 Bs.", descripcion: "Doble salchicha, cebolla caramelizada" },
                { nombre: "Hot Dog BBQ", precio: "24 Bs.", descripcion: "Salsa barbacoa, bacon" }
            ]
        },
        {
            id: 3,
            nombre: "Acompañamientos",
            productos: [
                { nombre: "Papas Fritas", precio: "15 Bs.", descripcion: "Porción individual" },
                { nombre: "Papas Fritas Familiares", precio: "30 Bs.", descripcion: "Porción para 4 personas" },
                { nombre: "Aros de Cebolla", precio: "18 Bs.", descripcion: "Con salsa especial" }
            ]
        },
        {
            id: 4,
            nombre: "Bebidas",
            productos: [
                { nombre: "Refresco 500ml", precio: "10 Bs.", descripcion: "Coca-Cola, Fanta, Sprite" },
                { nombre: "Jugo Natural", precio: "12 Bs.", descripcion: "Naranja, piña, maracuyá" },
                { nombre: "Agua Mineral", precio: "8 Bs.", descripcion: "500ml" }
            ]
        }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5 mb-3">Nuestro Menú Completo</h1>
                <p className="lead text-muted">Explora todas nuestras deliciosas opciones</p>
            </div>
            
            {categorias.map((categoria) => (
                <div key={categoria.id} className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="h3 fw-bold">{categoria.nombre}</h2>
                        <span className="badge bg-primary rounded-pill">{categoria.productos.length} productos</span>
                    </div>
                    
                    <div className="row g-4">
                        {categoria.productos.map((producto, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <h5 className="card-title mb-0">{producto.nombre}</h5>
                                            <span className="badge bg-success fs-6">{producto.precio}</span>
                                        </div>
                                        <p className="card-text text-muted mb-4">{producto.descripcion}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-sm btn-outline-primary">
                                                <i className="bi bi-cart-plus"></i> Agregar
                                            </button>
                                            <button className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-heart"></i> Favorito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
            <div className="card border-primary mt-5">
                <div className="card-body text-center py-4">
                    <h3 className="card-title mb-3">¿No encuentras lo que buscas?</h3>
                    <p className="card-text mb-4">Tenemos opciones personalizadas. Contacta con nosotros para pedidos especiales.</p>
                    <a href="/contacto" className="btn btn-primary btn-lg">
                        Contactar Ahora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;