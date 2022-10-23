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
  textdisplay.innerText = +a - +b;
}

function mult(a, b){
  textdisplay.innerText = +a * +b;
}

function div(a, b){
  textdisplay.innerText = +a / +b;
}

function operate(operator, a, b){
  if (operator === "+") {
    add(a, b);
  }
  else if (operator === "-") {
    sub(a,b);
  }
  else if (operator === "×") {
    mult(a,b);
  }
  else if (operator === "÷") {
    div(a,b);
  }
}

backspace.addEventListener('click', () => textdisplay.innerText = textdisplay.innerText.slice(0, -1));

clear.addEventListener('click', () => ClearHistory());

equal.addEventListener('click', () => startEvaluation());

numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.innerText))
)

operators.forEach((button) =>
  button.addEventListener('click', () => appendOperator(button.innerHTML))
)
function ClearHistory (){
  textdisplay.innerText = null;
  historyDisplay.innerText = null;
}

function appendNumber(number,symbol ) {
  textdisplay.innerText += number, symbol;
    return textdisplay;
}

function appendOperator(operators){
  firstValue = textdisplay.innerText;
  operator = operators;
  historyDisplay.innerText = firstValue + operator;
  textdisplay.innerText = null;

}

function startEvaluation(){
  secondValue = textdisplay.innerText;
  historyDisplay.innerText = firstValue + operator + secondValue;
  operate(operator, firstValue, secondValue);
}