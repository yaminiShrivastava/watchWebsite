import React from "react";

export default function StoreCard(props) {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="store" />
      <h2>{props.name}</h2>
      <p className="Address">{props.address}</p>
      <p>{props.mobile}</p>
      
    </div>
  );
}