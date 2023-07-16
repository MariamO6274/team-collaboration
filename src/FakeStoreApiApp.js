import React, { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";
import "./App.css";
import ProductCard from "./ProductCard";

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

    // useEffect(() => {
    //   setTimeout(async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();

    //     console.log(data);
    //     setproducts(data);
    //   }, 2000);
    // }, []);

  let renderedList = products.map((product) => {
    return (
      <ProductCard
        title={product.title}
        image={product.image}
        price={product.price}
        description={product.description}
      />
    );
  });

  console.log(renderedList);

  if (products.length == 0) {
    return <>Loading...!!!!!!</>;
  }

  const handelSort = () => {
    console.log(products)
    
  }
  return (
    <>
      <h1> 20 Products from Fake Store API</h1>
      <button onClick = {handelSort}>Sort asending</button>
      {/* <div className="container">{renderedList}</div> */}
      <ProductsCards productData={products} title={"Hello"} />
    </>
  );
};

export default FakeStoreApiApp;
