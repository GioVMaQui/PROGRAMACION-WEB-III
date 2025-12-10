import React from 'react';

const MenuCards = () => {
    const productos = [
        {
            id: 1,
            nombre: "Hamburguesa Clásica",
            descripcion: "Carne 100% res, queso, lechuga, tomate y salsa especial",
            precio: "25 Bs.",
            imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            categoria: "Hamburguesas"
        },
        {
            id: 2,
            nombre: "Papas Fritas",
            descripcion: "Papas frescas cortadas a mano, crujientes por fuera y suaves por dentro",
            precio: "15 Bs.",
            imagen: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            categoria: "Acompañamientos"
        },
        {
            id: 3,
            nombre: "Hot Dog Especial",
            descripcion: "Salchicha premium con cebolla caramelizada, pepinillos y mostaza",
            precio: "18 Bs.",
            imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            categoria: "Hot Dogs"
        },
        {
            id: 4,
            nombre: "Refresco 500ml",
            descripcion: "Bebida refrescante de tu elección: Coca-Cola, Fanta, Sprite",
            precio: "10 Bs.",
            imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            categoria: "Bebidas"
        }
    ];

    return (
        <section className="py-5">
            <h2 className="text-center mb-5">Nuestro Menú Destacado</h2>
            <div className="row g-4">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <img 
                                src={producto.imagen} 
                                className="card-img-top" 
                                alt={producto.nombre}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <span className="badge bg-primary mb-2 align-self-start">
                                    {producto.categoria}
                                </span>
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text flex-grow-1">{producto.descripcion}</p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <span className="h5 text-primary mb-0">{producto.precio}</span>
                                    <button className="btn btn-outline-primary">
                                        <i className="bi bi-cart-plus"></i> Ordenar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuCards;