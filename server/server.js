const express = require('express');
// let userInput = require('./modules/calc');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port', port);
});


app.post('/calc', function(req, res){
    // console.log('server.js app.post/calc TEST', req.body);
    userInput = req.body;
    console.log('app.post userInput:', req.body);
    // console.log('REQ.BODY!', req.body.operation);
    // console.log('USERINPUT!', userInput.operation);
    if(req.body.operation == 'add'){
        result = Number(userInput.firstOperand) + Number(userInput.secondOperand);
    } else if(req.body.operation == 'subtract'){
        result = Number(userInput.firstOperand) - Number(userInput.secondOperand);
    } else if(req.body.operation == 'multiply'){
        result = Number(userInput.firstOperand) * Number(userInput.secondOperand);
    } else if(req.body.operation == 'divide'){
        result = Number(userInput.firstOperand) / Number(userInput.secondOperand);
    }
    console.log(result);

    res.sendStatus(201);
    // console.log('current input:', currentInput);
});


app.get('/calc', function(req, res){
    // console.log('server.js app.get/calc TEST');
    res.send(userInput);
});
