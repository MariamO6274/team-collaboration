import React, { useState } from "react";
import { useEffect } from "react";
import ProductsCards from "./ProductsCards";
import "./App.css";

// You’ll get this 20 products, out of this 20 products, you show all this 20 products in cards,
// You create a drop down for addending and dissenting orders..sorting

const FakeStoreApiApp = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setproducts(json); // save 20 obj to the state for re-render
        });
    }, 2000);
  }, []);

  return (
    <>
      <ProductsCards />
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="cards">
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <h3>$ {product.price}</h3>
                </div>
                <img src={product.image} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FakeStoreApiApp;
