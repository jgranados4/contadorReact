import React from "react";
import "../hoja-estilo/boton.css"
//funcion
function Boton({texto, esbotonClick, manejarClick}) {
  return (
    <button
      className={esbotonClick ? " boton-click" : "boton-reinicar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}
export default Boton;
