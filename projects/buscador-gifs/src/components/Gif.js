import React from "react";
import './Gif.css'

export default function Gif({ title, id,type, url }) { 
    return (
      <a href={`#${id}`}  className="Gif">
        <h4>{title}</h4>
        <small>{id}</small>
        <small>{type}</small>
        <img alt={title} src={url} />
      </a>
    );
}