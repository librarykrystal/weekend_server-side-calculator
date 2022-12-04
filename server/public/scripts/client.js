console.log('client.js TEST');

$(document).ready(onReady);

function onReady(){
    // console.log('f onReady TEST');
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
// let result;

function submitIt(){
    // console.log('f submitIt TEST');
    userInput = {
        firstOperand: $('#firstNumber').val(),
        operation: selectedOp,
        secondOperand: $('#secondNumber').val(),
    }
    // using submitIt to bundle into obj
    // then to call postData function:
    postData();

    // below calc logic works here, will need to be moved to calc module

    // console.log('User Input:', userInput);
    // if(selectedOp == 'add'){
    //     result = Number(userInput.firstOperand) + Number(userInput.secondOperand);
    // } else if(selectedOp == 'subtract'){
    //     result = Number(userInput.firstOperand) - Number(userInput.secondOperand);
    // } else if(selectedOp == 'multiply'){
    //     result = Number(userInput.firstOperand) * Number(userInput.secondOperand);
    // } else if(selectedOp == 'divide'){
    //     result = Number(userInput.firstOperand) / Number(userInput.secondOperand);
    // }
    // console.log(result);
}

function clearFields(){
    // console.log('f clearFields TEST');
    $('#firstNumber').val('');
    // how do i clear the operation variable?  Maybe don't need to since it'll just get re-assigned?
    // if the operation button changes appearance when clicked, make it reset here
    $('#secondNumber').val('');
}

function postData(){
    console.log('f postData TEST');
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: userInput,
    }).then(function(response){
        console.log('POST-calc response:', response);
        // here is where we called getQuotes() which got the updated array
        getResult();  // in this case we want to get the calculator result using GET below
    }).catch(function(error){
        alert(error);
    })
    $.ajax({
        method: 'POST',
        url: '/history',
        data: userInput,
    }).then(function(response){
        console.log('POST-hist response:', response);
        getResult();
        getHistory();
    }).catch(function(error){
        alert(error);
    })
}

function getResult(){
    console.log('client.js f getResult TEST');
    // GET result from calc module
    $.ajax({
        method: 'GET',
        url: '/calc',   // is defined in the app.get in server.js
    }).then(function(responseCalc){
        console.log('GET RESPONSE', responseCalc);
    })
    appendResultToDom();  // add response within ()
}

function getHistory(){
    // get history array from history module
    $.ajax({
        method: 'GET',
        url: '/history',
    }).then(function(responseHist){
        console.log('GET RESPONSE', responseHist);
    })
    appendHistToDom();  // add response within ()
}

function appendResultToDom(){
    console.log('f appendResultToDom TEST');
    // append
}

function appendHistToDom(){
    console.log('f appendHistToDom TEST');
    // append
}