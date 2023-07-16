import React from "react";
import "./App.css";

const ProductCard = (props) => {
  console.log(props);
  const { title, image, price, description } = props;

  return (
    <>
      <div className="cards">
        <div className="card-content">
          <img src={image} />
          <h3>{title}</h3>
          <h4>$ {price}</h4>
          <hr />
          <p>{description}</p>
        </div>
        <button>Buy</button>
      </div>
    </>
  );
};

export default ProductCard;
