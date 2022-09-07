
const calculator = document.getElementById('calculator');
const output = document.getElementById('output');
const numbers = document.querySelectorAll('numbers');
const operators = document.querySelectorAll('operators')
let firstNum = ''; secondNum = ''; operator = ''; product = ''; quotient = ''; sum = ''; difference = '';


function multiply() {
    product = Math.round(100000 * (firstNum * secondNum)) / 100000;
}

function divide() {
    quotient = Math.round(100000 * (firstNum / secondNum)) / 100000;
}

function add() {
    sum = Math.round(100000 * (Number(firstNum) + Number(secondNum))) / 100000;
}

function subtract() {
    difference = Math.round(100000 * (firstNum - secondNum)) / 100000;
}


function checkNum(str) {
    return /^[0-9.]+$/.test(str);
}

function setClear() {
    return output.textContent = '';
}

function setNumber(e) {
    if(checkNum(output.textContent) === false) {
         setClear();
    }
    return output.textContent += e.target.textContent;
}

function setOperator(e) {
    if(e.target.id === 'equalSign') {
        secondNum = output.textContent;
        operate(operator);
    } else {
    firstNum = output.textContent;
    operator = e.target.id;
    return output.textContent = e.target.textContent;
    }
}

function setDelete() {
    const newStr = output.textContent.slice(0, -1);
    return output.textContent = newStr;
}

function operate(operator) {
    if(operator === 'plusSign') {
        add(firstNum, secondNum);
        output.textContent = sum;
    } else if(operator === 'minusSign') {
        subtract(firstNum, secondNum);
        output.textContent = difference;
    } else if(operator === 'timesSign') {
        multiply(firstNum, secondNum);
        output.textContent = product;
    } else if(operator === 'divideSign') {
        divide(firstNum, secondNum);
        output.textContent = quotient;
    }
}

function getOutput(e) {
    const isButton = e.target.nodeName === 'BUTTON';
    if(!isButton) {
        return;
    } else if(e.target.classList.contains('numbers')) {
        setNumber(e);
    } else if(e.target.classList.contains('operators')) {
        setOperator(e);
    } else if(e.target.classList.contains('clear')) {
        setClear();
    } else if(e.target.classList.contains('delete')) {
        setDelete();
    }
}


calculator.addEventListener('click', e => getOutput(e));
