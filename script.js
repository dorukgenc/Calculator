function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let firstNumber;
let secondNumber;
let operator;
let firstNumberClicked = false;
let operatorClicked = false;
let secondNumberClicked = false;
let screenText = document.querySelector(".screenText");

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function clickHandler(event) {
  let target = event.target;
  let element = target.textContent;

  if 
}

document.addEventListener("click", clickHandler);
