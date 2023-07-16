import { useEffect, useState } from "react";
import Card from "./Card";

const ProductApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  });

  //
  var listOfCards = [];
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log("Product Details", product);
    listOfCards.push(<Card details={product} />);
  }

  return (
    <>
      <h1>Products Listing</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>{listOfCards}</div>
    </>
  );
};

export default ProductApp;
