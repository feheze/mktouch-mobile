var db_string = 'mongodb://127.0.0.1/controlApp';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;


var User;

db.on('error',console.error.bind(console,'Erro ao conecatar'));

db.once('open',function() {
	var userSchema = mongoose.Schema({

		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});
    //set export.User for  public use.
	exports.User = mongoose.model('User',userSchema);
});