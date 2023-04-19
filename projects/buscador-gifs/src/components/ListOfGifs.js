import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword})
    .then(gifs => setGifs(gifs));
    //console.log(gifs
    //setGifs(DIFERENT_GIFS)
  }, [keyword]);

  return gifs.map(({ id, title, type, url }) => (
    <Gif key={id} type={type} id={id} title={title} url={url} />
  ));
}
