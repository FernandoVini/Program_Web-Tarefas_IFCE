var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./views'));

app.get('/', function(req,res){
    res.render('home/index.ejs');
});

app.get('/Var', function(req,res){
    res.render('Var/Variavel_Ex');
});

app.get('/Let', function(req,res){
    res.render('Let/Let_Ex');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor rodando com Express");
});
