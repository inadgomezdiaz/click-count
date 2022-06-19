import React from "react";
import "../hojas-de-estilo/contador.css"


function Contador({ numeroClicks }) {
  return (
    <div className="contador">
      {numeroClicks}
    </div>
  )
}
export default Contador