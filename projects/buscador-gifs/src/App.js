import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

  const GIFS = [
    "https://media1.giphy.com/media/QoCoLo2opwUW4/200w.webp?cid=ecf05e47x9ub5lbhjktsj4g74z3d7s595570wvzi910zmc6m&rid=200w.webp&ct=g",
    "https://media0.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47x9ub5lbhjktsj4g74z3d7s595570wvzi910zmc6m&rid=giphy.gif&ct=g",
  ];

  const DIFERENT_GIFS = [
    "https://media2.giphy.com/media/aUhEBE0T8XNHa/giphy.gif?cid=ecf05e47x9ub5lbhjktsj4g74z3d7s595570wvzi910zmc6m&rid=giphy.gif&ct=g",
  ];
function App() {
    const [gifs, setGifs] = useState(
    GIFS
  );
  useEffect(function (){
setGifs(DIFERENT_GIFS)},[]);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif=><img src={singleGif} />)
          // console.log(gifs
        }
       
      </section>
    </div>
  );
}

export default App;
