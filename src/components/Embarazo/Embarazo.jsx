import React from "react";
import { Link } from "react-router-dom";
import "./embarazo.css";

const Embarazo = () => {
  return (
    <div>
      <h1 className="font">Presupuesto para Sesion de Embarazo</h1>
      <p>Aquí iría la información sobre el presupuesto para Embarazo.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Embarazo;
