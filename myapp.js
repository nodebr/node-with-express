var express = require('express');
var cons = require('consolidate');

app = express();

app.get('/', function(req, res){
    res.send('Hello world!');
})
app.listen(3000);
console.log('app rodando na porta 3000');