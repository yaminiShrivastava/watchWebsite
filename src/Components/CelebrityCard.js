import React from "react";

export default function StoreCard(props) {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="Celebrity" />
      <h2>{props.name}</h2>
      <p className="model">{props.model}</p>
      
    </div>
  );
}