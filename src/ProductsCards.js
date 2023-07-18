import React from "react";
import "./App.css";

const ProductsCards = (props) => {
  console.log(props);

  const products = props.productData;
  

  return (
    <>
      <div>
        {products.map((product) => {
          return (
            <>
              <div >
                <div style={{ width: "400px", height: "500px" }}>
                  <img src={product.image} />
                  <h3>{product.title}</h3>
                  <h4>${product.price}</h4>
                  <hr />
                  <p>{product.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsCards;
