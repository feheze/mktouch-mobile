var express = require('express');

//module exports selead express(); for use external.
var app = module.exports = express();

var bodyParser = require('body-parser')

var allowCors = function(req,res,next){
	res.header('Acces-Control-Allow-Origin','127.0.0.1:5000');
	res.header('Acces-Control-Allow-Methods','GET,PUT,DELETE,POST');
	res.header('Acces-Control-Allow-Headers','Content-Type');
	res.header('Acces-Control-Allow-Credentials','true');
	res.header('X-Powered-By','Mktouch');
	next();
}

app.listen(5000);

app.use(bodyParser.json());
app.use(allowCors);
app.use(bodyParser.urlencoded({
   
 	extended: true     
}));
