import React from "react";
import "./App.css";

const ProductsCards = (props) => {
  console.log(props);

  const products = props.productData;

  return (
    <>
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="cards">
                <div className="card-content">
                  <img src={product.image} />
                  <h3>{product.title}</h3>
                  <h4>$ {product.price}</h4>
                  <hr />
                  <p>{product.description}</p>
                </div>
                <button>Buy</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsCards;
