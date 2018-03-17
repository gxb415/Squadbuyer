// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
<<<<<<< HEAD
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
=======
// var bodyParser = require("body-parser");
>>>>>>> refs/remotes/origin/master

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
<<<<<<< HEAD
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Static directory to be served
app.use(express.static(__dirname + './public'));

// Routes
// =============================================================
var routes = require("./controllers/sb_controllers.js");
app.use('/', routes);
=======

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("./public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
>>>>>>> refs/remotes/origin/master

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
<<<<<<< HEAD
    console.log("App listening on PORT " + PORT);
=======
  console.log("App listening on PORT " + PORT);
>>>>>>> refs/remotes/origin/master
});