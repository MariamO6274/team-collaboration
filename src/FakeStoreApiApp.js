import React, { useState } from "react";
import { useEffect } from "react";
import ProductsCards from "./ProductsCards";
import "./App.css";

const FakeStoreApiApp = () => {
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
      {/* <ProductsCards
        title=""
        description
        image
      /> */}
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

export default FakeStoreApiApp;
