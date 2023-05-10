import React from "react";
import { useState } from "react";

const Componente2= ({datos, titulo})=>{

const [formulario, setFormulario] = useState({
    nombre: 'Abraham',
    apellido: 'Morales',
    email: 'dedede@edede.es'
})

    const [texto, setTexto] = useState("Chonflus");
    const [numero, setNumero] = useState(0)
    function cambio(){
        setNumero(numero+1)
    }
    function handleChange(e){
        setTexto(e.target.value)
    }
   
   const datosFiltrados = datos.filter(({edad})=>edad>24)

   return (
     <div>

<label>
    Nombre:
    <input value={formulario.nombre}
    onChange={e=>{
        setFormulario({
            ...formulario,
            nombre:e.target.value
        })
    }}
    />
</label>
<label>
    Apellido
    <input value={formulario.apellido}
    onChange={e=>{
        setFormulario({
            ...formulario,
            apellido:e.target.value
        })
    }}
    />
</label>
<label>
    Email
    <input value={formulario.email} 
    onChange={e=>{
        setFormulario({
            ...formulario,
            email:e.target.value
        })
    }}
    />
</label>

        <p>{formulario.nombre} {' '}{formulario.apellido}{' '}{formulario.email}</p>
        <button onClick={cambio}>Has pulsado {numero}</button>
       <input value={texto} onChange={handleChange} />
       <p>Has escrito {texto}</p>
       <h1>{titulo}</h1>
       <ul>
         {datosFiltrados.map(({ id, nombre, edad }) => (
           <li key={id}>
             {nombre} - {edad} años
           </li>
         ))}
       </ul>
     </div>
   );
}

export default Componente2;
