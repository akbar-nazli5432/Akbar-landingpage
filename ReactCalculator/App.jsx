//Project-React-Calculator

import { useState } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  // Number button
  const inputNumber = (number) => {
    if (waitingForSecondNumber) {
      setDisplay(number);
      setWaitingForSecondNumber(false);
      return;
    }

    setDisplay(display === "0" ? number : display + number);
  };

   // Decimal button
  const inputDecimal = () => {
    if (waitingForSecondNumber) {
      setDisplay("0.");
      setWaitingForSecondNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

   // Calculation logic
  const calculate = (first, second, operation) => {
    const a = parseFloat(first);
    const b = parseFloat(second);

    switch (operation) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "×":
        return a * b;

      case "÷":
        return b === 0 ? "Error" : a / b;

      default:
        return b;
    }
  };


