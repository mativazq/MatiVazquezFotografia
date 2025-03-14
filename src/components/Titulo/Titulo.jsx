import React from "react";
import "./titulo.css";
import mvLogo from "../../Images/Logo-color2.png";

const Titulo = () => {
  return (
    <>
      <h1 className="rock-salt-regular">Bienvenidos a Mati Vazquez Fotografia</h1>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={mvLogo} className="logo" alt="logo MV" />
        </a>
      </div>
    </>
  );
};

export default Titulo;
