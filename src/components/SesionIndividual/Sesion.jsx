import React from "react";
import { Link } from "react-router-dom";
import "./sesion.css";

const Sesion = () => {
  return (
    <div>
      <h1>Presupuesto para Sesion Privada</h1>
      <p>Aquí iría la información sobre el presupuesto para Sesion Privada.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Sesion;
