import React from "react";
import { Link } from "react-router-dom";

const Galeria = () => {
  return (
    <div>
      <h1>Galería de Fotografías</h1>
      <p>Aquí irían las imágenes de la galería.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Galeria;
