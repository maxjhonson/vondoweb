import React from "react";
import HomePage from "./pages/HomePage";

function App(props) {
  console.log("AAA", process.env);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
