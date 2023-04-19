import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter"
import SignUpBanner from "./components/SignUpBanner";



function App() {
  return (
    <div className="App">
      <SignUpBanner/>
      <section className="App-content">
        <h1>Jar</h1>
        <Link to="/gif/akira">Gifs de Akira</Link>
        <Link to="/gif/eevee">Gifs de Eevee</Link>
        <Link to="/gif/pikachu">Gifs de Pikachu</Link>

        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
