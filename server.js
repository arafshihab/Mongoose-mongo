var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();


app.use('/static', express.static('public'));

// Load mongoose package
var mongoose = require('mongoose');
		// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/test');
		// Create a schema
var Users = new mongoose.Schema({
		name: String,
		userPassword: String,
		note: String,
		updated_at: { type: Date, default: Date.now },
});
		// Create a model based on the schema
var User = mongoose.model('User', Users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    var queryData = "";
	if(req.method == 'POST') {
        req.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });
}else{
	console.log("No post data")
}
});

router.get("/users", function(req,res){
        var db = new User({});
        var response = {};
        // fetch email and password from REST request.
        // Add strict validation when you use this in Production.
        db.name = "Araf"; 
        // Hash the password using SHA1 algorithm.
	
        db.userPassword =  "Admin";
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
				
            }
            res.json(response);
        
    });
});
app.get('/wordpress', function(req, res){
    res.render('/wordpress');
});

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");