let firstValue = null;
let secondValue = null;
let operator = null;

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const textdisplay = document.getElementById('textDisplay');
const clear = document.getElementById('AC');
const backspace = document.getElementById('backspace');
const equal = document.getElementById('equal');
const historyDisplay = document.getElementById('historyDisplay');



function add(a, b){
 textdisplay.innerText = +a + +b;

}

function sub(a, b){
    return a - b
}

function mult(a, b){
  return a * b
}

function div(a, b){
  return a / b
}

function operate(operator, a, b){
  if (operator === "+") {
    add(a, b)
  }

}

backspace.addEventListener('click', () => textdisplay.innerText = textdisplay.innerText.slice(0, -1));

clear.addEventListener('click', () => textdisplay.innerText = "");

equal.addEventListener('click', () => startEvaluation());

numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.innerText))
)

operators.forEach((button) =>
  button.addEventListener('click', () => appendOperator(button.innerText))
)

function appendNumber(number,symbol ) {
  textdisplay.innerText += number, symbol;
    return textdisplay;
}

function appendOperator(Getoperators){
  firstValue = textdisplay.innerText;
  operator = Getoperators;
  historyDisplay.innerText = textdisplay.innerText + operator;
  textdisplay.innerText = null;

}

function startEvaluation(){
  secondValue = textdisplay.innerText;
  operate(operator, firstValue, secondValue);

}