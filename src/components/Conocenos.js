// src/components/Conocenos.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Conocenos.css";

const Conocenos = () => {
  const swiperRef = useRef(null);

  // Función para detener o iniciar autoplay solo si es el slide activo
  const handleMouse = (e, action) => {
    const slide = e.currentTarget.closest(".swiper-slide");
    if (slide?.classList.contains("swiper-slide-active")) {
      if (action === "stop") {
        swiperRef.current?.autoplay.stop();
      } else {
        swiperRef.current?.autoplay.start();
      }
    }
  };

  return (
    <div className="conocenos-section">
      <h2 className="conocenos-title">NUESTRAS ACTIVIDADES</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="conocenos-swiper"
      >
        <SwiperSlide>
          <div
            className="slide-content"
            onMouseEnter={(e) => handleMouse(e, "stop")}
            onMouseLeave={(e) => handleMouse(e, "start")}
          >
            <img
              src="images/convivencia.jpg"
              alt="Misión"
              className="carousel-image"
            />
            <div className="legend">
              <h3>Semana de la Convivencia Escolar</h3>
              <hr />
              <p>
                Qué es: Juegos cooperativos, debates, talleres de emociones,
                actividades anti-bullying y charlas con invitados. Objetivo:
                Fomentar el respeto, la empatía y la amistad.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            onMouseEnter={(e) => handleMouse(e, "stop")}
            onMouseLeave={(e) => handleMouse(e, "start")}
          >
            <img
              src="images/arte.jpg"
              alt="Festival Artístico"
              className="carousel-image"
            />
            <div className="legend">
              <h3>Festival Artístico y Cultural</h3>
              <hr />
              <p>
                Qué es: Exhibiciones de pintura, teatro, música, danza,
                cortometrajes y moda reciclada hechos por los estudiantes.
                Objetivo: Expresión libre + reconocimiento al talento de cada
                uno.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            onMouseEnter={(e) => handleMouse(e, "stop")}
            onMouseLeave={(e) => handleMouse(e, "start")}
          >
            <img
              src="images/deporte.jpg"
              alt="Jornada Deportiva"
              className="carousel-image"
            />
            <div className="legend">
              <h3>Jornada Deportiva</h3>
              <hr />
              <p>
                Qué es: Competencias deportivas, desafíos en equipo y pruebas
                recreativas. A veces con temática (juegos del agua, día sin
                zapatillas, etc.). Objetivo: Fomentar la salud, la unión y la
                sana competencia.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            onMouseEnter={(e) => handleMouse(e, "stop")}
            onMouseLeave={(e) => handleMouse(e, "start")}
          >
            <img
              src="images/lectura.jpg"
              alt="Maratón de Lectura"
              className="carousel-image"
            />
            <div className="legend">
              <h3>Maratón de Lectura</h3>
              <hr />
              <p>
                Qué es: Lecturas dramatizadas, cuentacuentos, concursos de
                escritura, club del libro, intercambio de libros entre cursos.
                Objetivo: Fomentar el gusto por la lectura y la imaginación.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            onMouseEnter={(e) => handleMouse(e, "stop")}
            onMouseLeave={(e) => handleMouse(e, "start")}
          >
            <img
              src="images/ciencia.jpg"
              alt="Feria de Ciencias"
              className="carousel-image"
            />
            <div className="legend">
              <h3>Feria de Ciencias, Tecnología y Medioambiente</h3>
              <hr />
              <p>
                Qué es: Presentación de experimentos, proyectos tecnológicos,
                eco-inventos y soluciones sostenibles creadas por los
                estudiantes. Objetivo: Despertar el interés científico y el
                compromiso con el planeta.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Conocenos;
