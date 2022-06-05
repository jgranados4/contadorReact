import "./App.css";
import Boton from "./Componentes/Boton";
import freeImagen from "./imageness/codefree.png";
import Contador from "./Componentes/contador";
import { useState } from "react";

function App() {
  const [numeroclick, setnumeroclick] = useState(0);
  const manejarclick = () => {
    setnumeroclick(numeroclick + 1);
  };
  const reiniciarContador = () => {
    setnumeroclick(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeImagen}
          alt="logo de freeCodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numeroclick={numeroclick} />
        <Boton texto="click" esbotonClick={true} manejarClick={manejarclick} />
        <Boton
          texto="Reinicar"
          esbotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
