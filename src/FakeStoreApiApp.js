import React, { useState } from "react";
import { useEffect } from "react";
import ProductsCards from "./ProductsCards";
import "./App.css";

// You’ll get this 20 products, out of this 20 products, you show all this 20 products in cards,
// You create a drop down for addending and dissenting orders..sorting

const FakeStoreApiApp = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setTimeout(()=> {

        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setproducts(json); // save 20 obj to the state for re-render
        });
    }, 2000)
  }, []);

  return (
    <>
      <ProductsCards/>
      <div className="container">
        <div className="box">
            <div className="content">
                <h5>Title</h5>
                <p>Description</p>
            </div>
            <h1>Products Images</h1>
        </div>
      </div>
    </>
  );
};

export default FakeStoreApiApp;
