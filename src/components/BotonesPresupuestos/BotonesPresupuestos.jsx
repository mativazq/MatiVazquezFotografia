import React from "react";
import { useNavigate } from "react-router-dom";
import "./botonesPresupuestos.css";

const BotonesPresupuestos = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="rock-salt-regular">Elegi el presupuesto que más te guste:</h2>
      <button className="buttons" onClick={() => navigate("/casamiento")}>Casamiento</button>
      <button className="buttons" onClick={() => navigate("/cumple")}>Cumpleaños de 15</button>
      <button className="buttons" onClick={() => navigate("/recep")}>Recepción</button>
      <button className="buttons" onClick={() => navigate("/embarazo")}>Embarazo</button>
      <button className="buttons" onClick={() => navigate("/fiesta")}>Fiesta Privada</button>
      <button className="buttons" onClick={() => navigate("/sesion")}>Sesión Individual</button>
      <p className="texto">
        Los siguientes presupuestos tienen un valor de 10 días posterior a la fecha de consulta.
      </p>
      <p>
        El servicio se contrata con una seña del 15% del total y se congela el valor durante 90 días.
      </p>
      <p>
        Transcurrido ese tiempo, el valor se actualizará con un incremento mensual del 15% sobre el saldo restante.
      </p>
      <p>Al señar el mismo se reserva la exclusividad de la fecha y se coordina una reunión entre partes.</p>
    </>
  );
};

export default BotonesPresupuestos;
