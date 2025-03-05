// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = null;
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Clear the display
      currentInput = "";
      previousInput = "";
      operator = null;
      display.textContent = "0";
    } else if (value === "=") {
      // Perform calculation
      if (operator && previousInput !== "" && currentInput !== "") {
        currentInput = calculate(previousInput, currentInput, operator);
        display.textContent = currentInput;
        previousInput = "";
        operator = null;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operators
      if (currentInput !== "") {
        if (previousInput !== "") {
          currentInput = calculate(previousInput, currentInput, operator);
          display.textContent = currentInput;
        }
        previousInput = currentInput;
        currentInput = "";
        operator = value;
      }
    } else {
      // Handle numbers and decimal point
      if (value === "." && currentInput.includes(".")) return; // Prevent duplicate decimals
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 === 0 ? "Error" : (num1 / num2).toString();
    default:
      return "Error";
  }
}