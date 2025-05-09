import React, { useState } from "react";
import "./Nosotros.css";

const Nosotros = () => {
  const [flipped, setFlipped] = useState({
    mission: false,
    vision: false,
    about: false,
  });

  const handleFlip = (card) => {
    setFlipped((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  

  return (
    <div className="section-container">
      <div className="nosotros-header">
        <h2 className="nosotros-title">CONÓCENOS</h2>
        <hr className="nosotros-divider" />
      </div>

      <div className="cards-container">
        {/* Card Nosotros */}
        <div className={`flip-card ${flipped.about ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/nosotros.jpg" alt="Nosotros" />
              <h3 className="typing-title">Nosotros</h3>
              <p>
                Somos un equipo apasionado por la innovación, con años de
                experiencia en brindar servicios de calidad a nuestros clientes.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("about")}
              >
                Ver más{" "}
              </button>
            </div>
            <div className="flip-card-back">
              <h3>Más sobre nosotros</h3>
              <p>
                Conoce más detalles sobre nuestra trayectoria, el equipo que nos
                conforma, y nuestra pasión por la innovación y el desarrollo
                sostenible. Conoce más detalles sobre nuestra trayectoria, el
                equipo que nos conforma, y nuestra pasión por la innovación y el
                desarrollo sostenible. Conoce más detalles sobre nuestra
                trayectoria, el equipo que nos conforma, y nuestra pasión por la
                innovación y el desarrollo sostenible. Conoce más detalles sobre
                nuestra trayectoria.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("about")}
              >
                Volver
              </button>
            </div>
          </div>
        </div>

        {/* Card Visión */}
        <div className={`flip-card ${flipped.vision ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/vision.jpg" alt="Visión" />
              <h3 className="typing-title">Visión</h3>
              <p>
                Ser líderes en nuestro sector, reconocidos por la excelencia,
                responsabilidad social y compromiso con el medio ambiente.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("vision")}
              >
                Ver más
              </button>
            </div>
            <div className="flip-card-back">
              <h3>Visión Extendida</h3>
              <p>
                Detalles sobre nuestra visión de futuro, nuestra estrategia de
                liderazgo en el sector, y el impacto que queremos dejar en el
                mundo. Detalles sobre nuestra visión de futuro, nuestra
                estrategia de liderazgo en el sector, y el impacto que queremos
                dejar en el mundo. Detalles sobre nuestra visión de futuro,
                nuestra estrategia de liderazgo en el sector, y el impacto que
                queremos dejar en el mundo. Detalles sobre nuestra visión de
                futuro, nuestra estrategia de liderazgo en el sector, y el
                impacto que queremos dejar en el mundo.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("vision")}
              >
                Volver
              </button>
            </div>
          </div>
        </div>

        {/* Card Misión */}
        <div className={`flip-card ${flipped.mission ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/mision.png" alt="Misión" />
              <h3 className="typing-title">Misión</h3>
              <p>
                Nuestra misión es proporcionar soluciones innovadoras que
                impulsen el desarrollo sostenible y el bienestar de la
                comunidad.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("mission")}
              >
                Ver más
              </button>
            </div>
            <div className="flip-card-back">
              <h3>Misión Extendida</h3>
              <p>
                Aquí va más información sobre nuestra misión, visión a largo
                plazo, valores y cómo trabajamos para lograr nuestros objetivos
                a través de la innovación y la sostenibilidad. Aquí va más
                información sobre nuestra misión, visión a largo plazo, valores
                y cómo trabajamos para lograr nuestros objetivos a través de la
                innovación y la sostenibilidad. Aquí va más información sobre
                nuestra misión, visión a largo plazo, valores y cómo trabajamos
                para lograr nuestros objetivos a través de la innovación y la
                sostenibilidad.
              </p>
              <button
                className="arrow-button"
                onClick={() => handleFlip("mission")}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
