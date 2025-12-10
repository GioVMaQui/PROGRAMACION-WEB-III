import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { loginUsuario } from '../servicios/usuarioService.js';

function Login() {
    const [form, setForm] = useState({
        nombUsuario: '',
        contrasenia: ''
    });
    
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);
    
    const navigate = useNavigate();
    const captchaRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');
        
        const token = captchaRef.current.getValue();
        if (!token) {
            setMensaje('Error: Por favor, verifica el ReCAPTCHA');
            return;
        }

        setCargando(true);

        try {
            const respuesta = await loginUsuario(form.nombUsuario, form.contrasenia);
            
            if (respuesta.ok && respuesta.usuario) {
                localStorage.setItem('usuario', JSON.stringify(respuesta.usuario));
                redirigirSegunRol(respuesta.usuario.rol);
            } else {
                setMensaje('Error:' + (respuesta.mensaje || 'Credenciales incorrectas'));
                captchaRef.current.reset();
            }
            
        } catch (error) {
            console.error('Error en login h:', error);
            setMensaje('Error en el servidor');
            captchaRef.current.reset();
        } finally {
            setCargando(false);
        }
    };

    const redirigirSegunRol = (rol) => {
        switch(rol) {
            case 'ADMIN':
                navigate('/admin');
                break;
            case 'GERENTE':
                navigate('/gerente');
                break;
            case 'CAJERO':
                navigate('/cajero');
                break;
            case 'COCINA':
                navigate('/cocina');
                break;
            case 'EMPLEADO':
                navigate('/empleado');
                break;
            case 'CLIENTE':
            default:
                navigate('/cliente');
                break;
        }
    };

    return (
        <div className="login-container" style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div className="login-box" style={{
                background: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>
                    Iniciar Sesión
                </h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
                    Bienvenido a Marthita's Snack
                </p>
                
                {mensaje && (
                    <div style={{
                        backgroundColor: mensaje.includes('Error:') ? '#f8d7da' : '#d4edda',
                        color: mensaje.includes('Error:') ? '#721c24' : '#155724',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        border: `1px solid ${mensaje.includes('Error:') ? '#f5c6cb' : '#c3e6cb'}`
                    }}>
                        {mensaje}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                            Usuario:
                        </label>
                        <input
                            type="text"
                            name="nombUsuario"
                            placeholder="Tu nombre de usuario"
                            value={form.nombUsuario}
                            onChange={handleChange}
                            required
                            disabled={cargando}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            name="contrasenia"
                            placeholder="Tu contraseña"
                            value={form.contrasenia}
                            onChange={handleChange}
                            required
                            disabled={cargando}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    
                    {/* ReCAPTCHA */}
                    <div style={{ 
                        marginBottom: '20px', 
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}>
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // CLAVE DE PRUEBA
                            size="normal"
                            theme="light"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={cargando}
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: cargando ? 'not-allowed' : 'pointer',
                            opacity: cargando ? 0.7 : 1
                        }}
                    >
                        {cargando ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                    
                    <div style={{ 
                        textAlign: 'center', 
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    }}>
                        <a href="/registro" style={{ 
                            color: '#4CAF50',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            ¿No tienes cuenta? Regístrate
                        </a>
                        <a href="/recuperar" style={{ 
                            color: '#666',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </form>
                
                {/* Usuarios de prueba */}
                <div style={{ 
                    marginTop: '30px', 
                    paddingTop: '20px', 
                    borderTop: '1px solid #eee' 
                }}>
                    <p style={{ 
                        textAlign: 'center', 
                        color: '#666', 
                        marginBottom: '10px',
                        fontSize: '14px'
                    }}>
                        <strong>Usuarios de prueba:</strong>
                    </p>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '10px',
                        flexWrap: 'wrap'
                    }}>
                        <button 
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '13px',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setForm({
                                    nombUsuario: 'admin',
                                    contrasenia: 'admin123'
                                });
                            }}
                        >
                            ADMIN
                        </button>
                        <button 
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '13px',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setForm({
                                    nombUsuario: 'juanito',
                                    contrasenia: '12345678'
                                });
                            }}
                        >
                            CLIENTE
                        </button>
                        <button 
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '13px',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setForm({
                                    nombUsuario: 'maria',
                                    contrasenia: '12345678'
                                });
                            }}
                        >
                            EMPLEADO
                        </button>
                    </div>
                    <p style={{ 
                        textAlign: 'center', 
                        color: '#999', 
                        marginTop: '8px',
                        fontSize: '12px'
                    }}>
                        Haz clic para autocompletar
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;