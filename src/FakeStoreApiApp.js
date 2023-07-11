import React, { useState } from "react";
import { useEffect } from "react";

// You’ll get this 20 products, out of this 20 products, you show all this 20 products in cards,
// You create a drop down for addending and dissenting orders..sorting

const FakeStoreApiApp = () => {
  const [products, setproducts] = useState();

  useEffect(() => {
    setTimeout(()=> {

        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setproducts(json);
        });
    }, 2000)
  }, []);

  return <div>FakeStoreApiApp</div>;
};

export default FakeStoreApiApp;
