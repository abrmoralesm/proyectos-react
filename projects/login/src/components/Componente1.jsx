import React, { useState } from "react";
import fruits from "../Data";

const Componente1 = () => {
  const [fruitList, setFruitList] = useState(fruits);
  const [newFruit, setNewFruit] = useState("");
  const [newColor, setNewColor] = useState("");

  const handleAddFruit = () => {
    const updatedList = [...fruitList, { name: newFruit, color: newColor }];
    setFruitList(updatedList);
    setNewFruit("");
    setNewColor("");
  };

  return (
    <div>
      <h2>Listado de Frutas:</h2>
      <ul>
        {fruitList.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - {fruit.color}
          </li>
        ))}
      </ul>
      <input
        type='text'
        value={newFruit}
        placeholder='Fruta'
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <input
        type='text'
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        placeholder='Color'
      />

      <button onClick={handleAddFruit}>Agregar Fruta</button>
    </div>
  );
};

export default Componente1;
