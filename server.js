// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;// process.env.PORT || 

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var friends = [
  {
    name: "Tarciso",
    photo: "https://drive.google.com/file/d/0B2QZO2XYfF3TR05NV3gxc3dVSkE/view?usp=sharing",
  },
  {
    name: "Ale",
    photo: "https://drive.google.com/file/d/0B2QZO2XYfF3TR0pORWROY2tWU1U/view?usp=sharing",
  }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api", function(req, res) {
  res.json(friends);
});


// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});