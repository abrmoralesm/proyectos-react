import React, {useState} from 'react';

const Componente3 =({datos, titulo})=>{
    const [indice, setIndice]= useState(0);

    const avanzar=()=>{
        if(indice<datos.length-1){
            setIndice(indice+1)
        } else{
            setIndice(0);
        }
    }
 
const retroceder= ()=>{
    if (indice>0){
        setIndice(indice-1)
    } else {setIndice(datos.length-1)}
}
const nombreActual = datos[indice]?.nombre;
const edadActual = datos[indice]?.edad;

    return (
      <div>
        <h1>{titulo}</h1>
        <button onClick={retroceder}>Retroceder</button>
        <button onClick={avanzar}>Avanzar</button>

        <p>
          Nombre: {nombreActual} - Edad: {edadActual} años
        </p>
      </div>
    );
}

export default Componente3;