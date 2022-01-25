import React from "react";
import { Home } from "./src/pages/Home";
import { StatusBar } from "react-native";
function App() {
  return (
    <>
      <StatusBar barStyle={"default"} />
      <Home />
    </>
  );
}

export default App;
