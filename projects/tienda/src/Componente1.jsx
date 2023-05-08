import React from 'react';
const Componente1 = ({datos, titulo}) => {
return(
  <div>
    <h1>{titulo}</h1>
    <ul>
      {datos.map(({id,nombre,edad})=>(
        <li key={id}>
          {nombre} - {edad}años
          </li>
      ))}
    </ul>
  </div>
);
}

export default Componente1;