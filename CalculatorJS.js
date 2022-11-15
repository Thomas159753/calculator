let firstValue = null;
let secondValue = null;
let operator = null;
let valueRotation = true;
let screenReset = false;

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const textdisplay = document.getElementById('textDisplay');
const clear = document.getElementById('AC');
const backspace = document.getElementById('backspace');
const equal = document.getElementById('equal');
const historyDisplay = document.getElementById('historyDisplay');



function add(a, b){
 result = +a + +b;
 textdisplay.innerText = Math.round(result * 1000) / 1000
 firstValue = textdisplay.innerText;
 
}

function sub(a, b){
  result = +a - +b;
  textdisplay.innerText = Math.round(result * 1000) / 1000
  firstValue = textdisplay.innerText;
}

function mult(a, b){
  result = +a * +b;
  textdisplay.innerText = Math.round(result * 1000) / 1000
  firstValue = textdisplay.innerText;
}

function div(a, b){
  result = +a / +b;
  textdisplay.innerText = Math.round(result * 1000) / 1000
  firstValue = textdisplay.innerText;
}

function perc(a,b){
  result = (100 * a) / b;
  textdisplay.innerText = Math.round(result * 1000) / 1000
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
  else if (operator === "%") {
    perc(a,b);
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
  valueRotation = true;
  screenReset = false;
}

function appendNumber(number) {
  if (screenReset === true){ //prevents adding number in screen if there is one
    textdisplay.innerText = null;
  }
  // if (textdisplay.innerText.includes("0") && !textdisplay.innerText.includes(".") ) {     i like this line so i keep it her
  // textdisplay.innerText = null}

  if (textdisplay.innerText === "" && number === "0"){  // this one works better
    return;
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
  screenReset = true;
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

// when you start the calculator and you press a number and then 
// you press equal it adds a zero at the front


//percen doesnt work yet
// keyboard not inported yet