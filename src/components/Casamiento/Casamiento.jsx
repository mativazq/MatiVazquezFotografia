import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./casamiento.css"; // Archivo de estilos opcional
import Contacto from "../Contacto/Contacto";


const Casamiento = () => {
  const navigate = useNavigate();

  return (
    <div className="casamiento-container">
      <h1 className="font">Presupuestos para Casamiento</h1>

      <div className="presupuesto">
        <h2 className="font">Paquete Básico</h2>
        <p>Incluye cobertura de la ceremonia y 50 fotos editadas en alta calidad.</p>
        <p>Precio: $XX.XXX</p>
      </div>

      <div className="presupuesto">
        <h2 className="font">Paquete Intermedio</h2>
        <p>Incluye cobertura completa del evento, 100 fotos editadas y un álbum digital.</p>
        <p>Precio: $XX.XXX</p>
      </div>

      <div className="presupuesto">
        <h2 className="font">Paquete Premium</h2>
        <p>Incluye cobertura completa, sesión pre-boda, video resumen y álbum físico.</p>
        <p>Precio: $XX.XXX</p>
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

