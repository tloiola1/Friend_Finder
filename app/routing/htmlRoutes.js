//dependencies
var path = require('path');


module.exports = function(app){
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));

	});
	app.get('/match', function(req, res){
		res.sendFile(path.join(__dirname, '../public/match.html'))
	})
	
}
// Basic route that sends the user first to the AJAX Page