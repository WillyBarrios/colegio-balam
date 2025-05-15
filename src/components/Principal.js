import React, { useState, useRef, useEffect } from 'react';
import './Principal.css';
import { Link } from 'react-router-dom';


function ContenidoPrincipal() {
    const [navActive, setNavActive] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');
    const navLinksRef = useRef(null);
    const burgerRef = useRef(null);
    const navbarRef = useRef(null);
    const darkModeToggleRef = useRef(null);

    const handleBurgerClick = () => {
        setNavActive(!navActive);
    };

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
        if (darkMode) {
            document.body.classList.add('dark-mode');
            navbarRef.current.classList.add('dark-mode-navbar');
            darkModeToggleRef.current.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            navbarRef.current.classList.remove('dark-mode-navbar');
            darkModeToggleRef.current.textContent = 'Modo Oscuro';
        }
    }, [darkMode]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navActive && navLinksRef.current && !navLinksRef.current.contains(event.target) && burgerRef.current && !burgerRef.current.contains(event.target)) {
          setNavActive(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [navActive]);


    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            if (navbarRef.current) {
                navbarRef.current.classList.add('dark-mode-navbar');
            }
            if (darkModeToggleRef.current) {
                darkModeToggleRef.current.textContent = 'Modo Claro';
            }
        }
    }, []);


    return (
        <>
            <header>
                <nav className={`navbar ${darkMode ? 'dark-mode-navbar' : ''}`} ref={navbarRef}>
                    <div className="logo">
                      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo Colegio Balam" />
                    </div>
                   <ul className={`nav-links ${navActive ? 'nav-active' : ''}`} ref={navLinksRef}>
    <li><Link to="/Bienvenida">Inicio</Link></li> {/* O simplemente to="/" si WelcomeSection es tu ruta index */}
    <li><Link to="/Conocenos">Conócenos</Link></li> {/* Asegúrate que la ruta coincide con App.js */}
    <li><Link to="/Galeria">Galería</Link></li>   {/* Asegúrate que la ruta coincide con App.js */}
    <li><Link to="/Eventos">Eventos</Link></li> {/* Añade la ruta correcta cuando tengas el componente Eventos */}
    <li><Link to="/CarrerasGrid">Carreras</Link></li> {/* Cambiado de ./CarrerasGrid a /CarrerasGrid */}
    <li><Link to="/PreRegistro">Preregistro</Link></li> {/* Asegúrate que la ruta coincide con App.js */}
</ul>
                    <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={handleBurgerClick} ref={burgerRef}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <button id="darkModeToggle" onClick={handleDarkModeToggle} ref={darkModeToggleRef}>
                        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                    </button>
                </nav>
            </header>

        </>
      
    );
}

export default ContenidoPrincipal;

