import React from "react";

const Card = ({ details }) => {

  return (
    <div style={{ marginRight: "20px" }}>
      <img src={details.image} />
      <p>Price : {details.price}</p>
      <p>Description: {details.description}</p>
    </div>
  );
};

export default Card;
