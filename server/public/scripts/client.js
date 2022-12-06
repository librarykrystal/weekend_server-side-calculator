// console.log('client.js TEST');

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
    // console.log('f postData TEST');
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: userInput,
    }).then(function(response){
        // console.log('POST response:', response);   // this logs 'Created'
        getResult();
        getHistory();
    }).catch(function(error){
        alert(error);
    })
}

function getResult(){
    // console.log('client.js f getResult TEST');
    $.ajax({
        method: 'GET',
        url: '/calc',   // is defined in the app.get in server.js
    }).then(function(response){
        console.log('GET RESPONSE/calc', response);
        appendResultToDom(response);  // sending response to append function
    })
}

function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/history',   // is defined in the app.get in server.js
    }).then(function(response){
        console.log('GET RESPONSE/history', response);
        appendHistoryToDom(response);  // sending response to append function
    })
}

function appendResultToDom(currentOp){
    console.log('f appendResultToDom TEST');
    $('#calcResult').empty();
    $('#calcResult').append(`${currentOp.result}`);
}

function appendHistoryToDom(historyArray){
    console.log('f appendHistoryToDom TEST', historyArray);
    $('#historyList').empty();
    for(let item of historyArray){
        $('#historyList').append(`
            <li>${item.firstOperand} ${item.operation} ${item.secondOperand} = ${item.result}</li>
        `)
    }
}
