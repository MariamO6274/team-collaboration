import React from "react";
import "./App.css";

const ProductsCards = ({ productData }) => {
  //const ProductsCards = (props) => {
  // console.log(props);

  // const products = props.productData;

  return (
    <>
      <div>
        {productData.map((item) => {
          return (
            <>
              <div>
                <div style={{ width: "400px", height: "500px" }} key={item.id}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                  <h4>${item.price}</h4>
                  <hr />
                  <p>{item.description}</p>
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
