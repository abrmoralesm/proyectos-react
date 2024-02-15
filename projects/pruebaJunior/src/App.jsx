
import { useState,useEffect } from 'react'
import './Jar.css'



const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

function App() {


const [fact, setFact] = useState()
const [imageUrl, setImageUrl] = useState()

//para recuperar la cita al cargar la página
useEffect(()=>{
  fetch(CAT_ENDPOINT_RANDOM_FACT)
  .then(res=>res.json())
  .then(data=>{
    const { fact } = data;
    setFact(fact);
   
  })
},[])

//para recuperar la imagen al cargar la página cada vez que tenemos una cita nueva
useEffect(()=>{ 
  if(!fact) return;
  const threeFirstWords = fact.split(" ").slice(0,3).join(" ");
    //const firstWord= fact.split(' ',3)
    console.log(threeFirstWords)
fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
.then(res=>res.json())
.then(response =>{
  const {url} = response
  setImageUrl(url)
})
},[fact])

const handleClick = () =>{
   fetch(CAT_ENDPOINT_RANDOM_FACT)
  .then(res=>res.json())
  .then(data=>{
    const { fact } = data;
    setFact(fact);
   
  })
}
  return (
    <main>
        <section>
        <h1>APP DE GATITOS</h1>
        <button onClick={handleClick}>Nuevo gatito</button>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt={`Ìmage extracted using the first three words of ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
export default App;