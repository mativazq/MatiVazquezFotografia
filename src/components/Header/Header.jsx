import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {
  return (
    <header className="header rock-salt-regular">
      <nav>
        <ul className="nav-links">
          <li><Link to="/presupuestos">Presupuestos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
