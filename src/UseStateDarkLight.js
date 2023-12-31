import React, { useState } from "react";

function UseStateDarkLight() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {isDark ? <h1>It is Dark</h1> : <h1>It is Not Dark</h1>}
      <button
        onClick={() => {
          setIsDark(!isDark); 
          console.log(isDark);
        }}
      >
        Make is Dark
      </button>
    </>
  );
}

export default UseStateDarkLight;
