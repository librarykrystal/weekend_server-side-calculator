const express = require('express');
// let userInput = require('./modules/calc');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port', port);
});

let userInput;
let result;
let historyList = [];

app.post('/calc', function(req, res){
    // console.log('server.js app.post/calc TEST', req.body);
    userInput = req.body;
    // console.log('app.post userInput:', req.body);
    if(req.body.operation == '+'){
        result = Number(req.body.firstOperand) + Number(req.body.secondOperand);
    } else if(req.body.operation == '-'){
        result = Number(req.body.firstOperand) - Number(req.body.secondOperand);
    } else if(req.body.operation == '*'){
        result = Number(req.body.firstOperand) * Number(req.body.secondOperand);
    } else if(req.body.operation == '/'){
        result = Number(req.body.firstOperand) / Number(req.body.secondOperand);
    }
    req.body.result = result;
    console.log('CURRENT:', req.body);
    historyList.push(req.body);
    console.log('HISTORY:', historyList);
    res.sendStatus(201);
    // console.log('current input:', currentInput);
});


app.get('/calc', function(req, res){
    // console.log('server.js app.get/calc TEST');
    res.send(userInput);
});

app.get('/history', function(req, res){
    // console.log('server.js app.get/history TEST');
    res.send(historyList);
})