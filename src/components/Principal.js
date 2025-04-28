import React, { useState, useRef, useEffect } from 'react';
import './Principal.css';

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
                        <img src="/images/logo.png" alt="Logo Colegio Balam" />
                    </div>
                    <ul className={`nav-links ${navActive ? 'nav-active' : ''}`} ref={navLinksRef}>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Conocenos</a></li>
                        <li><a href="#">Galeria</a></li>
                        <li><a href="#">Eventos</a></li>
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

            <main>
                <section className="hero">
                    <h1>Bienvenido al Colegio Tecnológico Balam</h1>
                    <p>Formando líderes del mañana</p>
                    <button className="cta-button">¡Inscríbete ahora!</button>
                    
                </section>
            </main>
        </>
    );
}

export default ContenidoPrincipal;

