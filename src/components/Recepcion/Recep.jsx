import React from "react";
import { Link } from "react-router-dom";
import "./recep.css";

const Recepcion = () => {
  return (
    <div>
      <h1 className="font">Presupuesto para Recepcion</h1>
      <p>Aquí iría la información sobre el presupuesto para Recepcion.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Recepcion;
