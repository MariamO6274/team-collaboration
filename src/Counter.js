import React from "react";
import { useReducer } from "react";
import PropComponent from "./PropComponent";

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
      <PropComponent
        name="Mariam"
        age={34}
        favoriteColor={["green", "black"]}
      />
      Counter: {state.counter}
      <button onClick={increamentClick} disabled={state.counter === 5}>
        Increment
      </button>
      <button onClick={decreamentClick} disabled={state.counter === - 5}>
        Decremente
      </button>
    </div>
  );
}

export default Counter;
