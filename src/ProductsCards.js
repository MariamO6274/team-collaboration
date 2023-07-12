import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const ProductsCards = (props) => {
  const { title, image, description, price } = props;
  const [products, setproducts] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setproducts(json);
          });
      }, 2000);
    }, []);
  return (
    <>
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="cards">
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <hr />
                  <p>{description}</p>
                  <h3>$ {price}</h3>
                </div>
                <img src={image} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsCards;
