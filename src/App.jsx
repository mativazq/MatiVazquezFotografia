import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BotonesPresupuestos from "./components/BotonesPresupuestos/BotonesPresupuestos";
import Contacto from "./components/Contacto/Contacto";
import Titulo from "./components/Titulo/Titulo";
import Casamiento from "./components/Casamiento/Casamiento";
import Cumple from "./components/Cumple15/Cumple";
import Embarazo from "./components/Embarazo/Embarazo";
import Fiesta from "./components/FiestaPrivada/Fiesta";
import Recepcion from "./components/Recepcion/Recep";
import Sesion from "./components/SesionIndividual/Sesion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casamiento" element={<Casamiento />} />
        <Route path="/cumple" element={<Cumple />} />
        <Route path="/embarazo" element={<Embarazo />} />
        <Route path="/fiesta" element={<Fiesta />} />
        <Route path="/recep" element={<Recepcion />} />
        <Route path="/sesion" element={<Sesion />} />
      </Routes>
    </Router>
  );
}

// Página principal
const Home = () => (
  <>
    <Titulo />
    <BotonesPresupuestos />
    <Contacto />
  </>
);

export default App;
