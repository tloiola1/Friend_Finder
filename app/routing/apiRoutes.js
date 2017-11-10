//load data
var friends = require('../data/friends');

module.exports = function(app){

	app.get("/api", function(req, res) {
	  res.json(friends);
	});

	app.post("/api/new", function(req, res) {
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
	  var newUser = req.body;

	  console.log(newUser);

	  friends.push(newUser);

	  res.json(newUser);

	});
};