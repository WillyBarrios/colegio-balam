// En un nuevo archivo components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ContenidoPrincipal from './Principal'; // Asegúrate que esta ruta es correcta a tu barra de navegación

function Layout() {
  return (
    <>
      <ContenidoPrincipal /> {/* Tu barra de navegación */}
      <main>
        <Outlet /> {/* Aquí se renderizará el contenido de la página actual */}
      </main>
    </>
  );
}

export default Layout;