let firstValue = null;
let secondValue = null;
let operator = null;
let valueRotation = true;

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const textdisplay = document.getElementById('textDisplay');
const clear = document.getElementById('AC');
const backspace = document.getElementById('backspace');
const equal = document.getElementById('equal');
const historyDisplay = document.getElementById('historyDisplay');



function add(a, b){
 result = +a + +b;
 textdisplay.innerText = result.toFixed(2);
 firstValue = textdisplay.innerText;
}

function sub(a, b){
  result = +a - +b;
  textdisplay.innerText = result.toFixed(2);
  firstValue = textdisplay.innerText;
}

function mult(a, b){
  result = +a * +b;
  textdisplay.innerText = result.toFixed(2);
  firstValue = textdisplay.innerText;
}

function div(a, b){
  result = +a / +b;
  textdisplay.innerText = result.toFixed(2);
  firstValue = textdisplay.innerText;
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
  else if (operator === "÷" && secondValue !== "0") {
    div(a,b);
  }
  else if (operator === "÷" && secondValue === "0"){
    ClearHistory();
    historyDisplay.innerText = "WHY????";
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
  firstValue = null;
  secondValue = null;
  operator = null;
}

function appendNumber(number) {
  if (secondValue !== null){ //prevents adding number in screen if there is one
    textdisplay.innerText = null;
  }

  if (number === "."){
    addDot(number);
  }

  if (number >= 0) {
    textdisplay.innerText += number;
    return textdisplay;
  }
}

function appendOperator(operators){
  if (valueRotation === false){
    secondValue = textdisplay.innerText
    operate(operator, firstValue, secondValue)
    operator = operators;
    historyDisplay.innerText = textdisplay.innerText + operator;
    textdisplay.innerText = null;
  }
  
  if (valueRotation === true) {
    operator = operators
    firstValue = textdisplay.innerText;
    historyDisplay.innerText = textdisplay.innerText + operator;
    textdisplay.innerText = null;
  }
  valueRotation = false;
}

function startEvaluation(){
  secondValue = textdisplay.innerText;
  historyDisplay.innerText = firstValue + operator + secondValue;
  operate(operator, firstValue, secondValue);
  valueRotation = true;
}

function addDot (number){
  
  if (textdisplay.innerText === ""){
    textdisplay.innerText = "0" + number;
  }
  if (textdisplay.innerText.includes(".")) return
  textdisplay.innerText += number;
}

// ------- notes

// first thry to make the dot to work with the appendNumber function
// should i make a new function for the dot?
// do i need to fix value rotation after i press clear?
