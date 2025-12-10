import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Navbar from './componentes/comunes/Navbar';
import Footer from './componentes/comunes/Footer';

import Login from './paginas/login';
import Registro from './paginas/registro';
import Menu from './paginas/Menu';
import Contacto from './paginas/Contacto';
import Nosotros from './paginas/Nosotros';

import DashboardAdmin from './componentes/dashboard/admin/DashboardAdmin.jsx';
import DashboardCliente from './componentes/dashboard/cliente/DashboardCliente.jsx';
import DashboardCajero from './componentes/dashboard/cajero/DashboardCajero.jsx';
import DashboardCocina from './componentes/dashboard/cocina/DashboardCocina.jsx';
import DashboardGerente from './componentes/dashboard/gerente/DashboardGerente.jsx';
import DashboardEmpleado from './componentes/dashboard/empleado/DashboardEmpleado.jsx';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        
                        <Route path="/admin/*" element={<DashboardAdmin />} />
                        <Route path="/cliente/*" element={<DashboardCliente />} />
                        <Route path="/empleado/*" element={<DashboardEmpleado />} />
                        <Route path="/cajero/*" element={<DashboardCajero />} />
                        <Route path="/cocina/*" element={<DashboardCocina />} />
                        <Route path="/gerente/*" element={<DashboardGerente />} />
                        
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;