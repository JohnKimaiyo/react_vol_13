import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("Good monring React Devlpoer");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
