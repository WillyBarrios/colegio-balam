// Importación de React para crear componentes
import React from "react";

// Importación de estilos CSS personalizados para la sección de eventos
import "./Eventsection.css";

// Lista de eventos (array de objetos) que se mostrarán en pantalla
const events = [
  {
    id: 1,
    title: "Feria de Ciencias",
    description:
      "Los estudiantes expondrán proyectos de robótica, química y medio ambiente realizados durante el semestre.",
    image: process.env.PUBLIC_URL +"/images/1.jpg", // Ruta de la imagen del evento
  },
  {
    id: 2,
    title: "Día del Deporte",
    description:
      "Jornada completa de competencias deportivas interclases para fomentar la actividad física y el trabajo en equipo.",
    image: process.env.PUBLIC_URL +"/images/2.jpg",
  },
  {
    id: 3,
    title: "Festival de Talentos",
    description:
      "Una noche especial donde los estudiantes demuestran sus habilidades en canto, baile, teatro y más.",
    image: process.env.PUBLIC_URL +"/images/3.jpg",
  },
  {
    id: 4,
    title: "Excursión Educativa",
    description:
      "Viaje al zoológico y al museo de historia natural para reforzar aprendizajes en biología y ciencias sociales.",
    image: process.env.PUBLIC_URL +"/images/4.jpg",
  },
  {
    id: 5,
    title: "Semana Cultural",
    description:
      "Actividades artísticas, desfiles, trajes típicos y exposición de tradiciones de Guatemala y el mundo.",
    image: process.env.PUBLIC_URL +"/images/5.jpg",
  },
  {
    id: 6,
    title: "Concurso de Matemática",
    description:
      "Prueba académica para premiar a los mejores estudiantes en resolución de problemas y lógica.",
    image: process.env.PUBLIC_URL +"/images/6.jpg",
  },
];

// Definición del componente funcional Eventsection
const Eventsection = () => {
  return (
    // Sección principal con clase CSS para estilos
    <section className="event-section">
      {/* Título principal de la sección */}
      <h1 className="section-title">Eventos Escolares</h1>

      {/* Contenedor de todas las tarjetas de eventos */}
      <div className="events-column">
        {/* Recorremos cada evento del array y generamos una tarjeta */}
        {events.map((event) => (
          // Cada tarjeta tiene una key única (requisito de React)
          <div key={event.id} className="event-card-vertical">
            {/* Imagen del evento */}
            <img
              src={event.image} // Ruta de la imagen
              alt={event.title} // Texto alternativo por accesibilidad
              className="event-image-vertical" // Clase para estilos
            />

            {/* Contenedor con la información del evento */}
            <div className="event-info">
              <h2>{event.title}</h2> {/* Título del evento */}
              <p>{event.description}</p> {/* Descripción del evento */}

              {/* Botón para interacción futura (por ejemplo, abrir modal o redireccionar) */}
              <button className="event-button">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exportación del componente para poder usarlo en otros archivos
export default Eventsection;