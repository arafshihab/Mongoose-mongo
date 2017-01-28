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