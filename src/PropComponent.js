import React from "react"

function PropComponent (props) {
console.log(props)
    return (
      <div>
        {" "}
        Hello, my name is {props.name} and my age is {props.age}, I love{" "}
        {props.favoriteColor} color.
      </div>
    );

}

export default PropComponent