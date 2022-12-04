const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.use(express.urlencoded());

const calcLogic = require('./modules/calc');

app.listen(port, () => {
    console.log('listening on port', port);
});


app.post('/calc', function(req, res){
    console.log('post - /calc TEST', req.body);
    // sending new inputs to array in calc module
    inputsArray.push(req.body);
    // res.sendStatus(201);
});

app.get('/calc', function(req, res){
    console.log('GET - /calc TEST');
    res.send(calcLogic);
});

