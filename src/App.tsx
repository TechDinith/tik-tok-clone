import React from "react";
import "./App.scss";
import Layout from "./layout";

function App() {
  document.documentElement.classList.add("dark");

  return (
    <div className="App h-screen">
      <Layout />
    </div>
  );
}

export default App;
