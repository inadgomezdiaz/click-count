import './App.css';
import logoClickCounter from "./images/logo-clickcounter.png";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import {useState} from "react"
import React from "react"


function App() {
  
  const [numeroClicks,setNumeroClick] = useState(0)

  const manejarClick = () => {
    setNumeroClick (numeroClicks + 1 );
  }
  const reinciarContador = () => {
    setNumeroClick (0);
  }
  return (
    <div className="App">
      <div className="contenedor-logo">
        <img className="logo-clickcounter"
          src={logoClickCounter}
          alt="logo de click counter" />
      </div>
      <div className="contenedor-counter">
        <Contador
        numeroClicks={numeroClicks}/>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reinciarContador} />
      </div>
    </div>
  );
}

export default App;
