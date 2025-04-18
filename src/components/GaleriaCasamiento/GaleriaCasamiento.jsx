import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- IMPORTANTE
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./galeriaCasamiento.css";

const GaleriaCasamientos = () => {
    const navigate = useNavigate();
  const imagenes = [
    "https://i.imgur.com/zNESNwY.jpg",
    "https://i.imgur.com/N6NS8qS.jpg",
    "https://i.imgur.com/9LcUtK4.jpg",
    "https://i.imgur.com/SgaBZdY.jpg",
    "https://i.imgur.com/y0JLolz.jpg",
    "https://i.imgur.com/LzRxKCn.jpg",
    "https://i.imgur.com/g9OWTdB.jpg",
    "https://i.imgur.com/yuBP3Ze.jpg",
    "https://i.imgur.com/Jez8R0P.jpg",
    "https://i.imgur.com/vajYbpL.jpg",
    "https://i.imgur.com/MRnTsBX.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const abrirLightbox = (indice) => {
    setIndex(indice);
    setOpen(true);
  };

  return (
    <div>
      <h1>Galería de Casamientos</h1>

      <div className="galeria-container">
        {imagenes.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Casamiento ${idx + 1}`}
            className="galeria-imagen"
            onClick={() => abrirLightbox(idx)}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imagenes.map((src) => ({ src }))}
      />


      <div className="volver-container">
        <button className="volver-button" onClick={() => navigate("/casamiento")}>
          Volver a Casamientos
        </button>
      </div>
    </div>
  );
};

export default GaleriaCasamientos;