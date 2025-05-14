import React from 'react';
import './Bienvenida.css';
import ContenidoPrincipal from './Principal.js'; 
/*import logo from './logo.png';*/


function WelcomeSection() {
    return (
        <div className="welcome-container">
            <div className='logo-container'>
                 <img className='welcome-logo'   src = './images/logo.png' alt="Logo Colegio Balam" />
                 </div>
            <div className="welcome-card">
                <h1>Bienvenido a Balam</h1>
                <p>Balam es la primera escuela tecnológica educativa en Guatemala.</p>
                <p>Balam aprovecha las tecnologías novedosas para dar una educación de calidad.</p>
                <p>Todas las carreras tienen una base en común y a partir del segundo trimestre empiezan las especialidades.</p>
                <button className="learn-more-button">Quiénes somos</button>
            </div>
            <ContenidoPrincipal />
        </div>
    );
   
}

export default WelcomeSection;