import React from "react";
import "./titulo.css";
import mvLogo from "../../Images/Logo-negro.png";

const Titulo = () => {
  return (
    <>
      <h1 className="rock-salt-regular">Bienvenidos a Mati Vazquez Fotografia</h1>
      <div>
        <a>
          <img src={mvLogo} className="logo" alt="logo MV" />
        </a>
      </div>
    </>
  );
};

export default Titulo;
