import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./casamiento.css"; 
import Contacto from "../Contacto/Contacto";


const Casamiento = () => {
  const navigate = useNavigate();

  return (
    <div className="casamiento-container">
      <h1 className="font">Presupuestos para Casamiento</h1>

      <div className="presupuesto">
        <h2 className="font">Paquete Básico</h2>
        <p>Incluye:</p>
        <p>- Cobertura total de la fiesta.</p>
        <p>- Total de las fotos editadas previamente via Drive.</p>
        <p>Valor: $450.000</p>
      </div>

      <div className="presupuesto">
        <h2 className="font">Paquete Intermedio</h2>
        <p>Incluye:</p>
        <p>- Cobertura previa al evento.</p>
        <p>- Cobertura total de la fiesta.</p>
        <p>- Total de las fotos editadas previamente via Drive.</p>
        <p>Valor: $520.000</p>
      </div>

      <div className="presupuesto">
        <h2 className="font">Paquete Premium</h2>
        <p>Incluye:</p>
        <p>- Cobertura previa al evento.</p>
        <p>- Cobertura total de la fiesta.</p>
        <p>- Sesion Post Boda (o civil).</p>
        <p>- Total de las fotos editadas previamente via Drive.</p>
        <p>Valor: $570.000</p>
      </div>
      <div  className="texto">
      <p>
        Los siguientes presupuestos tienen un valor de 10 días posterior a la fecha de consulta.
      </p>
      <p>
        El servicio se contrata con una seña del 15% del total y se congela el valor durante 90 días.
      </p>
      <p>
        Transcurrido ese tiempo, el valor se actualizará con un incremento mensual del 15% sobre el saldo restante.
      </p>
      <p>Al señar el mismo se reserva la exclusividad de la fecha y se coordina una reunión entre partes.</p>
      </div>

      <div>
      <button className="boton-galeria" onClick={() => navigate("/galeria-casamientos")}>
        Ver Galería de Casamientos
      </button>
    </div>
      <Contacto /> 
      <Link to="/">Volver al inicio</Link>
  </div>
  );
};

export default Casamiento;

