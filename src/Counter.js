import React from "react";
import { useReducer } from "react";
import PropComponent from "./PropComponent";

function reducer(state, action) {
  if (action.type === "increament") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "decreament") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "reset") {
    return {
        ...state,
        counter: state.count = 0
    }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  function increamentClick() {
    dispatch({
      type: "increament",
    });
  }

  function decreamentClick() {
    dispatch({
      type: "decreament",
    });
  }

  return (
    <div>
      <PropComponent
        name="Mariam"
        age={34}
        favoriteColor={["green", "black"]}
      />
      <br />
      Counter: {state.counter}
      <br />
      <button onClick={increamentClick} disabled={state.counter === 5}>
        Increment
      </button>
      <button onClick={decreamentClick} disabled={state.counter === -5}>
        Decremente
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
