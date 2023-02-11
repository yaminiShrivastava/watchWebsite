import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="product" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button className=" customised btn btn-secondary"><i class="fa-solid fa-cart-shopping mx-2"></i>Add to Cart</button>
      </p>
    </div>
  );
}