import React from 'react';

const Componete1=({titulo, datos})=>{

  const datosFiltraditos = datos.filter(dato=>dato.edad>29)
  return(
    <div>
      <h1>{titulo}</h1>
     <ul>
      {datos.map(({id, nombre, edad})=>(
        <li key={id}>
          {nombre} - {edad} años
        </li>
      ))}
      </ul> 

      <h1>Datos filtrados</h1>
      <ul>
        {datosFiltraditos.map(({id,nombre,edad})=>(
          <li key={id}>
            {nombre} - {edad} años
          </li>
        ))}
      </ul>
    </div>
  )
  }
  export default Componete1;