const express = require('express');
// const inputsArray = require('./modules/calc');
// const currentInput = require('./modules/calc');
// const calcLog = require('./modules/history');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.use(express.urlencoded());

const calcLogic = require('./modules/calc');
const history = require('./modules/history');

app.listen(port, () => {
    console.log('listening on port', port);
});


// app.post('/calc', function(req, res){
//     console.log('post - /calc TEST', req.body);
//     // sending new inputs to arrays in calc module
//     inputsArray.push(req.body);
//     currentInput.empty();
//     currentInput.push(req.body);
//     // res.sendStatus(201);
//     console.log('ALL:', inputsArray);
// });

app.get('/calc', function(req, res){
    console.log('server.js app.get/calc TEST');
    res.send(calcLogic);
});

app.get('/history', function(req, res){
    console.log('server.js app.get/history TEST');
    res.send(history);
});