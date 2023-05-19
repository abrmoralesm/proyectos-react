import React from "react";
import fruits from "../Data";
import { useState } from "react";


const Componente2 = () => {
  const redFruits = fruits.filter((fruit) => fruit.color === "rojo");
const [numero, setNumero] = useState(0);
function cambio(){
  setNumero(numero+1)
}


  return (
    <div>
    <button onClick={cambio}>HAs pulsado {numero} veces</button>
      <h2>Listado de Frutas Rojas:</h2>

      <ul>
        {redFruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - {fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Componente2;
