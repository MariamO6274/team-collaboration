import React, { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";
import "./App.css";

const FakeStoreApiApp = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      return <>Loading...!!!!!!</>;
    }
  }, []);

  const handelAsending = () => {
    console.log(products);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else return 1;
    });
    setProducts(sortedProducts);
  };

  const handelDescending = () => {
    const sortetHightToLow = [...products];
    sortetHightToLow.sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else return -1;
    });
    setProducts(sortetHightToLow);
  };
  // // original
  // const handelInput = (eventDetails) => {
  //   console.log(eventDetails.target.value);
  //   const result = eventDetails.target.value;

  //   const filterProducts = [];
  //   for (let i = 0; i < products.length; i++) {
  //     let product = products[i];
  //     if (result === product.title) {
  //       filterProducts.push(product);
  //     }
  //   }
  //   setProducts(filterProducts);
  // };

const search = (productData) => {
  return productData.filter((item) =>
    item.title.toLowerCase().includes(filterItems)
  );
}

  return (
    <>
      <h1> 20 Products from Fake Store API</h1>
      <button onClick={handelAsending}>Asending</button>
      <button onClick={handelDescending}>Descending</button>
      <input type="search" placeholder="Search..." onChange={(e) => setFilterItems(e.target.value)} />
      <br />
      <br />
      <ProductsCards productData={search(products)} />
    </>
  );
};

export default FakeStoreApiApp;
