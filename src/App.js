import "./App.css";
import Boton from "./Componentes/Boton";
import freeImagen from "./imageness/codefree.png";

function App() {
  const manejarclick=()=>{
    console.log("Clic")
  }
  const reiniciarContador=()=>{
    console.log("Reinicar")
  }
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
        <Boton
        texto='click'
        esbotonClick={true}
        manejarClick={manejarclick}/>
        <Boton
        texto='Reinicar'
        esbotonClick={false}
        manejarClick={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
