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
        process.env.PUBLIC_URL +"/images/college.avif",
        process.env.PUBLIC_URL +"/images/college1.avif",
        process.env.PUBLIC_URL +"/images/field.avif",
        process.env.PUBLIC_URL +"/images/fondo.jpg",
        process.env.PUBLIC_URL +"/images/library.jpg",
        process.env.PUBLIC_URL +"/images/study.jpg",
      ],
    },
    {
      title: "EXCELENTE EQUIPO DE TRABAJO",
      images: [
        process.env.PUBLIC_URL +"/images/college.avif",
        process.env.PUBLIC_URL +"/images/field.avif",
        process.env.PUBLIC_URL +"/images/fondo.jpg",
        process.env.PUBLIC_URL +"/images/study.jpg",
        process.env.PUBLIC_URL +"/images/library.jpg",
      ],
    },
    {
      title: "DISFRUTA APRENDIENDO",
      images: [
       process.env.PUBLIC_URL + "/images/college.avif",
        process.env.PUBLIC_URL +"/images/field.avif",
        process.env.PUBLIC_URL +"/images/fondo.jpg",
       process.env.PUBLIC_URL + "/images/study.jpg",
        process.env.PUBLIC_URL +"/images/library.jpg",
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
