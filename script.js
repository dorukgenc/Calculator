let screenText = document.querySelector(".screenText");
let screenText2 = document.querySelector(".screenText2");
let operator;
let firstNumber;
let secondNumber;
let firstNumberArray = [];
let secondNumberArray = [];
let isResultDisplayed = false;
screenText.textContent = null;
screenText2.textContent = null;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
//stackoverflow
function isFloat(n) {
  return n === +n && n !== (n | 0);
}
function isInteger(n) {
  return n === +n && n === (n | 0);
}
//stackoverflow

function divide(num1, num2) {
  let divided = num1 / num2;
  if (isInteger(divided)) {
    return divided;
  } else {
    return divided.toFixed(5);
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

  if (target.textContent === "=") {
    evaluate(screenText.textContent);
    isResultDisplayed = true;

    screenText2.textContent =
      "Please press the 'Clear' button to start a new calculation.";
  } else if (target.textContent === "Clear") {
    clear();
  } else if (
    (target.textContent === "0" ||
      target.textContent === "1" ||
      target.textContent === "2" ||
      target.textContent === "3" ||
      target.textContent === "4" ||
      target.textContent === "5" ||
      target.textContent === "6" ||
      target.textContent === "7" ||
      target.textContent === "8" ||
      target.textContent === "9" ||
      target.textContent === "+" ||
      target.textContent === "-" ||
      target.textContent === "*" ||
      target.textContent === "/") &&
    !isResultDisplayed
  ) {
    screenText.textContent += target.textContent;
  }
}

document.addEventListener("click", clickHandler);

function evaluate(str) {
  let arr = str.split("");
  operator = arr.filter((i) => isNaN(parseInt(i))).join("");
  let hitOperator = false;
  arr.forEach((element) => {
    if (element === operator) {
      hitOperator = true;
      return;
    }
    if (!hitOperator) {
      firstNumberArray.push(element);
    } else if (hitOperator) {
      secondNumberArray.push(element);
    }

    firstNumber = parseInt(firstNumberArray.join(""));
    secondNumber = parseInt(secondNumberArray.join(""));
  });

  screenText.textContent = operate(firstNumber, secondNumber, operator);
}
function clear() {
  screenText.textContent = null;
  firstNumber = null;
  secondNumber = null;
  firstNumberArray = [];
  secondNumberArray = [];
  operator = null;
  screenText2.textContent = null;
  isResultDisplayed = false;
}
