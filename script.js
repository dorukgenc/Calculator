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

function doOperation(element) {
  if (element === "clear") {
    screenText.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    return;
  }

  if (!firstNumberClicked) {
    firstNumber = parseFloat(element);
    firstNumberClicked = true;
    screenText.textContent = firstNumber;
  } else if (!operatorClicked) {
    operator = element;
    operatorClicked = true;
    screenText.textContent = firstNumber + " " + operator;
  } else if (!secondNumberClicked) {
    secondNumber = parseFloat(element);
    secondNumberClicked = true;
    let result =
      firstNumber +
      " " +
      operator +
      " " +
      secondNumber +
      " " +
      "= " +
      operate(firstNumber, secondNumber, operator);
    operate(firstNumber, secondNumber, operator);
    screenText.textContent = result;
    firstNumberClicked = false;
    operatorClicked = false;
    secondNumberClicked = false;
  }
}

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

  doOperation(element);
}

document.addEventListener("click", clickHandler);
