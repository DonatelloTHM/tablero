import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Authorization from "./Authorization";
import Authorized from "./Authorized";

function App() {
  return (
    <div className="App">
      {/* <Authorization /> */}
      <Authorized />
    </div>
  );
}

export default App;
