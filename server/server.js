const express = require('express');
let userInput = require('./modules/calc');
// let calcLog = require('./modules/history');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.use(express.urlencoded());

const calcLogic = require('./modules/calc');
// const history = require('./modules/history');

app.listen(port, () => {
    console.log('listening on port', port);
});


app.post('/calc', function(req, res){
    // console.log('server.js app.post/calc TEST', req.body);
    userInput = req.body;
    res.sendStatus(201);
    // console.log('current input:', currentInput);
});

app.get('/calc', function(req, res){
    // console.log('server.js app.get/calc TEST');
    res.send(calcLogic);
});
