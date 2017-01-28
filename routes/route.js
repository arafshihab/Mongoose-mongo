var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');

module.export = function(app){
	app.get('/', function(req,res){
		res.end("Node-Android-Project");
	});
	
	app.post('/login', function(req,res){
		var email = req.body.email;
		var password = req.body.password;
		
		login.login(email,password,function(found){
			console.log(found);
			res.json(found);
		});
	});
	
	app.post('/register', function(req,res){
		var email = req.body.email;
		var password = req.body.password;
		
		register.register(email,password,function(found){
			console.log(found);
			res.json(found);
		});
	});
	
	app.post('/api/resetpass', function(req,res){
		var id = req.body.id;
		var opass = req.body.oldpass;
		var npass = req.body.oldpass;
		
		chgpass.cpass(id,opass,npass,function(found){
			console.log(found);
			res.json(found);
		});
	});
	
	app.post('/api/resetpass/chg', function(req,res){
		var email = req.body.email;
		var code = req.body.coode;
		var npass = req.body.newpass;
		
		chpass.respass_chg(email,code,npass,function(found){
			console.log(found);
			res.json(found);
		});
	});
};