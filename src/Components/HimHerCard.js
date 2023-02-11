import React from "react";

export default function HimHerCard(props) {
  return (
    <div className="card">
        <div className="upper_body_card">
            <img className="image" src={props.image} alt="product" />
            <div className="gender">For{props.gender}</div>
        </div>
        <button className="shopNow customised btn btn-secondary"><i className="fa-solid fa-angles-right"></i></button>
        
    </div>
  );
}