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
    selectedOp = '+';
}

function selectSubtract(){
    // console.log('f selectSubtract TEST');
    selectedOp = '-';
}

function selectMultiply(){
    // console.log('f selectMultiply TEST');
    selectedOp = '*';
}

function selectDivide(){
    // console.log('f selectDivide TEST');
    selectedOp = '/';
}

let userInput;
// let result;

function submitIt(){
    // console.log('f submitIt TEST');
    userInput = {
        firstOperand: $('#firstNumber').val(),
        operation: selectedOp,
        secondOperand: $('#secondNumber').val(),
        result: null,
    }
    // using submitIt to bundle into obj (above)
    // then to call postData function:
    postData();
    // console.log('User Input:', userInput);
}

function clearFields(){
    // console.log('f clearFields TEST');
    $('#firstNumber').val('');
    // operation will just get re-assigned each time a new button is clicked...
    // if the operation button changed appearance when clicked, would reset that here
    $('#secondNumber').val('');
}

function postData(){
    console.log('f postData TEST');
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: userInput,
    }).then(function(response){
        console.log('POST response:', response);   // this logs 'Created'
        getResult();
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
    }).then(function(response){
        console.log('GET RESPONSE/calc', response);
        appendToDom(response);  // sending response to appendToDom function
    })
}


// THIS APPROACH ISN'T RIGHT...
// Check instructions
// Needs to append list of all calcs each time
// But when I tried a loop, it said not iterable
// COME BACK TO THIS
function appendToDom(historyArray){
    console.log('f appendToDom TEST');
    // $('#historyList').empty();
    $('#historyList').append(`<li> ${historyArray.firstOperand} </li>`);
}
