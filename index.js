var express = require('express')
    bodyParser = require('body-parser');

var app =  express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('main', { title: 'Material Design' });
});

app.get('/company', function(req, res){
    res.render('company', { title: 'Meet Us'});
});

app.get('/careers', function(req, res){
    res.render('careers', { title: 'Join Us'});
});

app.get('/doctors', function(req, res){
    res.render('doctors', { title: 'Find A Doctor' });
});

app.listen(port, function(){
    console.log('Memorial Material listening on port ' + port);
});