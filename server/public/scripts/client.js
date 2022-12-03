console.log('client.js TEST');

$(document).ready(onReady);

function onReady(){
    console.log('f onReady TEST');
    $('#addBtn').on('click', selectAdd);
    $('#subtractBtn').on('click', selectSubtract);
    $('#multiplyBtn').on('click', selectMultiply);
    $('#divideBtn').on('click', selectDivide);
    $('#clearBtn').on('click', clearFields);
    $('#submitBtn').on('click', submitIt);
}

let selectedOp;

function selectAdd(){
    // console.log('f selectAdd TEST');
    selectedOp = 'add';
}

function selectSubtract(){
    // console.log('f selectSubtract TEST');
    selectedOp = 'subtract';
}

function selectMultiply(){
    // console.log('f selectMultiply TEST');
    selectedOp = 'multiply';
}

function selectDivide(){
    // console.log('f selectDivide TEST');
    selectedOp = 'divide';
}

let userInput;
let result;

function submitIt(){
    // console.log('f submitIt TEST');
        userInput = {
            firstOperand: $('#firstNumber').val(),
            operation: selectedOp,
            secondOperand: $('#secondNumber').val(),
        }
    console.log('User Input:', userInput);
    if(selectedOp == 'add'){
        result = Number(userInput.firstOperand) + Number(userInput.secondOperand);
    } else if(selectedOp == 'subtract'){
        result = Number(userInput.firstOperand) - Number(userInput.secondOperand);
    } else if(selectedOp == 'multiply'){
        result = Number(userInput.firstOperand) * Number(userInput.secondOperand);
    } else if(selectedOp == 'divide'){
        result = Number(userInput.firstOperand) / Number(userInput.secondOperand);
    }
    console.log(result);
}

function clearFields(){
    // console.log('f clearFields TEST');
    $('#firstNumber').val('');
    // how do i clear the operation variable?  Maybe don't need to since it'll just get re-assigned?
    // if the operation button changes appearance when clicked, make it reset here
    $('#secondNumber').val('');
}


// got calc functionality working first
// NEXT...
// edit to send the input obj to server via POST REQ
// math gets done server side
// use GET REQ to get result and append to DOM