import React from "react";
import Principal from "./components/Principal";
import Bienvenida from "./components/Bienvenida";
import Conocenos from "./components/Conocenos"; // Importas el componente Conocenos
import Nosotros from "./components/Nosotros"; // Importas el componente Conocenos
import Galeria from "./components/Galeria";
function App() {
  return (
    <div className="App">
      <Principal />
      <Bienvenida />
      <Conocenos />
      <Nosotros />
      <Galeria />
      {/* Otros componentes o contenido */}
    </div>
  );
}

export default App;
