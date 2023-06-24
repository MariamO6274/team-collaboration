import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  // logic will go here
  if(action.type === "increament"){
    return {
        ...state,
        counter: state.counter + 1
    }
  }

// go up to +5 and -5 then disable the button
 
    if (action.type === "decreament") {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
 
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  function increamentClick() {
    dispatch({
        type: "increament"
    });
  }

  function decreamentClick() {
    dispatch({
        type: "decreament"
    });
  }

  return (
    <div>
      Counter: {state.counter}
      <button onClick={increamentClick}>Increment</button>
      <button onClick={decreamentClick}>Decremente</button>
    </div>
  );
}

export default Counter;