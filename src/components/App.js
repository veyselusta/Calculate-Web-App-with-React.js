import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" />
        <input type="number" placeholder="0" />
      </div>

      <button>Add Them!</button>

      <h2>0</h2>
    </div>
  );
}
