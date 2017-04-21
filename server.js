// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
  routeName: "Scott",
  name: "Scott R",
  phone: "888-888-8888",
  email: "name@name.com",
  ID: "2"
}, {
  routeName: "David",
  name: "David S",
  phone: "999-999-9999",
  email: "200@number.com",
  ID: "12"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/new", function(req, res) {
  res.sendFile(path.join(__dirname, "new.html"));
});
// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
       return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newRes = req.body;
  newRes.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes;

  characters.push(newcharacter);

  res.json(newcharacter);
});
app.post("/api/all", function(req, res) {
//view characters
 return res.json(characters);
  });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
