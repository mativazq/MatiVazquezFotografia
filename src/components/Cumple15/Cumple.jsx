import React from "react";
import { Link } from "react-router-dom";
import "./cumple.css";

const Cumple = () => {
  return (
    <div>
      <h1>Presupuesto para Cumpleaños de 15</h1>
      <p>Aquí iría la información sobre el presupuesto para Cumpleaños de 15.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Cumple;
