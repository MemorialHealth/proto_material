var express = require('express')
    bodyParser = require('body-parser');

var app =  express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('layout', { title: 'Material Design' });
});

app.listen(3000, function(){
    console.log('Memorial Material listening on port 3000');
});