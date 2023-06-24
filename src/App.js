import "./App.css";
import { useReducer } from "react";


// 3. function reducer 
// 5. takes state n action as argument
function reducer(state, action) {
  // 7. whatever logic we want to do goes here
  if (action.type === "increment") {
    return {
      ...state, // take my original state and add +1 to state's copy
      year: state.year + 1,
    };
  }

  if (action.type === "decremente") {
    return {
      ...state,
      year: state.year - 1,
    };
  }
}

function App() {

  let initialState = {
    year: 0, 
  
  }


  // 2. we start with useReducer which takes
  //reducer function as parameter / will return state n dispatch -> it's like a setState
  const [state, dispatch] = useReducer(reducer, initialState);

  function incrementClick() {
    // 4. we have despatch evrywhere
    // 6. we send some info to dispatch (type and payload)
    dispatch({
      type: "increment",
    });
  }

  function decrementClick() {
    dispatch({
      type: "decremente",
    });
  }

  return (
    <>
      Year: {state.year}
      <br />
      <br />
      <button onClick={incrementClick}>Increase</button>
      <button onClick={decrementClick}>Decrease</button>
    </>
  );
}

export default App;
