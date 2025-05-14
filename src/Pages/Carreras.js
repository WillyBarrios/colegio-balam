import React from 'react';
import CarrerasGrid from '../components/CarrerasGrid';
import ContenidoPrincipal from '../components/Principal';

function Carrera() {
    return (
        
        <div className="App">
            <ContenidoPrincipal/>
            <CarrerasGrid />
           
        </div>
    );
}

export default Carrera;