var app = require('./app.config.js');	
var validator = require('validator');
var controllerUser = require('./controller/controllerUser.js');

app.get('/',function(req,res){

 res.end('ON');

});

//Get list users
app.get('/users',function(req,res){

	controllerUser.list(function(responseUser){
		res.json(responseUser);
	});
});


//Get user by id.
app.get('/users/:id',function(req,res){

	var id = validator.trim(validator.escape(req.param('id')));

     controllerUser.user(id,function(responseUser){
     	res.json(responseUser);
     });	

});


//Post for new user
app.post('/users',function(req,res){

       var fullname = validator.trim(validator.escape(req.param('fullname')));
	   var email = validator.trim(validator.escape(req.param('email')));
	   var password = validator.trim(validator.escape(req.param('password')));

	   controllerUser.save(fullname,email,password,function(responseUser){
	   		res.header('X-Control-Token',responseUser.id);
	   		res.json(responseUser);

	   });		
	
	});

//Update Users
app.put('/users',function(req,res){
	
       var id = validator.trim(validator.escape(req.param('id')));
       var fullname = validator.trim(validator.escape(req.param('fullname')));
	   var email = validator.trim(validator.escape(req.param('email')));
	   var password = validator.trim(validator.escape(req.param('password')));

	   controllerUser.update(id,fullname,email,password,function(responseUser){
	   		res.json(responseUser);
	   });

});

	


//delete user by id
app.delete('/users/:id',function(req,res){

	var id = validator.trim(validator.escape(req.param('id')));

	controllerUser.delete(id,function(responseUser){
			res.json(responseUser);
	});


});
