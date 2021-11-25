import React from "react";
import CreateTour from "./components/host/tour/create/CreateTour";
import HomePage from "./pages/HomePage";

function App(props) {
  console.log("AAA", process.env);

  return (
    <div>
      <CreateTour />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
