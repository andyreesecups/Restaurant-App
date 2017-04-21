// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "restaurant"
});

connection.connect(function(err) {
    if (err) throw err;
});

// Star Wars Characters (DATA)
// =============================================================
var reservations;

var start = function() {
    connection.query("SELECT * FROM reservations", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            aReservation[i] = {
                routeName: res[i].name.replace(/\s+/g, "").toLowerCase(),
                name: res[i].name,
                phoneNumber: res[i].phoneNum,
                email: res[i].email,
                customerId: res[i].customerId
            }

            reservations.push(aReservation[i]);
        }
        console.log(reservations);
    }); 
}
    // Sets up the Express app to handle data parsing

start();


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservations?", function(req, res) {
    var chosen = req.params.reservations;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < reservations.length; i++) {
            if (chosen === reservations[i].routeName) {
                return res.json(reservations[i]);
            }
        }
        return res.json(false);
    }
    return res.json(reservations);
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});
app.post("/api/all", function(req, res) {
    //view characters
    return res.json(reservations);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



