import React from "react";

const Componente1=(props) =>{
const {datos, titulo} = props;
    return (
      <div>
        <h1>{titulo}</h1>
        <ul>
          {datos.map((dato) => (
            <li key={dato.id}>
              {dato.nombre} - {dato.edad} años
            </li>
          ))}
        </ul>
      </div>
    );
}


export default Componente1;
