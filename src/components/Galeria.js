import React, { useRef } from "react";
import "./Galeria.css";

function Galeria() {
  const scrollRefs = [useRef(null), useRef(null), useRef(null)];

  const scroll = (index, direction) => {
    const ref = scrollRefs[index].current;
    if (direction === "left") {
      ref.scrollLeft -= 200;
    } else {
      ref.scrollLeft += 200;
    }
  };

  const carousels = [
    {
      title: "MODERNAS INSTALACIONES",
      images: [
        "/images/college.avif",
        "/images/college1.avif",
        "/images/field.avif",
        "/images/fondo.jpg",
        "/images/library.jpg",
        "/images/study.jpg",
      ],
    },
    {
      title: "EXCELENTE EQUIPO DE TRABAJO",
      images: [
        "/images/college.avif",
        "/images/field.avif",
        "/images/fondo.jpg",
        "/images/study.jpg",
        "/images/library.jpg",
      ],
    },
    {
      title: "DISFRUTA APRENDIENDO",
      images: [
        "/images/college.avif",
        "/images/field.avif",
        "/images/fondo.jpg",
        "/images/study.jpg",
        "/images/library.jpg",
      ],
    },
  ];

  return (
    <div className="app">
      {carousels.map((carousel, idx) => (
        <div className="carousel-row" key={idx}>
          <h2>{carousel.title}</h2>
          <div className="carousel-container">
            <button className="arrow" onClick={() => scroll(idx, "left")}>
              ←
            </button>
            <div className="carousel" ref={scrollRefs[idx]}>
              {carousel.images.map((img, index) => (
                <img key={index} src={img} alt={`img-${index}`} />
              ))}
            </div>
            <button className="arrow" onClick={() => scroll(idx, "right")}>
              →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Galeria;
