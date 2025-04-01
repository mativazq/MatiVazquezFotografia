import React from "react";
import { Link } from "react-router-dom";
import "./fiesta.css";

const Fiesta = () => {
  return (
    <div>
      <h1 className="font">Presupuesto para Fiestas Privadas</h1>
      <p>Aquí iría la información sobre el presupuesto para Fiestas.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Fiesta;
