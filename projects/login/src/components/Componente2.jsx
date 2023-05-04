import React from "react";
import fruits from "../Data";

const Componente2 = () => {
  const redFruits = fruits.filter((fruit) => fruit.color === "rojo");

  return (
    <div>
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
