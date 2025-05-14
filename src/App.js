
import React from "react";
// Importa Layout en lugar de Principal directamente en las rutas individuales
import Layout from "./components/Layout"; // Ajusta la ruta si es necesario
import WelcomeSection from "./components/Bienvenida";
import Conocenos from "./components/Conocenos";
import Nosotros from "./components/Nosotros";
import Galeria from "./components/Galeria";
import CarrerasGrid from "./components/CarrerasGrid";
import Eventsection from "./components/Eventos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreRegistro from "./components/PreRegistro";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* La ruta padre "/" ahora usa el componente Layout */}
          <Route path="/" element={<Layout />}>
            {/* La ruta "index" se renderizará cuando la URL sea exactamente "/" */}
            <Route index element={<WelcomeSection />} />
            {/* Otras rutas son hijas del Layout y se renderizarán dentro del <Outlet /> */}
            <Route path="Bienvenida" element={<WelcomeSection />} />
            <Route path="Conocenos" element={<Conocenos />} />
            <Route path="Nosotros" element={<Nosotros />} />
            <Route path="Galeria" element={<Galeria />} />
            <Route path="CarrerasGrid" element={<CarrerasGrid />} />
            <Route path="/Eventos" element={<Eventsection/>} />
            <Route path="PreRegistro" element={<PreRegistro/>} />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;