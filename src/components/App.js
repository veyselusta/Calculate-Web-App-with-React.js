import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  const calculate = () => {
    setTotal(number1 + number2);
  };

  const changeFirst = (event) => {
    let numFirst = +event.target.value;
    setNumber1(numFirst);
  };

  const changeSecond = (event) => {
    let numSecond = +event.target.value;
    setNumber2(numSecond);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input onChange={changeFirst} type="number" placeholder="0" />
        <input onChange={changeSecond} type="number" placeholder="0" />
      </div>

      <button onClick={calculate}>Add Them!</button>

      <h2>{total}</h2>
    </div>
  );
}
